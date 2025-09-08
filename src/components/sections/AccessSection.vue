<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';

type AccessItem = {
	label: string;
	href: string;
	iconClass: string;
};

const items: AccessItem[] = [
	{
		label: 'ホームページ',
		href: 'http://www.ailab.ics.keio.ac.jp',
		iconClass: 'fa-solid fa-house',
	},
	{
		label: 'Twitter',
		href: 'https://twitter.com/imailab',
		iconClass: 'fa-brands fa-x-twitter',
	},
	{
		label: 'GitHub',
		href: 'https://github.com/imai-laboratory',
		iconClass: 'fa-brands fa-github',
	},
	{
		label: 'orien@ailab.ics.keio.ac.jp',
		href: 'mailto:orien@ailab.ics.keio.ac.jp',
		iconClass: 'fa-regular fa-envelope',
	},
];
</script>

<template>
	<SectionWrapper id="access" title="ACCESS" borderClass="border-slate-800">
		<!-- 説明 -->
		<div class="text-center text-[20px] leading-relaxed mb-6">
			今井研究室の学生は
			<strong>26-203</strong> で研究をしています！<br />
			いつでも見学に来てください！
		</div>

		<!-- リンク一覧 -->
		<ul class="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
			<li v-for="item in items" :key="item.href">
				<a
					:href="item.href"
					target="_blank"
					rel="noreferrer"
					class="group flex items-center justify-between rounded-xl ring-1 ring-slate-200 bg-white/90 hover:bg-white transition p-4 shadow-sm hover:shadow-md"
				>
					<span class="flex items-center gap-3">
						<i :class="`${item.iconClass} text-slate-700`"></i>
						<span class="text-[17px] text-slate-800 group-hover:text-slate-900">
							{{ item.label }}
						</span>
					</span>
					<!-- 右側インジケータ -->
					<span class="opacity-60 group-hover:opacity-100 transition">
						<i class="fa-solid fa-arrow-up-right-from-square"></i>
					</span>
				</a>
			</li>
		</ul>
	</SectionWrapper>
</template>
