<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';

type NewsItem = {
	date: string;
	title: string;
	link?: string;
};

const news: NewsItem[] = [
	{
		date: '2024/11/05(Tue)',
		title: '研究室見学会についての記載を更新しました！',
		link: '#schedule',
	},
	{
		date: '2025/09/09(Tue)',
		title: 'Webサイトをリニューアルしました！',
	},
];
</script>

<template>
	<SectionWrapper title="WHAT's NEW" borderClass="border-sky-300">
		<div
			class="bg-gradient-to-br from-white via-sky-50 to-white shadow-sm ring-1 ring-slate-200 rounded-2xl overflow-hidden"
		>
			<table class="w-full">
				<tbody>
					<tr
						v-for="item in news"
						:key="`${item.date}-${item.title}`"
						class="border-b last:border-b-0 border-slate-100 hover:bg-sky-50/60 transition"
					>
						<td class="p-4 whitespace-nowrap text-slate-500 text-sm">
							<time>{{ item.date }}</time>
						</td>
						<th class="p-4 text-left font-medium">
							<template v-if="item.link">
								<a
									:href="item.link"
									class="text-sky-700 hover:text-sky-900 hover:underline flex items-center gap-2"
								>
									<i class="fa-regular fa-newspaper text-sky-500"></i>
									{{ item.title }}
								</a>
							</template>
							<template v-else>
								<span class="flex items-center gap-2">
									<i class="fa-regular fa-newspaper text-sky-500"></i>
									{{ item.title }}
								</span>
							</template>
						</th>
					</tr>
				</tbody>
			</table>

			<div v-if="!news.length" class="p-6 text-center text-slate-500">
				現在お知らせはありません。
			</div>
		</div>
	</SectionWrapper>
</template>
