<script setup lang="ts">
import { ref, computed } from 'vue';
import MediaModal from '@/components/modals/MediaModal.vue';

const {
	title,
	caption,
	thumb,
	video,
	imgOnly = false,
	/** md以上で左右反転したい場合に true */
	reverse = false,
} = defineProps<{
	title: string;
	caption: string;
	thumb: string;
	video?: string;
	imgOnly?: boolean;
	reverse?: boolean;
}>();

const open = ref<boolean>(false);
const isVideo = computed<boolean>(() => !imgOnly && !!video);

const openModal = () => {
	open.value = true;
};
</script>

<template>
	<!-- 1枚カードに統合：メディア + テキスト -->
	<article
		class="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
	>
		<div
			class="grid gap-0 md:grid-cols-5"
			:class="
				reverse
					? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
					: ''
			"
		>
			<!-- メディア領域 -->
			<div class="relative md:col-span-2 bg-black/5 group">
				<button
					class="relative block w-full h-full"
					@click="openModal"
					aria-label="拡大して表示"
				>
					<span class="block aspect-video md:h-full md:aspect-auto">
						<img
							:src="thumb"
							:alt="title"
							class="w-full h-full object-cover md:object-contain bg-black/5"
						/>
					</span>

					<span
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition"
					></span>

					<!-- 再生アイコン（中央固定） -->
					<i
						v-if="isVideo"
						class="fa-regular fa-circle-play text-5xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-90 group-hover:scale-105 transition"
					></i>
				</button>

				<!-- 右上のアクションボタン -->
				<button
					class="absolute top-3 right-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur ring-1 ring-slate-200 text-sm hover:bg-white z-20"
					@click="openModal"
				>
					<span v-if="isVideo" class="i fa-regular fa-circle-play"></span>
					<span v-else class="i fa-regular fa-image"></span>
					<span>{{ isVideo ? '再生' : '拡大表示' }}</span>
				</button>
			</div>

			<!-- テキスト領域 -->
			<div class="md:col-span-3 p-5 md:p-6 flex">
				<div class="my-auto">
					<h3 class="text-base md:text-lg font-semibold mb-2">
						{{ title }}
					</h3>
					<p class="text-sm leading-relaxed text-slate-700">
						{{ caption }}
					</p>
				</div>
			</div>
		</div>

		<!-- モーダル -->
		<MediaModal
			v-model="open"
			:video-src="isVideo ? video : ''"
			:img-src="!isVideo ? thumb : ''"
			:alt="title"
		/>
	</article>
</template>
