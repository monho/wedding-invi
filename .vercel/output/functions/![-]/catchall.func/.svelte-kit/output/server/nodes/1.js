

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BJhhzGAS.js","_app/immutable/chunks/DHqwxD5v.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/DUTv_ZHv.js"];
export const stylesheets = [];
export const fonts = [];
