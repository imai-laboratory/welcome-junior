<script setup lang="ts">
type Props = {
	/** 表示するテキスト */
	label: string;
	/** 背景色クラス */
	bgClass?: string;
	/** テキスト色クラス */
	textClass?: string;
};

const { bgClass = 'bg-slate-100', textClass = 'text-slate-700' } =
	defineProps<Props>();
</script>

<template>
	<span
		class="inline-block px-2 py-1 rounded-full text-x"
		:class="[bgClass, textClass]"
	>
		{{ label }}
	</span>
</template>
