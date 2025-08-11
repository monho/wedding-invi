import { c as create_ssr_component, d as add_attribute, e as escape, f as each, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component, a as setContext, g as getContext, l as createEventDispatcher, o as compute_slots } from "../../chunks/ssr.js";
import { register } from "swiper/element/bundle";
import "copy-to-clipboard";
import { twMerge } from "tailwind-merge";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { isSupported, getAnalytics } from "firebase/analytics";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center my-10 text-3xl text-stone-600" data-svelte-h="svelte-etiltf"><p>INVITATION</p> <p>저희 결혼합니다.</p></div>`;
});
const mainTitle = "최영민 ❤ 방혜진의 결혼식에 초대합니다.";
const mainDescription = "2025년 9월 27일 토요일 11시 30분 \n 보람 컨벤션 4층 카리나 홀";
const brideName = "방혜진";
const groomName = "최영민";
const brideFullName = "방혜진";
const groomFullName = "최영민";
const AccountInfo = {
  groomBank: "카카오뱅크",
  groomAccountNum: "3333-2186-48-517",
  groomFatherName: "최권호",
  groomMotherName: "손유정",
  groomMotherBank: "경남은행",
  groomMotherAccountNum: " 605-22-0138232",
  groomMotherKakaoURL: "https://qr.kakaopay.com/FGMga3UOB",
  brideName: "방혜진",
  brideMotherName: "방보섭",
  brideFatherName: "홍경자",
  brideFatherBank: "우체국은행",
  brideFatherAccountNum: "613687-02-048716",
  brideFatherKakaoURL: "https://qr.kakaopay.com/FGMga3UOB",
  groomOrder: "차남",
  brideOrder: "차녀"
};
const dday = [2025, 9, 27];
const timeStr = "토요일 11시 30분 ";
const poiSubText = "";
const poiName = "보람 컨벤션";
const address = "울산광역시 남구 왕생로 160 (삼산동 1493-5)";
const longitude = 35.547165;
const latitude = 129.328031;
const privateCarMsg1 = "- 네비게이션 왕생로 160 또는 삼산동 1493-5입력";
const privateCarMsg2 = "보람컨벤션 전용 주차장 : 지하2층 지상4층 약 500대 주차 가능";
const privateCarMsg4 = "보람컨벤션 인근 주차장 : 울산문화예술회관 / 남구청청사 주차 가능";
const publicTransportMsg1 = "KTX ➡울산공항에서 택시 이용시 20분 소요 ,";
const publicTransportMsg2 = "울산(통도사)역에서 택시 이용시 30분 소요";
const publicTransportMsg3 = "기차, 고속버스 ➡ 태화강역, 울산시외·고속버스터미널에서 택시 이용시 10분 소요";
const publicTransportMsg4 = "시내버스 ➡ 남구청앞 : 남구10,442,514,752 ";
const publicTransportMsg5 = "-남울산우체국 하차 : 남구02,남구05 kbs방송국앞 : 순환11,216,216(지원2),216(지원4),711,712,713,718,724,742,752";
const mainMsg1 = "각자 다른 화분에서 자란 넝쿨이";
const mainMsg2 = "서로에게 굴러 들어와";
const mainMsg3 = "1121일이라는 시간동안 아름답게 얼기설기 엉켜";
const mainMsg4 = "예쁜 꽃을 피웠습니다.";
const mainMsg5 = "이제는 하나의 화분에 모여";
const mainMsg6 = "새로운 출발을 하려합니다.";
const mainMsg7 = "친구에서 연인으로, 연인에서 부부로";
const mainMsg8 = "평생 서로의 든든한 배우자로서";
const mainMsg9 = "서로의 삶에 꽃이 될 수 있게 저희의 단단한 토양이 되어주십시오.";
const mapImageSrc = "image/map2.png";
let images = [
  "image/1.jpeg",
  "image/2.jpeg",
  "image/3.jpeg",
  "image/4.jpeg",
  "image/5.jpeg",
  "image/6.jpeg",
  "image/7.jpeg",
  "image/8.jpeg",
  "image/9.jpeg"
];
const mainImageURL = "image/kakao_link_image.jpeg";
const siteURL = "https://wedding-invi-one.vercel.app";
const css$3 = {
  code: "@keyframes svelte-c0uuom-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.animate-bounce.svelte-c0uuom{animation:svelte-c0uuom-bounce 0.6s infinite}",
  map: '{"version":3,"file":"MainImage.svelte","sources":["MainImage.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { groomFullName, dday, brideFullName, poiSubText, poiName, timeStr } from \\"../resource/input\\";\\nconst imgURL = \\"image/kakao_link_image.jpeg\\";\\nconst dateText = dday[0] + \\"\\\\uB144 \\" + dday[1] + \\"\\\\uC6D4 \\" + dday[2] + \\"\\\\uC77C, \\" + timeStr;\\nexport let isTouched;\\n<\/script>\\r\\n\\r\\n<img src={imgURL} alt=\\"intro\\" width=\\"678\\" height=\\"1024\\" class=\\"w-full pb-5\\" />\\r\\n<div class=\\"text-center justify-center modal-middle flex py-5 text-2xl\\">\\r\\n\\t<span class=\\"px-3\\">{groomFullName}</span>\\r\\n\\t<button\\r\\n\\t\\ton:click={() => {\\r\\n\\t\\t\\tisTouched = !isTouched;\\r\\n\\t\\t}}\\r\\n\\t>\\r\\n\\t\\t<p class=\\"btn rounded-full animate-bounce px-3 text-xl text-primary\\">❤</p>\\r\\n\\t</button>\\r\\n\\t<span class=\\"px-3\\">{brideFullName}</span>\\r\\n</div>\\r\\n<div class=\\"text-center py-5 text-2xl\\">\\r\\n\\t<p>{dateText}</p>\\r\\n\\t<p>{poiName}</p>\\r\\n\\t<p class=\\"text-sm text-gray-500\\">{poiSubText}</p>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t@keyframes bounce {\\r\\n\\t\\t0%,\\r\\n\\t\\t100% {\\r\\n\\t\\t\\ttransform: translateY(0);\\r\\n\\t\\t}\\r\\n\\t\\t50% {\\r\\n\\t\\t\\ttransform: translateY(-4px);\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n\\t.animate-bounce {\\r\\n\\t\\tanimation: bounce 0.6s infinite;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyBC,WAAW,oBAAO,CACjB,EAAE,CACF,IAAK,CACJ,SAAS,CAAE,WAAW,CAAC,CACxB,CACA,GAAI,CACH,SAAS,CAAE,WAAW,IAAI,CAC3B,CACD,CAEA,6BAAgB,CACf,SAAS,CAAE,oBAAM,CAAC,IAAI,CAAC,QACxB"}'
};
const imgURL = "image/kakao_link_image.jpeg";
const MainImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dateText = dday[0] + "년 " + dday[1] + "월 " + dday[2] + "일, " + timeStr;
  let { isTouched } = $$props;
  if ($$props.isTouched === void 0 && $$bindings.isTouched && isTouched !== void 0) $$bindings.isTouched(isTouched);
  $$result.css.add(css$3);
  return `<img${add_attribute("src", imgURL, 0)} alt="intro" width="678" height="1024" class="w-full pb-5"> <div class="text-center justify-center modal-middle flex py-5 text-2xl"><span class="px-3">${escape(groomFullName)}</span> <button data-svelte-h="svelte-52a3v9"><p class="btn rounded-full animate-bounce px-3 text-xl text-primary svelte-c0uuom">❤</p></button> <span class="px-3">${escape(brideFullName)}</span></div> <div class="text-center py-5 text-2xl"><p>${escape(dateText)}</p> <p>${escape(poiName)}</p> <p class="text-sm text-gray-500">${escape(poiSubText)}</p> </div>`;
});
const MainMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600" data-svelte-h="svelte-c0l6mi">모시는 말씀</h1> <div class="container mx-auto relative"><img src="/image/message_image8.png" alt="" class="w-full h-auto"> <div class="absolute inset-0 flex items-center justify-center rounded-lg"><div class="w-full mx-auto text-center"><p class="leading-relaxed text-xl">${escape(mainMsg1)}<br> ${escape(mainMsg2)}<br> ${escape(mainMsg3)}<br> ${escape(mainMsg4)}<br> ${escape(mainMsg5)}<br> ${escape(mainMsg6)}<br></p> <p class="leading-relaxed text-xl py-3">${escape(mainMsg7)}<br> ${escape(mainMsg8)}<br> ${escape(mainMsg9)}<br></p></div></div></div> <div class="text-center mx-auto"><div class="w-full mx-auto px-5 py-5"><p class="tracking-wider text-xl text-center font-bold">${escape(AccountInfo.groomFatherName)} • ${escape(AccountInfo.groomMotherName)}<span class="text-sm text-gray-500">의 ${escape(AccountInfo.groomOrder)}</span> ${escape(groomName)}</p> <p class="tracking-wider text-xl text-center font-bold">${escape(AccountInfo.brideFatherName)} • ${escape(AccountInfo.brideMotherName)}<span class="text-sm text-gray-500">의 ${escape(AccountInfo.brideOrder)}</span> ${escape(brideName)}</p></div></div>`;
});
const css$2 = {
  code: "body{min-height:100%}html{height:100%}.loveflake.svelte-1vosdyj{color:#ffffff;font-size:1.2rem;line-height:1.2rem;position:absolute;z-index:1000;overflow:hidden}.loveframe.svelte-1vosdyj{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}",
  map: '{"version":3,"file":"AnimationFrame.svelte","sources":["AnimationFrame.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { brideName } from \\"../resource/input\\";\\nimport { groomName } from \\"../resource/input\\";\\nexport let isHeartMode;\\nconst LOVEFLAKES_COUNT = 120;\\nconst LOVEFLAKE_MIN_SCALE = 0.1;\\nconst MELTING_SPEED = 1.12;\\nconst WIND_FORCE = 0.01;\\nconst FALL_SPEED = 0.15;\\nlet LOVE_ICONS = [\\"\\\\u2661\\", \\"\\\\u2665\\", \\"\\\\u2764\\\\uFE0F\\", \\"\\\\u2763\\\\uFE0F\\", \\"\\\\u{1F495}\\"];\\nif (!isHeartMode) {\\n  LOVE_ICONS = [groomName, brideName];\\n}\\nconst TARGET_FPS = 60;\\nconst MS_BETWEEN_FRAMES = 1e3 / TARGET_FPS;\\nfunction randomLoveflakeConfig(i) {\\n  return {\\n    scale: LOVEFLAKE_MIN_SCALE + Math.random() * (1 - LOVEFLAKE_MIN_SCALE),\\n    x: -20 + Math.random() * 120,\\n    y: -100 + Math.random() * 200,\\n    rotation: Math.floor(Math.random() * 360),\\n    loveIcon: LOVE_ICONS[i % LOVE_ICONS.length],\\n    opacity: 0.999\\n  };\\n}\\nlet loveflakes = new Array(LOVEFLAKES_COUNT).fill(void 0).map((_, i) => randomLoveflakeConfig(i)).sort((a, b) => a.scale - b.scale);\\nonMount(() => {\\n  let frame;\\n  let lastTime;\\n  function loop(timestamp) {\\n    frame = requestAnimationFrame(loop);\\n    let framesCompleted;\\n    if (timestamp === void 0) {\\n      framesCompleted = 1;\\n    } else {\\n      const elapsed = timestamp - lastTime;\\n      lastTime = timestamp;\\n      framesCompleted = elapsed / MS_BETWEEN_FRAMES;\\n    }\\n    if (isNaN(framesCompleted)) {\\n      framesCompleted = 1;\\n    }\\n    loveflakes = loveflakes.map((flake) => {\\n      if (flake.y >= 100) {\\n        flake.opacity = Math.pow(flake.opacity, MELTING_SPEED);\\n      } else {\\n        flake.y += FALL_SPEED * flake.scale * framesCompleted;\\n        flake.x += WIND_FORCE * flake.scale * framesCompleted;\\n        flake.rotation += 1 * framesCompleted;\\n      }\\n      if (flake.opacity <= 0.02) {\\n        flake.y = -20;\\n        flake.x = -20 + Math.random() * 120;\\n        flake.opacity = 0.999;\\n      }\\n      return flake;\\n    });\\n  }\\n  loop(void 0);\\n  return () => cancelAnimationFrame(frame);\\n});\\n<\/script>\\r\\n\\r\\n<div class=\\"loveframe\\" aria-hidden=\\"true\\">\\r\\n\\t{#each loveflakes as flake}\\r\\n\\t\\t<div\\r\\n\\t\\t\\tclass=\\"loveflake\\"\\r\\n\\t\\t\\tstyle={`opacity: ${flake.opacity}; transform: scale(${flake.scale}) rotate(${flake.rotation}deg); left: ${flake.x}%; top: calc(${flake.y}% - ${flake.scale}rem)`}\\r\\n\\t\\t>\\r\\n\\t\\t\\t{flake.loveIcon}\\r\\n\\t\\t</div>\\r\\n\\t{/each}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t:global(body) {\\r\\n\\t\\tmin-height: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t:global(html) {\\r\\n\\t\\theight: 100%;\\r\\n\\t}\\r\\n\\r\\n\\t.loveflake {\\r\\n\\t\\tcolor: #ffffff;\\r\\n\\t\\tfont-size: 1.2rem;\\r\\n\\t\\tline-height: 1.2rem;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\tz-index: 1000;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\r\\n\\t.loveframe {\\r\\n\\t\\tpointer-events: none;\\r\\n\\t\\tposition: absolute;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tright: 0;\\r\\n\\t\\tbottom: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2ES,IAAM,CACb,UAAU,CAAE,IACb,CAEQ,IAAM,CACb,MAAM,CAAE,IACT,CAEA,yBAAW,CACV,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,MACX,CAEA,yBAAW,CACV,cAAc,CAAE,IAAI,CACpB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,QAAQ,CAAE,MACX"}'
};
const LOVEFLAKES_COUNT = 120;
const LOVEFLAKE_MIN_SCALE = 0.1;
const AnimationFrame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isHeartMode } = $$props;
  let LOVE_ICONS = ["♡", "♥", "❤️", "❣️", "💕"];
  if (!isHeartMode) {
    LOVE_ICONS = [groomName, brideName];
  }
  function randomLoveflakeConfig(i) {
    return {
      scale: LOVEFLAKE_MIN_SCALE + Math.random() * (1 - LOVEFLAKE_MIN_SCALE),
      x: -20 + Math.random() * 120,
      y: -100 + Math.random() * 200,
      rotation: Math.floor(Math.random() * 360),
      loveIcon: LOVE_ICONS[i % LOVE_ICONS.length],
      opacity: 0.999
    };
  }
  let loveflakes = new Array(LOVEFLAKES_COUNT).fill(void 0).map((_, i) => randomLoveflakeConfig(i)).sort((a, b) => a.scale - b.scale);
  if ($$props.isHeartMode === void 0 && $$bindings.isHeartMode && isHeartMode !== void 0) $$bindings.isHeartMode(isHeartMode);
  $$result.css.add(css$2);
  return `<div class="loveframe svelte-1vosdyj" aria-hidden="true">${each(loveflakes, (flake) => {
    return `<div class="loveflake svelte-1vosdyj"${add_attribute("style", `opacity: ${flake.opacity}; transform: scale(${flake.scale}) rotate(${flake.rotation}deg); left: ${flake.x}%; top: calc(${flake.y}% - ${flake.scale}rem)`, 0)}>${escape(flake.loveIcon)} </div>`;
  })} </div>`;
});
const monthNames = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월"
];
var DialogMode = /* @__PURE__ */ ((DialogMode2) => {
  DialogMode2[DialogMode2["EDIT"] = 0] = "EDIT";
  DialogMode2[DialogMode2["CREATE"] = 1] = "CREATE";
  DialogMode2[DialogMode2["DELETE"] = 2] = "DELETE";
  return DialogMode2;
})(DialogMode || {});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year } = $$props;
  let { month } = $$props;
  let { theDay } = $$props;
  let days = [];
  let weekDays = [];
  function getDDay(year2, month2, day) {
    const curDate = /* @__PURE__ */ new Date();
    const tarDate = new Date(year2, month2 - 1, day);
    const gap = tarDate.getTime() - curDate.getTime();
    const dday2 = Math.ceil(gap / (1e3 * 60 * 60 * 24));
    return groomName + " ❤ " + brideName + " 결혼식이 " + dday2.toString() + " 일 남았습니다.";
  }
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.month === void 0 && $$bindings.month && month !== void 0) $$bindings.month(month);
  if ($$props.theDay === void 0 && $$bindings.theDay && theDay !== void 0) $$bindings.theDay(theDay);
  return `<div class="py-5 flex flex-col w-full px-5 mt-4 text-center"><div class="selected-month text-3xl text-stone-600 py-5">${theDay !== void 0 ? `${escape(monthNames[month - 1])}` : ``}</div> <div class="grid grid-cols-7 gap-2">${each(weekDays, (dayName) => {
    return `<div class="p-2 text-center bg-gray-200 rounded">${escape(dayName)}</div>`;
  })} ${each(days, (week) => {
    return `${each(week, ({ day, isCurrentMonth }) => {
      return `${day !== null ? `${day === theDay ? `<div class="p-2 text-center bg-pink-300 rounded-full"><span>${escape(day)}</span> </div>` : `<div class="p-2 text-center">${!isCurrentMonth ? `<span class="text-gray-400">${escape(day)}</span>` : `<span>${escape(day)}</span>`} </div>`}` : ``}`;
    })}`;
  })}</div> <div data-svelte-h="svelte-8aq904"><p class="leading-relaxed mt-1"></p></div> <div class="card p-4 my-2 bg-gray-100 shadow-xl"><h2 class="text-xl font-bold title-font">${escape(getDDay(dday[0], dday[1], dday[2]))}</h2></div></div>`;
});
function kakaoMap(name, lat, lng) {
  const href = "https://map.kakao.com/link/to/" + name + "," + lat + "," + lng;
  return href;
}
function naverMap(name, lat, lng) {
  const href = "http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=" + lat + "&elng=" + lng + "&etitle=" + name;
  return href;
}
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1jalq5c_START --><script defer src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=s4ddmne9i5" data-svelte-h="svelte-1wap6rn"><\/script><!-- HEAD_svelte-1jalq5c_END -->`, ""} <section><div class="py-5 mx-auto"><h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600" data-svelte-h="svelte-1wc4nxg">오시는 길</h1> <div class="text-center py-2 text-xl"><p>${escape(poiName)}</p> <p class="text-gray-500 text-base">${escape(address)}</p></div> <div id="naverMap" class="w-full h-60"></div> <div class="text-center px-1 py-5"><a id="kakao-navi"${add_attribute("href", kakaoMap(poiName, longitude, latitude), 0)} role="button" class="btn rounded-lg mx-2"><img src="image/kakao.png" height="10" width="10" alt=""> <span class="text-sm" data-svelte-h="svelte-1qky9x7">카카오 지도</span></a> <a id="naver-navi"${add_attribute("href", naverMap(poiName, longitude, latitude), 0)} role="button" class="btn mx-2 rounded-lg"><img src="image/naver.png" height="10" width="10" alt=""> <span class="text-sm" data-svelte-h="svelte-1cynukr">네이버 지도</span></a></div> <div class="flex flex-col w-full px-5 mt-4"><div data-svelte-h="svelte-khoe9g"><p class="leading-relaxed mt-1"></p></div> <div class="card p-4 my-2 bg-base-100 shadow-xl"><h2 class="text-xl font-bold title-font" data-svelte-h="svelte-10reicn">자가용</h2> <p class="leading-relaxed mt-1 text-base">${escape(privateCarMsg1)} <br> ${escape(privateCarMsg2)} <br> ${escape(privateCarMsg4)} <br></p></div> <div class="card p-4 my-2 bg-base-100 shadow-xl"><h2 class="text-xl font-bold title-font" data-svelte-h="svelte-uo6lm8">대중교통</h2> <p class="leading-relaxed mt-1 text-base">${escape(publicTransportMsg1)} ${escape(publicTransportMsg2)} <br> ${escape(publicTransportMsg3)} <br> ${escape(publicTransportMsg4)} <br> ${escape(publicTransportMsg5)} <br></p></div> <img${add_attribute("src", mapImageSrc, 0)} class="mx-auto" alt=""></div></div></section>`;
});
const css$1 = {
  code: "swiper-container.svelte-1bhncyi.svelte-1bhncyi::part(bullet-active){background-color:gray;width:5px;height:5px}swiper-container.svelte-1bhncyi.svelte-1bhncyi::part(bullet){background-color:gray;width:5px;height:5px}swiper-container.svelte-1bhncyi.svelte-1bhncyi::part(button-prev){color:gray}swiper-container.svelte-1bhncyi.svelte-1bhncyi::part(button-next){color:gray}.thumb-img.svelte-1bhncyi.svelte-1bhncyi{-o-object-fit:cover;object-fit:cover;aspect-ratio:1 / 1.3;width:100%}.main-slider.svelte-1bhncyi.svelte-1bhncyi{display:flex;justify-content:center;align-items:center;height:700px}.image-container.svelte-1bhncyi.svelte-1bhncyi{display:flex;justify-content:center;align-items:center;height:100%;width:100%;overflow:hidden}.image-container.svelte-1bhncyi img.svelte-1bhncyi{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}",
  map: '{"version":3,"file":"Gallery.svelte","sources":["Gallery.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { register } from \\"swiper/element/bundle\\";\\nimport { images } from \\"../resource/input\\";\\nregister();\\nlet isSwipingMode = false;\\nconst onProgress = (e) => {\\n  const [swiper, progress] = e.detail;\\n  if (progress !== 0) {\\n    isSwipingMode = true;\\n  } else {\\n    isSwipingMode = false;\\n  }\\n};\\nconst onSlideAnimationEnded = (e) => {\\n  isSwipingMode = false;\\n};\\nconst preventTouch = (e) => {\\n  if (isSwipingMode) {\\n    e.preventDefault();\\n    e.returnValue = false;\\n    return false;\\n  }\\n};\\n<\/script>\\r\\n\\r\\n<div class=\\"mx-auto w-full\\">\\r\\n\\t<h1 class=\\"mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600\\">사진첩</h1>\\r\\n\\t<div class=\\"mb-2\\">\\r\\n\\t\\t<swiper-container\\r\\n\\t\\t\\tthumbs-swiper=\\".my-thumbs\\"\\r\\n\\t\\t\\tslides-per-view={1}\\r\\n\\t\\t\\tnavigation={true}\\r\\n\\t\\t\\tpagination={true}\\r\\n\\t\\t\\tsetWrapperSize={true}\\r\\n\\t\\t\\ta11y={true}\\r\\n\\t\\t\\ton:progress={onProgress}\\r\\n\\t\\t\\ton:slidechange={onSlideAnimationEnded}\\r\\n\\t\\t\\ton:touchmove={preventTouch}\\r\\n\\t\\t\\ton:slideresettransitionend={onSlideAnimationEnded}\\r\\n\\t\\t\\tclass=\\"main-slider\\"\\r\\n\\t\\t>\\r\\n\\t\\t\\t{#each images as image, i (image)}\\r\\n\\t\\t\\t\\t<swiper-slide class=\\"flex justify-center items-center\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\"image-container\\">\\r\\n\\t\\t\\t\\t\\t\\t<img src={image} alt=\\"Thumbnail\\" />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</swiper-slide>\\r\\n\\t\\t\\t{/each}\\r\\n\\t\\t</swiper-container>\\r\\n\\t</div>\\r\\n\\t<swiper-container\\r\\n\\t\\ta11y={true}\\r\\n\\t\\tspace-between={10}\\r\\n\\t\\tclass=\\"my-thumbs\\"\\r\\n\\t\\tslides-per-view={5}\\r\\n\\t\\ton:progress={onProgress}\\r\\n\\t\\ton:slidechange={onSlideAnimationEnded}\\r\\n\\t\\ton:touchmove={preventTouch}\\r\\n\\t\\ton:slideresettransitionend={onSlideAnimationEnded}\\r\\n\\t>\\r\\n\\t\\t{#each images as image, i (image)}\\r\\n\\t\\t\\t<swiper-slide>\\r\\n\\t\\t\\t\\t<img class=\\"thumb-img\\" src={image} alt=\\"Thumbnail\\" />\\r\\n\\t\\t\\t</swiper-slide>\\r\\n\\t\\t{/each}\\r\\n\\t</swiper-container>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\tswiper-container::part(bullet-active) {\\r\\n\\t\\tbackground-color: gray;\\r\\n\\t\\twidth: 5px;\\r\\n\\t\\theight: 5px;\\r\\n\\t}\\r\\n\\tswiper-container::part(bullet) {\\r\\n\\t\\tbackground-color: gray;\\r\\n\\t\\twidth: 5px;\\r\\n\\t\\theight: 5px;\\r\\n\\t}\\r\\n\\tswiper-container::part(button-prev) {\\r\\n\\t\\tcolor: gray;\\r\\n\\t}\\r\\n\\tswiper-container::part(button-next) {\\r\\n\\t\\tcolor: gray;\\r\\n\\t}\\r\\n\\t.thumb-img {\\r\\n\\t\\t-o-object-fit: cover;\\r\\n\\t\\t   object-fit: cover;\\r\\n\\t\\taspect-ratio: 1 / 1.3;\\r\\n\\t\\twidth: 100%;\\r\\n\\t}\\r\\n\\t/* Center the slides within the main swiper-container */\\r\\n\\t.main-slider {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\theight: 700px; /* Set your desired fixed height */\\r\\n\\t}\\r\\n\\r\\n\\t/* Style for the main images */\\r\\n\\t.image-container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\theight: 100%;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\toverflow: hidden;\\r\\n\\t}\\r\\n\\r\\n\\t.image-container img {\\r\\n\\t\\tmax-height: 100%;\\r\\n\\t\\tmax-width: 100%;\\r\\n\\t\\t-o-object-fit: contain;\\r\\n\\t\\t   object-fit: contain; /* Adjust the object-fit value as needed */\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoEC,8CAAgB,OAAO,aAAa,CAAE,CACrC,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GACT,CACA,8CAAgB,OAAO,MAAM,CAAE,CAC9B,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GACT,CACA,8CAAgB,OAAO,WAAW,CAAE,CACnC,KAAK,CAAE,IACR,CACA,8CAAgB,OAAO,WAAW,CAAE,CACnC,KAAK,CAAE,IACR,CACA,wCAAW,CACV,aAAa,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CACpB,YAAY,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CACrB,KAAK,CAAE,IACR,CAEA,0CAAa,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,KACT,CAGA,8CAAiB,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,MACX,CAEA,+BAAgB,CAAC,kBAAI,CACpB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,OAAO,CACnB,UAAU,CAAE,OAChB"}'
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  register();
  $$result.css.add(css$1);
  return `<div class="mx-auto w-full"><h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600" data-svelte-h="svelte-3303gn">사진첩</h1> <div class="mb-2"><swiper-container thumbs-swiper=".my-thumbs"${add_attribute("slides-per-view", 1, 0)}${add_attribute("navigation", true, 0)}${add_attribute("pagination", true, 0)}${add_attribute("setwrappersize", true, 0)}${add_attribute("a11y", true, 0)} class="main-slider svelte-1bhncyi">${each(images, (image, i) => {
    return `<swiper-slide class="flex justify-center items-center" data-svelte-h="svelte-9gljf5"><div class="image-container svelte-1bhncyi"><img${add_attribute("src", image, 0)} alt="Thumbnail" class="svelte-1bhncyi"></div> </swiper-slide>`;
  })}</swiper-container></div> <swiper-container${add_attribute("a11y", true, 0)}${add_attribute("space-between", 10, 0)} class="my-thumbs svelte-1bhncyi"${add_attribute("slides-per-view", 5, 0)}>${each(images, (image, i) => {
    return `<swiper-slide data-svelte-h="svelte-3d4j2i"><img class="thumb-img svelte-1bhncyi"${add_attribute("src", image, 0)} alt="Thumbnail"> </swiper-slide>`;
  })}</swiper-container> </div>`;
});
const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw = "";
  let { data } = $$props;
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return "";
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  raw = getRaw(data);
  return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const css = {
  code: ".fa-icon.svelte-1mc5hvj{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1mc5hvj{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1mc5hvj{transform:scale(1, -1)}.fa-spin.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1mc5hvj{color:#fff}.fa-pulse.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s infinite steps(8)}@keyframes svelte-1mc5hvj-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: `{"version":3,"file":"Svg.svelte","sources":["Svg.svelte"],"sourcesContent":["<svg\\n  version=\\"1.1\\"\\n  class=\\"fa-icon {className}\\"\\n  class:fa-spin={spin}\\n  class:fa-pulse={pulse}\\n  class:fa-inverse={inverse}\\n  class:fa-flip-horizontal={flip === 'horizontal'}\\n  class:fa-flip-vertical={flip === 'vertical'}\\n  {width}\\n  {height}\\n  aria-label={label}\\n  role={label ? 'img' : 'presentation'}\\n  viewBox={box}\\n  {style}\\n  {...$$restProps}\\n>\\n  <slot />\\n</svg>\\n\\n<style>\\n  .fa-icon {\\n    display: inline-block;\\n    fill: currentColor;\\n  }\\n  .fa-flip-horizontal {\\n    transform: scale(-1, 1);\\n  }\\n  .fa-flip-vertical {\\n    transform: scale(1, -1);\\n  }\\n  .fa-spin {\\n    animation: fa-spin 1s 0s infinite linear;\\n  }\\n  .fa-inverse {\\n    color: #fff;\\n  }\\n  .fa-pulse {\\n    animation: fa-spin 1s infinite steps(8);\\n  }\\n  @keyframes fa-spin {\\n    0% {\\n      transform: rotate(0deg);\\n    }\\n    100% {\\n      transform: rotate(360deg);\\n    }\\n  }\\n</style>\\n\\n<script>let className = '';\\nexport { className as class };\\nexport let width;\\nexport let height;\\nexport let box = '0 0 0 0';\\nexport let spin = false;\\nexport let inverse = false;\\nexport let pulse = false;\\nexport let flip = 'none';\\n// optionals\\nexport let style = '';\\nexport let label = '';\\n<\/script>\\n"],"names":[],"mappings":"AAoBE,uBAAS,CACP,OAAO,CAAE,YAAY,CACrB,IAAI,CAAE,YACR,CACA,kCAAoB,CAClB,SAAS,CAAE,MAAM,EAAE,CAAC,CAAC,CAAC,CACxB,CACA,gCAAkB,CAChB,SAAS,CAAE,MAAM,CAAC,CAAC,CAAC,EAAE,CACxB,CACA,uBAAS,CACP,SAAS,CAAE,sBAAO,CAAC,EAAE,CAAC,EAAE,CAAC,QAAQ,CAAC,MACpC,CACA,0BAAY,CACV,KAAK,CAAE,IACT,CACA,wBAAU,CACR,SAAS,CAAE,sBAAO,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,CACxC,CACA,WAAW,sBAAQ,CACjB,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}`
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "width", "height", "box", "spin", "inverse", "pulse", "flip", "style", "label"]);
  let { class: className = "" } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { box = "0 0 0 0" } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = "none" } = $$props;
  let { style = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.box === void 0 && $$bindings.box && box !== void 0) $$bindings.box(box);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0) $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  $$result.css.add(css);
  return `<svg${spread(
    [
      { version: "1.1" },
      {
        class: "fa-icon " + escape(className, true)
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      {
        "aria-label": escape_attribute_value(label)
      },
      {
        role: escape_attribute_value(label ? "img" : "presentation")
      },
      { viewBox: escape_attribute_value(box) },
      { style: escape_attribute_value(style) },
      escape_object($$restProps)
    ],
    {
      classes: (spin ? "fa-spin" : "") + " " + (pulse ? "fa-pulse" : "") + " " + (inverse ? "fa-inverse" : "") + " " + (flip === "horizontal" ? "fa-flip-horizontal" : "") + " " + (flip === "vertical" ? "fa-flip-vertical" : "") + " svelte-1mc5hvj"
    }
  )}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
let outerScale = 1;
function normaliseData(data) {
  let name;
  let iconData;
  if (!data) {
    return void 0;
  } else if ("definition" in data) {
    console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
    return void 0;
  } else if ("iconName" in data && "icon" in data) {
    name = data.iconName;
    let paths = [];
    const [width, height, , , path] = data.icon;
    if (Array.isArray(path)) {
      paths = path;
    } else {
      paths = [path];
    }
    iconData = {
      width,
      height,
      paths: paths.map((path2) => {
        return { d: path2 };
      })
    };
  } else {
    name = Object.keys(data)[0];
    iconData = data[name];
  }
  return iconData;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "data", "scale", "spin", "inverse", "pulse", "flip", "label", "style"]);
  let { class: className = "" } = $$props;
  let { data } = $$props;
  let iconData;
  let { scale = 1 } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = void 0 } = $$props;
  let { label = "" } = $$props;
  let { style = "" } = $$props;
  let width = 10;
  let height = 10;
  let combinedStyle;
  let box;
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }
  function calculateWidth() {
    if (iconData) {
      return iconData.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (iconData) {
      return iconData.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return "";
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0) $$bindings.scale(scale);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0) $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0) $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0) $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0) $$bindings.flip(flip);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0) $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        iconData = normaliseData(data);
        width = calculateWidth();
        height = calculateHeight();
        combinedStyle = calculateStyle();
        box = calculateBox();
      }
    }
    $$rendered = `${validate_component(Svg, "Svg").$$render($$result, Object_1.assign({}, { label }, { width }, { height }, { box }, { style: combinedStyle }, { spin }, { flip }, { inverse }, { pulse }, { class: className }, $$restProps), {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ` ${iconData ? `${iconData.paths ? `${each(iconData.paths, (path) => {
          return `<path${spread([escape_object(path)], {})}></path>`;
        })}` : ``} ${iconData.polygons ? `${each(iconData.polygons, (polygon) => {
          return `<polygon${spread([escape_object(polygon)], {})}></polygon>`;
        })}` : ``} ${iconData.raw ? `${validate_component(Raw, "Raw").$$render(
          $$result,
          { data: iconData },
          {
            data: ($$value) => {
              iconData = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``}` : ``} `}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1itnv0m_START --><script src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js" integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/" crossorigin="anonymous" data-svelte-h="svelte-rpoh5y"><\/script><!-- HEAD_svelte-1itnv0m_END -->`, ""} <section><div class="text-center px-5 py-5"><button id="kakao-share" class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[11px] font-medium text-base" data-svelte-h="svelte-x8vuke">카카오톡으로 공유</button> <button class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base" data-svelte-h="svelte-1xzd59w">링크로 공유</button></div></section>`;
});
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "transition",
    "params",
    "node",
    "use",
    "options",
    "role"
  ]);
  const null_transition = () => ({ duration: 0 });
  const noop = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { transition = null_transition } = $$props;
  let { params = {} } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  const bgColors = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  };
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) },
        { role: escape_attribute_value(role) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ml-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "permanent",
    "backdropClass",
    "defaultClass",
    "outsideclose"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClass = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0) $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0) $$bindings.permanent(permanent);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0) $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0) $$bindings.outsideclose(outsideclose);
  {
    dispatch(open ? "open" : "hide");
  }
  frameClass = twMerge(defaultClass, "w-full", $$props.class);
  return `${open ? ` <div${add_attribute("class", twMerge("fixed inset-0 z-40", backdropCls), 0)}></div>   <div${add_attribute("class", twMerge("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t border-b"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3> `} ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}  <div class="p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain" role="document">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b border-t"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const edit = {
  edit: {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: "M888 1184l116-116-152-152-116 116v56h96v96h56zM1328 464q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zM1408 1058v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zM1312 320l288 288-672 672h-288v-288zM1756 452l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"
      }
    ]
  }
};
const trashO = {
  "trash-o": {
    width: 1408,
    height: 1792,
    paths: [
      {
        d: "M512 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM768 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM1024 736v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-576q0-14 9-23t23-9h64q14 0 23 9t9 23zM1152 1460v-948h-896v948q0 22 7 40.5t14.5 27 10.5 8.5h832q3 0 10.5-8.5t14.5-27 7-40.5zM480 384h448l-48-117q-7-9-17-11h-317q-10 2-17 11zM1408 416v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
      }
    ]
  }
};
const folderOpen = {
  "folder-open": {
    width: 1920,
    height: 1792,
    paths: [
      {
        d: "M1879 952q0 31-31 66l-336 396q-43 51-120.5 86.5t-143.5 35.5h-1088q-34 0-60.5-13t-26.5-43q0-31 31-66l336-396q43-51 120.5-86.5t143.5-35.5h1088q34 0 60.5 13t26.5 43zM1536 608v160h-832q-94 0-197 47.5t-164 119.5l-337 396-5 6q0-4-0.5-12.5t-0.5-12.5v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158z"
      }
    ]
  }
};
const firebaseConfig = {
  apiKey: "AIzaSyDbtIvDQceE_4O9bj9Bz6vpHfXu8U_WvFU",
  authDomain: "heejin-d6d79.firebaseapp.com",
  projectId: "heejin-d6d79",
  storageBucket: "heejin-d6d79.firebasestorage.app",
  messagingSenderId: "751438703089",
  appId: "1:751438703089:web:4bb85ff3051a336a817c50",
  measurementId: "G-EB5WKKX21D"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}
const GuestBookDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { modalStatus } = $$props;
  let { name = "" } = $$props;
  let { password = "" } = $$props;
  let { message = "" } = $$props;
  let { dialogMode = DialogMode.CREATE } = $$props;
  let { id = "" } = $$props;
  let { guestMessages } = $$props;
  let title;
  if (dialogMode === DialogMode.CREATE) {
    title = "방명록 글 작성";
  } else if (dialogMode === DialogMode.EDIT) {
    title = "방명록 글 수정";
  } else {
    title = "방명록 글 삭제";
  }
  if ($$props.modalStatus === void 0 && $$bindings.modalStatus && modalStatus !== void 0) $$bindings.modalStatus(modalStatus);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0) $$bindings.password(password);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  if ($$props.dialogMode === void 0 && $$bindings.dialogMode && dialogMode !== void 0) $$bindings.dialogMode(dialogMode);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.guestMessages === void 0 && $$bindings.guestMessages && guestMessages !== void 0) $$bindings.guestMessages(guestMessages);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        class: "m-5",
        title,
        autoclose: true,
        open: modalStatus
      },
      {
        open: ($$value) => {
          modalStatus = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="px-5 lg:px-8"><form class="space-y-2"><div><label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1klr71q">이름</label> ${dialogMode !== DialogMode.CREATE ? `<input disabled type="text" class="w-full input-bordered rounded-lg disabled:opacity-50" required${add_attribute("value", name, 0)}>` : `<input type="text" class="w-full input-bordered rounded-lg" required${add_attribute("value", name, 0)}>`}</div> <div><label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-hgeppc">비밀번호</label> <input type="password" class="w-full input-bordered rounded-lg" maxlength="15" required${add_attribute("value", password, 0)}></div> <div><label for="letter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-kbh5j0">내용</label> ${dialogMode !== DialogMode.DELETE ? `<textarea class="textarea w-full rounded-lg textarea-bordered h-24 bg-white" placeholder="메시지">${escape(message || "")}</textarea>` : `<textarea disabled class="textarea w-full rounded-lg textarea-bordered h-24 bg-white disabled:opacity-50" placeholder="메시지">${escape(message || "")}</textarea>`}</div></form></div>  ${dialogMode === DialogMode.CREATE ? `<button class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50" ${!name || !password || !message ? "disabled" : ""}>작성하기</button>` : `${dialogMode === DialogMode.EDIT ? `<button class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50" ${!name || !password || !message ? "disabled" : ""}>수정하기</button>` : `<button class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50" ${!name || !password ? "disabled" : ""}>삭제하기</button>`}`}  <button class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base" data-svelte-h="svelte-18b06zs">닫기</button>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const GuestBook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { guestMessages } = $$props;
  let createModal = false;
  let editModal = false;
  let deleteModal = false;
  let overviewModal = false;
  let messageID;
  let name;
  let password;
  let message;
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat(
      "ko-KR",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }
    ).format(date);
  };
  if ($$props.guestMessages === void 0 && $$bindings.guestMessages && guestMessages !== void 0) $$bindings.guestMessages(guestMessages);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="py-5 mx-auto"><h1 class="text-3xl md:text-3xl font-bold text-center text-stone-600" data-svelte-h="svelte-19xbbwh">방명록</h1> <p class="text-gray-500 text-center" data-svelte-h="svelte-1nisfdh">응원의 메시지를 남겨주시면 소중히 간직하겠습니다.</p> <div class="space-y-4"><div class="overflow-x-auto flex w-full space-x-3 h-64 py-4 relative">${each(guestMessages, (messageCard, id) => {
      return `${id < 20 ? `<div class="flex flex-col w-44 max-w-xl flex-none p-4 justify-between bg-stone-100 rounded-xl shadow-md"><div class="overflow-hidden flex-col break-all text-ellipsis leading-5">${escape(messageCard.message)}</div> <div class="text-right"><h1>${escape(messageCard.name)}</h1> <span>${escape(formatDate(messageCard.date))}</span></div> </div>` : ``}`;
    })} <div class="flex flex-col rounded-xl w-44 max-w-xl flex-none p-4 justify-center items-center"><button class="flex flex-col justify-center items-center space-y-2">${validate_component(Icon, "Icon").$$render($$result, { data: folderOpen, scale: 2 }, {}, {})} <span data-svelte-h="svelte-1d2ivge">전체보기</span></button></div></div></div> <div class="flex-row justify-end flex items-end"><button class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base" data-svelte-h="svelte-1p8bn24">전체보기</button> <button class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base" data-svelte-h="svelte-1jcws46">작성하기</button></div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "모든 게시글",
        autoclose: true,
        open: overviewModal
      },
      {
        open: ($$value) => {
          overviewModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-col overflow-y-auto divied-y space-y-8 scroll px-2">${each(guestMessages, (messageCard) => {
            return `<div class="text-left text-sm break-all leading-5"><div class="flex flex-row justify-between items-center mt-8"><h1 class="text-base">${escape(messageCard.name)}</h1> <div class="space-x-2"><button class="disabled:opacity-50">${validate_component(Icon, "Icon").$$render($$result, { data: edit }, {}, {})}</button> <button class="disabled:opacity-50">${validate_component(Icon, "Icon").$$render($$result, { data: trashO }, {}, {})}</button> </div></div> <div class="mt-2">${escape(messageCard.message)}</div> <div class="text-right"><span class="text-sm mt-8">${escape(formatDate(messageCard.date))}</span> </div></div> <div class="divider"></div>`;
          })}</div> <div class="flex flex-row justify-center mt-4" data-svelte-h="svelte-1wgk4do"><button class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base">닫기</button></div>`;
        }
      }
    )} ${validate_component(GuestBookDialog, "GuestBookDialog").$$render(
      $$result,
      {
        dialogMode: DialogMode.CREATE,
        modalStatus: createModal,
        name,
        password,
        message,
        guestMessages
      },
      {
        modalStatus: ($$value) => {
          createModal = $$value;
          $$settled = false;
        },
        name: ($$value) => {
          name = $$value;
          $$settled = false;
        },
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        },
        message: ($$value) => {
          message = $$value;
          $$settled = false;
        },
        guestMessages: ($$value) => {
          guestMessages = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(GuestBookDialog, "GuestBookDialog").$$render(
      $$result,
      {
        dialogMode: DialogMode.EDIT,
        modalStatus: editModal,
        id: messageID,
        name,
        password,
        message,
        guestMessages
      },
      {
        modalStatus: ($$value) => {
          editModal = $$value;
          $$settled = false;
        },
        id: ($$value) => {
          messageID = $$value;
          $$settled = false;
        },
        name: ($$value) => {
          name = $$value;
          $$settled = false;
        },
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        },
        message: ($$value) => {
          message = $$value;
          $$settled = false;
        },
        guestMessages: ($$value) => {
          guestMessages = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(GuestBookDialog, "GuestBookDialog").$$render(
      $$result,
      {
        dialogMode: DialogMode.DELETE,
        modalStatus: deleteModal,
        id: messageID,
        name,
        password,
        message,
        guestMessages
      },
      {
        modalStatus: ($$value) => {
          deleteModal = $$value;
          $$settled = false;
        },
        id: ($$value) => {
          messageID = $$value;
          $$settled = false;
        },
        name: ($$value) => {
          name = $$value;
          $$settled = false;
        },
        password: ($$value) => {
          password = $$value;
          $$settled = false;
        },
        message: ($$value) => {
          message = $$value;
          $$settled = false;
        },
        guestMessages: ($$value) => {
          guestMessages = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const copy = {
  copy: {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: "M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zM1152 597l-299 299h299v-299zM512 213l-299 299h299v-299zM708 860l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zM1664 1664v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"
      }
    ]
  }
};
const AccountItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { bank } = $$props;
  let { accountNum } = $$props;
  let { kakaoURL = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.bank === void 0 && $$bindings.bank && bank !== void 0) $$bindings.bank(bank);
  if ($$props.accountNum === void 0 && $$bindings.accountNum && accountNum !== void 0) $$bindings.accountNum(accountNum);
  if ($$props.kakaoURL === void 0 && $$bindings.kakaoURL && kakaoURL !== void 0) $$bindings.kakaoURL(kakaoURL);
  return `<div class="flex flex-row justify-center items-center"><p class="text-lg px-1">${escape(name)}</p> <p class="text-justify px-1 text-lg">${escape(bank)}</p> <p class="text-justify px-1 text-lg">${escape(accountNum)}</p> <button class="inline-block rounded bg-gray-200 px-2 m-1 pb-[5px] pt-[6px] text-xs font-medium">복사${validate_component(Icon, "Icon").$$render($$result, { data: copy }, {}, {})}</button> ${kakaoURL.length > 0 ? `<a class="inline-block rounded bg-gray-200 px-2 m-1 pb-[9px] pt-[10px] text-xs font-medium"${add_attribute("href", kakaoURL, 0)} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 2000 616" stroke="currentColor" class="h-[0.6rem]"><path d="M2915 6154c-498-28-910-119-1310-291-706-302-1240-819-1471-1427-144-376-166-789-63-1185 153-592 612-1144 1243-1491 54-30 100-60 102-65 3-6-61-250-141-542-80-293-145-543-145-556 0-27 31-72 61-88 14-7 30-7 57 2 20 6 184 111 364 233s456 308 613 413l286 193 127-16c181-22 507-29 692-15 743 56 1393 299 1920 717 121 96 332 311 424 432 80 105 182 266 231 363 83 162 158 395 190 589 20 114 27 382 14 500-84 772-602 1452-1419 1861-469 234-982 357-1555 372-88 3-187 3-220 1zM18905 6068c-5-15-582-2037-782-2743-75-264-139-483-142-487s-53 153-110 350c-57 196-177 609-266 917-297 1019-546 1879-558 1920-6 22-12 41-13 43-3 4-1060-275-1086-286-17-8-17-8 422-1202 100-272 239-652 310-845 70-192 235-640 365-995s263-717 296-806c32-89 59-167 59-175 0-21-88-173-175-304-158-237-373-487-600-698-71-66-130-124-130-129 0-4 152-147 338-318l339-310 101 69c437 297 809 768 1128 1425 108 224 256 575 339 806 34 96 125 348 202 560s180 495 228 630c86 238 653 1804 770 2125 51 141 56 161 41 167-22 10-1048 298-1061 298-6 0-13-6-15-12zM9481 6049c-345-39-631-166-899-399-45-40-84-71-86-69s-32 81-68 174l-65 170-392 3-391 2V180l558 2 557 3 3 776 2 776 101-23c182-41 263-47 511-41 130 3 276 12 330 21 625 99 1095 452 1377 1036 233 482 306 1100 211 1782-126 900-571 1425-1295 1528-112 15-354 20-454 9zm89-929c309-88 475-310 551-735 27-153 38-570 19-751-54-542-247-884-584-1040-167-77-397-110-647-94-75 5-153 12-173 15l-36 7 2 1241 3 1241 100 39c106 42 247 81 348 96 103 16 330 6 417-19zM13455 6020c-327-34-658-118-935-240-154-67-370-192-370-214 0-6 63-164 141-351s145-350 149-362c9-21 11-20 122 28 142 62 349 129 500 163 204 46 320 59 518 59 159 0 196-3 265-21 192-52 310-143 384-294 52-107 71-204 71-363v-125h-417c-230 0-470-5-533-10-173-16-377-56-517-101-522-170-818-520-874-1036-14-131-6-383 16-506 95-523 404-851 903-957 141-30 401-38 548-16 304 45 591 162 909 370 55 36 103 62 107 58 3-4 30-80 58-169l53-163h788l-4 1418c-4 1469-4 1472-47 1687-130 646-550 1029-1240 1130-127 19-471 27-595 15zm845-2795v-385l-51-40c-112-89-311-178-507-228-99-25-122-27-302-26-174 0-201 2-252 21-117 44-187 111-229 222-27 70-37 251-19 344 30 154 130 284 278 360 185 95 310 112 815 115l267 2v-385z" transform="matrix(.1 0 0 -.1 0 616)"></path></svg></a>` : ``}</div>`;
});
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { groomBank, groomAccountNum, groomFatherName, groomMotherName, groomMotherBank, groomMotherAccountNum, groomMotherKakaoURL, brideName: brideName2, brideFatherName, brideFatherBank, brideFatherAccountNum, brideFatherKakaoURL, brideMotherName } = AccountInfo;
  const groomParentsLabel = `신랑 측 부 ${groomFatherName}, 모 ${groomMotherName}`;
  const brideParentsLabel = `신부 측 부 ${brideFatherName}, 모 ${brideMotherName}`;
  const groomSelected = {
    bank: groomMotherBank,
    accountNum: groomMotherAccountNum,
    kakaoURL: groomMotherKakaoURL
  };
  const brideSelected = {
    bank: brideFatherBank,
    accountNum: brideFatherAccountNum,
    kakaoURL: brideFatherKakaoURL
  };
  return `<div class="py-5 mb-20"><h1 class="text-3xl md:text-3xl m-5 font-bold text-center text-stone-600" data-svelte-h="svelte-optrwq">마음 전하실 곳</h1> <details class="text-center m-2"><summary class="cursor-pointer text-lg" data-svelte-h="svelte-1yn3j9a">신랑, 신부측 계좌번호</summary> ${validate_component(AccountItem, "AccountItem").$$render(
    $$result,
    {
      name: brideName2,
      bank: groomBank,
      accountNum: groomAccountNum,
      kakaoURL: groomSelected.kakaoURL
    },
    {},
    {}
  )}</details> <details class="text-center m-2"><summary class="cursor-pointer text-lg" data-svelte-h="svelte-knxz16">신랑측 부모님 계좌번호</summary> ${validate_component(AccountItem, "AccountItem").$$render(
    $$result,
    {
      name: groomParentsLabel,
      bank: groomSelected.bank,
      accountNum: groomSelected.accountNum,
      kakaoURL: groomSelected.kakaoURL
    },
    {},
    {}
  )}</details> <details class="text-center m-2"><summary class="cursor-pointer text-lg" data-svelte-h="svelte-1yynjkx">신부측 부모님 계좌번호</summary> ${validate_component(AccountItem, "AccountItem").$$render(
    $$result,
    {
      name: brideParentsLabel,
      bank: brideSelected.bank,
      accountNum: brideSelected.accountNum,
      kakaoURL: brideSelected.kakaoURL
    },
    {},
    {}
  )}</details></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let guestMessages = [];
  let isTouched = false;
  const imageUrl = mainImageURL;
  const siteUrl = siteURL;
  const title = mainTitle;
  const description = mainDescription;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1ybjtxo_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:url"${add_attribute("content", siteUrl, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:type" content="website"><meta property="og:image"${add_attribute("content", imageUrl, 0)}><!-- HEAD_svelte-1ybjtxo_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(MainImage, "MainImage").$$render(
      $$result,
      { isTouched },
      {
        isTouched: ($$value) => {
          isTouched = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="divider py-10"></div> ${validate_component(MainMessage, "MainMessage").$$render($$result, {}, {}, {})} ${validate_component(Calendar, "Calendar").$$render(
      $$result,
      {
        year: dday[0],
        month: dday[1],
        theDay: dday[2]
      },
      {},
      {}
    )} <div class="divider py-10"></div> ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})} <div class="divider py-10"></div> ${validate_component(Location, "Location").$$render($$result, {}, {}, {})} <div class="divider py-10"></div> ${validate_component(GuestBook, "GuestBook").$$render(
      $$result,
      { guestMessages },
      {
        guestMessages: ($$value) => {
          guestMessages = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="divider"></div> ${validate_component(Account, "Account").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${!isTouched ? `${validate_component(AnimationFrame, "AnimationFrame").$$render($$result, { isHeartMode: true }, {}, {})}` : `${validate_component(AnimationFrame, "AnimationFrame").$$render($$result, { isHeartMode: false }, {}, {})}`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
