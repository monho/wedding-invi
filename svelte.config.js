import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    prerender: { entries: ['*'] } // 전 페이지 프리렌더
  }
};
