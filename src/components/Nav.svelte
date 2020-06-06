<script>
    import Icon from 'fa-svelte';
    import {
        faBehance,
        faDev,
        faDeviantart,
        faDribbble,
        faGithub,
        faItchIo,
        faLinkedin,
        faPinterest,
        faSoundcloud,
        faSpotify,
        faStackOverflow,
        faTwitter,
    } from '@fortawesome/free-brands-svg-icons';

    const index_title = 'home';
    const external_links = {
        'linkedin': ['https://www.linkedin.com/in/erincar/', faLinkedin],
        'github': ['https://github.com/erincar', faGithub],
        'stack overflow': ['https://stackoverflow.com/users/8145608/erincar', faStackOverflow],
        'dev.to': ['https://dev.to/erincar', faDev, true],
        'itch.io': ['https://itch.io/profile/erincar', faItchIo],
        'soundcloud': ['https://soundcloud.com/yosuntutan/', faSoundcloud],
        'VSCO': ['https://vsco.co/yosuntutan/', null],
        'deviantart': ['https://www.deviantart.com/erincar', faDeviantart],
        'behance': ['https://www.behance.net/erincar', faBehance],
        'dribbble': ['https://dribbble.com/erincar', faDribbble, true],
        'twitter': ['https://twitter.com/yosuntutan', faTwitter],
        'spotify': ['https://open.spotify.com/user/yosuntutan', faSpotify],
        'pinterest': ['https://tr.pinterest.com/erincarg/', faPinterest],
    };

    export let segment;
</script>

<style>
    nav {
        /* Placement */
        @apply inline-flex flex-grow-0 z-10;

        /* Layout */
        @apply px-20 py-0 justify-between;

        /* Appearance */
        @apply bg-transparent;

        /* Typography */
        @apply text-2xl text-gray-400;
    }

    ul {
        @apply m-0 p-0;
    }

    li {
        /* Placement */
        @apply block float-left h-full;

        /* Layout */
        @apply px-1 py-1;

        & > [aria-current] {
            /* Appearance */
            @apply border-b-2 border-solid border-red-600 border-opacity-75;
        }

        & > .separator {
            @apply inline-block mx-3 h-full bg-current;
            width: 0.05rem;
        }
    }

    a, a:visited {
        /* Layout */
        @apply p-0;

        /* Typography */
        @apply font-medium no-underline;

        &:hover {
            @apply font-normal text-gray-100 text-opacity-100;
            & :global(svg) {
                @apply text-red-600;
                @keyframes external-enthusiasm {
                    0%{
                        transform: rotateY(0);
                    }
                    50% {
                        transform: rotateY(180deg);
                    }
                    100%{
                        transform: rotateY(360deg);
                    }
                }
                animation: external-enthusiasm 0.35s ease-in-out 0s 1 normal;
            }
        }
    }

    .custom-svg {
        @apply w-6 h-6 overflow-visible inline-block;
        @apply fill-current;
    }
</style>

<nav>
    <ul>
        {#each Object.entries(external_links) as [name, [url, icon, ...separator]]}
        <li><a href={url}>
            {#if icon}
                <Icon icon={icon}/>
            {:else}
                <svg class="custom-svg">
                    <use xlink:href='{name}.svg#Layer_1'>{name}</use>
                </svg>
            {/if}
        </a></li>
        {#if separator.length > 0}
            <li><div class="separator"></div></li>
        {/if}
        {/each}
    </ul>

    <ul>
        {#each [undefined, "about", "works", "blog"] as route}
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
