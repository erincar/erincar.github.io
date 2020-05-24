<script>
    export let segment;
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
        padding: 0 1em;
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
        position: absolute;
        content: '';
        width: calc(100% - 1em);
        height: 2px;
        background-color: rgb(255,62,0);
        display: block;
        bottom: -1px;
    }

    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
</style>

<nav>
    <ul>
        <li>
            <a
                aria-current='{segment === undefined ? "page" : undefined}'
                href='.'
            >
                home
            </a>
        </li>
    </ul>
</nav>
