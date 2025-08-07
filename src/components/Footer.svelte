<script lang="ts">
	import { onMount } from 'svelte';
	import githubSquare from 'svelte-awesome/icons/githubSquare';
	import { Icon } from 'svelte-awesome';
	import { env } from '$env/dynamic/public';
	import copy from 'copy-to-clipboard';
	import { brideFullName, groomFullName, mainImageURL, dday, timeStr, poiName} from '../resource/input';

	// share main image
	const imageUrl = mainImageURL;
	const title = groomFullName + ' ❤ ' + brideFullName + '의 결혼식에 초대합니다.';
	const description = dday[0] + '년 ' + dday[1] + '월 ' + dday[2] + '일 ' + timeStr + ' \n' + poiName;

	onMount(() => {
		window.Kakao.init(env.PUBLIC_KAKAO_JS_KEY);
		window.Kakao.Share.createDefaultButton({
			container: '#kakao-share',
			objectType: 'feed',
			content: {
				title,
				description,
				imageUrl,
				link: {
					mobileWebUrl: window.location.href,
					webUrl: window.location.href
				}
			},
			buttons: [
				{
					title: '청첩장 보러가기',
					link: {
						mobileWebUrl: window.location.href,
						webUrl: window.location.href
					}
				}
			]
		});
	});

	async function sharePage() {
		if (navigator.share) {
			navigator.share({
				title: document.title,
				url: window.location.href
			});
		} else {
			copy(window.location.href);
			alert('링크가 복사되었습니다.');
		}
	}
</script>

<svelte:head>
	<script
		src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
		integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
		crossorigin="anonymous"
	>
	</script>
</svelte:head>

<section>
	<div class="text-center px-5 py-5">
		<button
			id="kakao-share"
			class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[11px] font-medium text-base"
		>
			카카오톡으로 공유</button
		>
		<button
			class="btn inline-block text-black rounded bg-gray-200 px-2 m-2 pb-[5px] pt-[6px] font-medium text-base"
			on:click={sharePage}>링크로 공유</button
		>
	</div>
</section>


