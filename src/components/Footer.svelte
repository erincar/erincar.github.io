<script>
    import Icon from 'fa-svelte';
    import {
        fa500px,
        faArtstation,
        faBehance,
        faDev,
        faDeviantart,
        faDribbble,
        faGithub,
        faHackerrank,
        faItchIo,
        faKaggle,
        faLinkedin,
        faMedium,
        faPinterest,
        faResearchgate,
        faSoundcloud,
        faSpotify,
        faStackOverflow,
        faSteam,
        faTwitter,
        faVimeo,
    } from '@fortawesome/free-brands-svg-icons';

    const external_links = {
        'linkedin': [
            'https://www.linkedin.com/in/erincar/',
            faLinkedin,
        ],
        'github': [
            'https://github.com/erincar',
            faGithub,
        ],
        'hackerrank': [
            'https://www.hackerrank.com/erincar',
            faHackerrank,
        ],
        'kaggle': [
            'https://www.kaggle.com/erincar',
            faKaggle,
        ],
        'stack overflow': [
            'https://stackoverflow.com/users/8145608/erincar',
            faStackOverflow,
        ],
        'dev.to': [
            'https://dev.to/erincar',
            faDev,
        ],
        'medium': [
            'https://medium.com/@erincar',
            faMedium,
        ],
        'researchgate': [
            'https://www.researchgate.net/profile/Erinc_Argimak',
            faResearchgate,
            true,
        ],
        'soundcloud': [
            'https://soundcloud.com/yosuntutan/',
            faSoundcloud,
        ],
        'itch.io': [
            'https://itch.io/profile/erincar',
            faItchIo,
        ],
        'VSCO': [
            'https://vsco.co/yosuntutan/',
            null,
        ],
        '500px': [
            'https://500px.com/erincar',
            fa500px,
        ],
        'vimeo': [
            'https://vimeo.com/erincar',
            faVimeo,
        ],
        'artstation': [
            'https://www.artstation.com/erincar',
            faArtstation,
        ],
        'deviantart': [
            'https://www.deviantart.com/erincar',
            faDeviantart,
        ],
        'dribbble': [
            'https://dribbble.com/erincar',
            faDribbble,
        ],
        'behance': [
            'https://www.behance.net/erincar',
            faBehance,
            true,
        ],
        'twitter': [
            'https://twitter.com/yosuntutan',
            faTwitter,
        ],
        'spotify': [
            'https://open.spotify.com/user/yosuntutan',
            faSpotify,
        ],
        'pinterest': [
            'https://tr.pinterest.com/erincarg/',
            faPinterest,
        ],
        'steam': [
            'https://steamcommunity.com/id/erincar/',
            faSteam,
        ],
    };
</script>

<style>
    .footer-container {
        /* Placement */
        @apply sticky bottom-0 left-0;

        /* Layout */
        @apply px-4 py-0 flex flex-row justify-center;

        /* Typography */
        @apply text-4xl text-gray-400;
    }

    li {
        /* Placement */
        @apply block float-left h-full;

        /* Layout */
        @apply px-2 py-1;

        & > .separator {
            @apply inline-block mx-3 w-px h-full bg-current;
        }
    }

    a {

        &:hover :global(svg) {
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

    .custom-svg {
        @apply w-6 h-6 overflow-visible inline-block;
        @apply fill-current;
    }
</style>

<div class="footer-container">
    <ul>
        {#each Object.entries(external_links) as [name, [url, icon, ...separator]]}
        <li><a href={url} target="_blank">
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
</div>