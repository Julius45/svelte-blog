import { sequence} from '@sveltejs/kit/hooks';
import { auth } from "$db/fake_auth";

async function logger({ event, resolve}){

    const start_time = Date.now();
    console.log('start time', start_time);
    // wait on the response, run the rest of the hooks, then return the response
    const response = await resolve(event);
    console.log(`${(Date.now() - start_time)/1000 }s ${event.request.method} ${event.url.pathname}}`)
    return response;
}


function authorize({ event, resolve}){
    console.log('authorizing');
    const user = auth();
    event.locals.user = user;
    return resolve(event);
}

export const handle = sequence(logger, authorize);

// intercepts the fetch request
// export function handleFetch  ({request, fetch}) {
//     return fetch(request);
// }


// intercepts errors
// export function handleError({ error, event}){
//     // logger(error, event)
//     return{
//         message: 'Oops im intercepting a hook',
//         code: error.code,
//     };
// }