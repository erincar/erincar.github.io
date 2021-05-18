import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        section: 'home'
    }
});

export default app;
