

/** @type {import('./$types').PageServerLoad} */
import {env} from '$env/dynamic/private';
console.log('env',env);
import { LUT_API } from '$env/static/private';
console.log('LUT_API',LUT_API);

import {error, redirect} from '@sveltejs/kit';
export async function load({ fetch, params, setHeaders, locals }) {
    console.log( locals.user);
    if (!locals?.user?.id) {
        throw redirect(307, '/');
    }
    //const parent_data = await parent();
    //console.log('parent data', parent_data);

    setHeaders({
        'Cache-Control': 'max-age=3600', // 1 hour. Response headers.
    }); // set response headers
    const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
    const data = await res.json();
    if (data.message) {
        throw error(404, {
            message: data.message,
        })
    }

    return {
        episode: data,
        user: locals.user,
    };
};