<script>
    export let segment;
    const index_title = 'home';
</script>

<style>
    nav {
        /* Appearance */
        background: transparent;

        /* Placement */
        display: inline-flex;
        flex-grow: 0;

        /* Layout */
        padding: 0 5em;
        justify-content: right;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        display: block;
        float: left;
    }

    [aria-current] {
        position: relative;
        display: inline-block;
        border-bottom: 2px solid rgba(226, 90, 90, 0.8);
}

    a {
        /* Placement */
        display: block;

        /* Layout */
        padding: 0.6em 0.8em;

        /* Typography */
        text-decoration: none;
        font-weight: 500;
        color: white;
    }

    a:visited {
        font-weight: 300;
        color: rgba(211, 211, 211, 0.8);
    }
</style>

<nav>
    <ul>
        {#each [undefined, "about", "works", "collections", "blog"] as route}
        <li>
            <a
                aria-current='{segment === route ? "page" : undefined}'
                href={route === undefined ? '.' : route}
            >
                {route === undefined ? index_title : route}
            </a>
        </li>
        {/each}
    </ul>
</nav>
