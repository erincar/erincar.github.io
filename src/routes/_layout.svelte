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
    }

    #background-slider {
        width: calc(100% + 12em);
        height: 100%;
        background-size: 6em;
        animation: slide 6s linear infinite;
    }

    @keyframes slide{
        0%{
            transform: translate3d(-6em, 0, 0);
        }
        100%{
            transform: translate3d(-12em, 0, 0);
        }
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