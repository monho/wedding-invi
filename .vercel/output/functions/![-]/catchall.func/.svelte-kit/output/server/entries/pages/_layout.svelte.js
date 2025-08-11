import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${$$result.head += `<!-- HEAD_svelte-s76x2a_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-KG3L8HZ4P1" data-svelte-h="svelte-1epm8tf"><\/script><script data-svelte-h="svelte-1g88njt">window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-KG3L8HZ4P1');<\/script><!-- HEAD_svelte-s76x2a_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})} <div class="font-mywife max-w-3xl m-auto">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
