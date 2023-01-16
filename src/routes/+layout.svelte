<!-- Path: src\routes\+layout.svelte -->

<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import './styles.css';
	import Episodes from './Episodes.svelte';

    $: ({all_episodes} = data)

</script>

<Header />
<main>
    <div class="main">
        <slot />
    </div>
    <aside>
        <Episodes episodes={all_episodes} />
    </aside>

</main>

<Footer />

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-gap: 1rem;
    }
    aside {
        order: 0;
    }
</style>