# Personal Portfolio

Created with [`sv`](https://github.com/sveltejs/cli) v0.8.3.

```bash
bunx sv create
# Used prettier, eslint, tailwindcss, bun, static-adapter, paraglide, mdsvex... (TODO)
```

## Developing

```bash
bun run dev # --open
bun run dev-lan # Deploys on LAN IP.

bun run format
bun run lint
bun run test
```

## Building

- Using the `static-adapter`.

```bash
bun run build
bun run preview # for the production build.
```

## Requirements

### Navigation
- [x] Each route nests subroutes as components, adhering to the tree hierarchy of routes.
- [x] On the top level, the hostname is shown as the current route.
- [x] On any other level, the respective level of the route is shown.
- [x] On any level, subroutes are shown as anchors, only as the subroute name.
- [ ] Anchors can be a subroute, a section or an external link.
  - [ ] Anchors can have a different display name than the route node.
  - [ ] Dynamic routes will have a dynamic list, maybe as a sidebar.

### Functionality
- [ ] Components should accept styling.
- [ ] CV
- [ ] Global configuration
  - [ ] Dark / Light Theme
  - [ ] Translation
  - [ ] Sound toggle
  - [ ] This can be a collapsible that is side by side with the main bar
    - [ ] Opens towards the edge of the screen

### Content
- [ ] Main Page
- [ ] About
- [ ] Works
- [ ] Blog
- [ ] Shop
- [ ] Donate
- [ ] Restructure routes
  - [ ] 

### Tests
  - [ ] e2e
  - [ ] Unit

### Maintainability
  - [ ] CI / CD
  - [ ] Style class groups

### Styles
  - [ ] Typography: Current page anchor as bold
  - [ ] Anchors: Border on left, background
  - [ ] Icons
  - [ ] Transitions, Animations
  - [ ] Component States
  - [ ] Fonts, Colors, Color randomization
    - [ ] Theme
  - [ ] Sizing: Text, Spacing
  - [ ] More responsivity
  - [ ] Scroll progress indicator
