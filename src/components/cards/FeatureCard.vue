<script setup lang="ts">
const { title } = defineProps<{
	/** カード見出し */
	title: string;
}>();
</script>

<template>
	<article
		v-bind="$attrs"
		class="rounded-xl ring-1 ring-slate-200 bg-white p-6"
	>
		<h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
		<div class="leading-relaxed">
			<slot />
		</div>
	</article>
</template>
