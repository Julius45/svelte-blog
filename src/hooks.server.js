import { auth } from "$db/fake_auth";

export async function handle({ event, resolve}) {
    const user = auth();
    event.locals.user = user;
    event.locals.this_is_a_test = 'this is a test';
    event.cookies.set('test', 'testing');
    //console.log('event', event);
    return resolve(event);


}