<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import {navigating, page, updated, getStores} from '$app/stores';
    $: console.log($navigating, $page);
</script>

    