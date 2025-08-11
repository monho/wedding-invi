export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["clova_ai_rose.ttf","favicon.png","image/1.jpeg","image/2.jpeg","image/3.jpeg","image/4.jpeg","image/5.jpeg","image/6.jpeg","image/7.jpeg","image/8.jpeg","image/9.jpeg","image/kakao.png","image/kakao_link_image.jpeg","image/main_image.jpeg","image/map.png","image/map2.png","image/message_image7.png","image/message_image8.png","image/naver.png","image/tmap.png","NanumJangMiCe.woff2","private/.env"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".jpeg":"image/jpeg",".woff2":"font/woff2"},
	_: {
		client: {start:"_app/immutable/entry/start.BAB-Gv74.js",app:"_app/immutable/entry/app.Bc4_0X4Q.js",imports:["_app/immutable/entry/start.BAB-Gv74.js","_app/immutable/chunks/2_z933pP.js","_app/immutable/chunks/yzEkgqGX.js","_app/immutable/entry/app.Bc4_0X4Q.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/yzEkgqGX.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
