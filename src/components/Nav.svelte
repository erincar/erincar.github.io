<script>
    export let segment;
    const index_title = 'home';
</script>

<style>
    nav {
        /* Appearance */
        border-bottom: 1px solid rgba(255,62,0,0.1);
        font-weight: 300;

        /* Placement */
        display: inline-flex;
        flex-grow: 0;

        /* Layout */
        padding: 0 2em;
        justify-content: center;
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
    }

    [aria-current]::after {
}

    a {
        text-decoration: none;
        padding: 0.6em 0.8em;
        display: block;
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
