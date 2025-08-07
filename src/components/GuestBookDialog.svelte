<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	import { DialogMode } from '../resource/utils';
	import { addGuestMessage, updateGuestMessage, deleteGuestMessage } from '../lib/guestbook';

	export let modalStatus: boolean;
	export let name: string = '';
	export let password: string = '';
	export let message: string = '';
	export let dialogMode: DialogMode = DialogMode.CREATE;
	export let id: string = '';
	export let guestMessages: Array<any>;

	let title: string;

	if (dialogMode === DialogMode.CREATE) {
		title = '방명록 글 작성';
	} else if (dialogMode === DialogMode.EDIT) {
		title = '방명록 글 수정';
	} else {
		title = '방명록 글 삭제';
	}

	async function doEdit() {
		const isUpdated = await updateGuestMessage(id, message, password);

		if (isUpdated) {
			guestMessages.forEach((guestMessage) => {
				if (guestMessage.id === id) {
					guestMessage.message = message;
				}
			});
			guestMessages = [...guestMessages];
		} else {
			alert('비밀번호가 틀렸습니다.');
		}
	}

	async function doPost() {
		const insertedId = await addGuestMessage(name, message, password);

		guestMessages = [
			{
				id: insertedId,
				name: name,
				password: password,
				message: message,
				date: new Date()
			},
			...guestMessages
		];
		name = '';
		password = '';
		message = '';

		alert('작성하신 글이 등록되었습니다.');
	}

	async function doDelete() {
		const isUpdated = await deleteGuestMessage(id, password);
		if (isUpdated) {
			let removeId: number = 0;

			guestMessages.forEach((message, index) => {
				if (message.id === id) {
					removeId = index;
				}
			});
			guestMessages.splice(removeId, 1);
			guestMessages = [...guestMessages];
		} else {
			alert('비밀번호가 틀렸습니다.');
		}
	}
</script>

<Modal class="m-5" {title} bind:open={modalStatus} autoclose>
	<div class="px-5 lg:px-8">
		<form class="space-y-2">
			<div>
				<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
				{#if dialogMode !== DialogMode.CREATE}
					<input
						disabled
						type="text"
						class="w-full input-bordered rounded-lg disabled:opacity-50"
						required
						bind:value={name}
					/>
				{:else}
					<input type="text" class="w-full input-bordered rounded-lg" required bind:value={name} />
				{/if}
			</div>
			<div>
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
				<input
					type="password"
					class="w-full input-bordered rounded-lg"
					maxlength="15"
					required
					bind:value={password}
				/>
			</div>
			<div>
				<label for="letter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
				{#if dialogMode !== DialogMode.DELETE}
					<textarea
						class="textarea w-full rounded-lg textarea-bordered h-24 bg-white"
						placeholder="메시지"
						bind:value={message}
					/>
				{:else}
					<textarea
						disabled
						class="textarea w-full rounded-lg textarea-bordered h-24 bg-white disabled:opacity-50"
						placeholder="메시지"
						bind:value={message}
					/>
				{/if}
			</div>
		</form>
	</div>

	<!-- Action buttons -->
	{#if dialogMode === DialogMode.CREATE}
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50"
			disabled={!name || !password || !message}
			on:click={doPost}>
			작성하기
		</button>
	{:else if dialogMode === DialogMode.EDIT}
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50"
			disabled={!name || !password || !message}
			on:click={doEdit}>
			수정하기
		</button>
	{:else}
		<button
			class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base disabled:opacity-50"
			disabled={!name || !password}
			on:click={doDelete}>
			삭제하기
		</button>
	{/if}

	<!-- 닫기 버튼 -->
	<button class="inline-block text-black rounded bg-gray-200 px-2 pb-[5px] pt-[6px] font-medium text-base">
		닫기
	</button>
</Modal>
