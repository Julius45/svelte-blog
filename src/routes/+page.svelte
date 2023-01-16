

<script>
        /** @type {import('./$types').PageData} */

    import Test from '$lib/Testing/Test.svelte';
    import '$db/start.js';
    export let data;

    $: ({latest_episode} = data)
</script>



<h3>{latest_episode.title}</h3>


<a href="/about"> About Us</a>

<Test />