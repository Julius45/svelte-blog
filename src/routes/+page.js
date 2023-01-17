/** @type {import('./$types').PageLoad} */


export async function load({ fetch, parent}){
    const parent_data = await parent();
    const res = await fetch('https://syntax.fm/api/shows/latest');
    const data = await res.json();

    //console.log('parent data', parent_data);

    return {
        latest_episode: data,
    };
}