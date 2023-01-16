<script>
    /** @type {import('./$types').PageData} */

    import Audioplayer from '$lib/Audioplayer.svelte';
    export let data;
    $: ({episode,} = data)
</script>

<h1> Episode Title: {episode.title}</h1>

{@html episode.html}

<Audioplayer audiosrc={episode.url}/>