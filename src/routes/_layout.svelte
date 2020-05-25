<script>
    import { onMount } from 'svelte';
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';
    export let segment;
    onMount(() => {
        console.log(segment);
    });
</script>

<style>
    #background {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        background: url("svelte-192.png") repeat left top;
        background-size: 6em;
        filter: blur(4px);
        -webkit-filter: blur(4px);
    }

    main {
        /* Placement */
        margin: 0;
        box-sizing: border-box;
        flex-grow: 1;

        /* Layout */
        padding: 0 5em 0 5em;
        display: inline-flex;
        overflow: auto;
    }
</style>

<div id="background"></div>
<Nav {segment}/>
<main>
    <div class="route-container">
    <slot></slot>
    </div>
</main>
<Footer/>