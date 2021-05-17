<script>
  const links = [
    {
      name: "itch.io",
      url: "https://itch.io/profile/erincar",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/erincar/",
    },
    {
      name: "researchgate",
      url: "https://www.researchgate.net/profile/Erinc_Argimak",
    },
    {
      name: "medium",
      url: "https://medium.com/@erincar",
    },
    {
      name: "twitter",
      url: "https://twitter.com/yosuntutan",
    },
    {
      name: "spotify",
      url: "https://open.spotify.com/user/yosuntutan",
    },
    {
      name: "pinterest",
      url: "https://tr.pinterest.com/erincarg/",
    },
    {
      name: "soundcloud",
      url: "https://soundcloud.com/yosuntutan/",
    },
    {
      name: "github",
      url: "https://github.com/erincar",
    },
    {
      name: "hackerrank",
      url: "https://www.hackerrank.com/erincar",
    },
    {
      name: "kaggle",
      url: "https://www.kaggle.com/erincar",
    },
    {
      name: "dev.to",
      url: "https://dev.to/erincar",
    },
    {
      name: "stack overflow",
      url: "https://stackoverflow.com/users/8145608/erincar",
    },
    {
      name: "VSCO",
      url: "https://vsco.co/yosuntutan/",
    },
    {
      name: "500px",
      url: "https://500px.com/erincar",
    },
    {
      name: "artstation",
      url: "https://www.artstation.com/erincar",
    },
    {
      name: "deviantart",
      url: "https://www.deviantart.com/erincar",
    },
    {
      name: "dribbble",
      url: "https://dribbble.com/erincar",
    },
    {
      name: "behance",
      url: "https://www.behance.net/erincar",
    },
    {
      name: "vimeo",
      url: "https://vimeo.com/erincar",
    },
    {
      name: "steam",
      url: "https://steamcommunity.com/id/erincar/",
    },
  ]
</script>
<style>
  div {
    @apply fixed bottom-0 w-full py-2 bg-red;
  }
  ul {
    @apply flex flex-row justify-center;
  }
  li {
    @apply px-2 border-r border-separate border-dark;
  }
  li:last-child {
    @apply border-none;
  }
  a {
    @apply text-dark text-xs;
  }
</style>

<div>
  <ul>
    {#each links as {name, url}}
    <li>
      <a href={url}>{name}</a>
    </li>
    {/each}
  </ul>
</div>
