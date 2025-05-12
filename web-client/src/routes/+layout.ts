export const prerender = true;
export const load = async () => ({
	sitemap: {
		about: {
			news: {},
			links: {},
			contact: {}
		},
		works: {
			code: {},
			game: {},
			app: {},
			music: {},
			art: {},
			design: {}
		},
		blog: {},
		donate: {}
	}
});
