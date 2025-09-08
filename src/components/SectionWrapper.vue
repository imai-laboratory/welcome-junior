<script setup lang="ts">
import { computed } from 'vue';

type Props = {
	/** セクション見出し */
	title: string;
	/** セクションID（アンカー用） */
	id?: string;
	/** 左ボーダーの色などを上書きしたいとき（例: "border-red-500"） */
	borderClass?: string;
	/** コンテンツ幅（既定: max-w-6xl） */
	maxWidthClass?: string;
	/** 余白（既定: px-4 py-12） */
	paddingClass?: string;
};

const {
	borderClass = 'border-slate-800',
	maxWidthClass = 'max-w-6xl',
	paddingClass = 'px-4 py-12',
} = defineProps<Props>();

const containerClass = computed(() => [maxWidthClass, 'mx-auto', paddingClass]);
const headingClass = computed(() => [
	'text-2xl md:text-3xl font-bold pl-3 mb-6 border-l-4',
	borderClass,
]);
</script>

<template>
	<section :id="id" :class="containerClass">
		<h2 :class="headingClass">{{ title }}</h2>
		<slot />
	</section>
</template>
