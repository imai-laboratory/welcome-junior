<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';

type B3Session = {
	id: string; // アンカー用
	displayDate: string; // 表示用 '10/29(Tue)' など
	time: string; // '18:10–20:00'
	place: string; // 'DR-8(14-218)'
	title: string; // '説明会' など
};

const b3Schedule: B3Session[] = [
	{
		id: 'session-1',
		displayDate: '10/29(Tue)',
		time: '18:10–20:00',
		place: 'DR-8(14-218)',
		title: '説明会',
	},
	{
		id: 'session-2',
		displayDate: '11/05(Tue)',
		time: '18:10–20:00',
		place: 'DR-8(14-218)',
		title: '説明会',
	},
	{
		id: 'session-3',
		displayDate: '11/11(Mon)',
		time: '18:15–19:30頃',
		place: '14-517',
		title: '研究室見学・懇談会（途中参加OK）',
	},
];
</script>

<template>
	<SectionWrapper
		id="forb3"
		title="B3の皆さんへ"
		borderClass="border-slate-800"
	>
		<!-- スケジュール -->
		<div class="mb-8 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6">
			<h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
				<i class="fa-regular fa-calendar text-slate-600"></i>
				今年度の見学会日程
			</h3>

			<ul class="space-y-3">
				<li
					v-for="s in b3Schedule"
					:key="`${s.id}`"
					class="flex items-start gap-3"
				>
					<div class="w-2 h-2 mt-2 rounded-full bg-sky-500"></div>
					<div>
						<p class="font-medium">
							<a
								v-if="s.id"
								:id="s.id"
								:href="`#${s.id}`"
								class="hover:underline decoration-sky-400"
							>
								{{ s.displayDate }}
							</a>
							<span v-else>{{ s.displayDate }}</span>
							<span class="mx-2">{{ s.time }}</span>
						</p>
						<p class="text-slate-600 text-sm">@{{ s.place }}：{{ s.title }}</p>
					</div>
				</li>
			</ul>
		</div>

		<!-- メッセージ -->
		<div
			class="bg-gradient-to-r from-slate-50 to-white rounded-2xl ring-1 ring-slate-200 shadow-sm p-6 leading-relaxed"
		>
			<p class="mb-3">
				数ある研究室の中から今井研究室に興味を持ってくださった皆さん、ありがとうございます！
			</p>
			<p class="mb-3">今井研では B3 に向けてイベントを開催していきます。</p>
			<p class="italic text-slate-600 mb-3">
				「せっかく興味があるのに予定が合わなくてどうしても参加できない……」
			</p>
			<p>
				そんな時はいつでもメールで声をかけてください！<br />
				きっと優しい先輩たちがあなたのために日程調整をしてくれるに違いありません！
			</p>
		</div>
	</SectionWrapper>
</template>
