<script setup lang="ts">
defineProps<{
	imgSrc?: string;
	videoSrc?: string;
	alt?: string;
}>();

const modal = defineModel<boolean>();
</script>

<template>
	<transition name="fade">
		<div
			v-if="modal"
			class="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
			@click.self="modal = false"
		>
			<div
				class="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-xl"
			>
				<div class="relative">
					<video
						v-if="videoSrc"
						class="w-full h-auto"
						:src="videoSrc"
						controls
						playsinline
					></video>
					<img v-else :src="imgSrc" :alt="alt" class="w-full h-auto" />

					<button
						class="absolute top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/70 text-white"
						@click="modal = false"
					>
						<span class="sr-only">閉じる</span>
						✕
					</button>
				</div>
			</div>
		</div>
	</transition>
</template>
