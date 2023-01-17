<script>
    /** @type {import('./$types').PageData} */

    import Audioplayer from '$lib/Audioplayer.svelte';
    export let data;
    $: ({episode, user} = data)
</script>
<h2> {user.email}</h2>
<h1> Episode Title: {episode.title}</h1>

{@html episode.html}


<Audioplayer audiosrc={episode.url}/>
