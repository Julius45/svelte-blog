<!-- Path: src\routes\+layout.svelte -->

<script>
    /** @type {import('./$types').LayoutData} */
    // static private is more common

    import {env} from '$env/dynamic/public';
    console.log('env',env);

    import {PUBLIC_LUT_PUB_KEY} from '$env/static/public';
    console.log('PUBLIC_LUT_PUB_KEY',PUBLIC_LUT_PUB_KEY);

    // lifecycle, afterNavigate, beforeNavigate
    // disableScrollHandling -  disables Sveltekits buit in scroll handling
    // goto -> progrramic routing (for redirects use redirect with status code 301?)
    // invalidate -> load functions on active page rerun
    // invalidateAll -> causes all load functions to rerun
    // preloadCode -> preloads js code for routes that have not been yet fetched
    // preloadData -> preloads data for given routes
    import {goto} from '$app/navigation';


    import {browser, building, dev, version} from '$app/environment';
    import {navigating} from '$app/stores';
    export let data;
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
    import './styles.css';
	import Episodes from '$lib/Episodes.svelte';
    console.log(browser, building, dev, version);

    // browser -> boolean if app is running in browser
    // building -> boolean if site is being built for production
    // dev -> boolean if app is running in dev mode
    // version -> config.kit.version.name epoch time of when app was updated
    $: ({all_episodes} = data)

</script>

<Header />
<!-- !! First oneturns the value into a boolean and makes it negative -->
 <!-- Second one turns into real value -->

{#if !!$navigating}
    <div class="loading">
        Loading...
    </div>
{/if}

<main>
    <div class="main">
        <slot />
    </div>
    <aside>
        <Episodes episodes={all_episodes} />

    </aside>

</main>

<Footer />

<style lang="postcss">
    main {
        display: grid;
        grid-template-columns: 1fr 300px;
        grid-gap: 1rem;
    }
    aside {
        order: 0;
    }
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(27, 46, 212, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 2rem;
    }
</style>

