/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, setHeaders, locals }) {
    console.log('locals', locals);
    //const parent_data = await parent();
    //console.log('parent data', parent_data);

    setHeaders({
        'Cache-Control': 'max-age=3600', // 1 hour. For caching on our server. Response headers.
    }); // set response headers
    const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
    const data = await res.json();

    return {
        episode: data,
        user: locals.user,
    };
};