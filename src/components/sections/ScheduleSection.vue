<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import { ref } from 'vue';
import { useResolveAssetPath } from '@/utils/resolveAssetPath';

type ScheduleEvent = {
	id?: string;
	name: string;
	detail: string;
	bullets?: string[];
	images?: string[];
};

type ScheduleGroup = {
	month: string;
	events: ScheduleEvent[];
};

const groups = ref<ScheduleGroup[]>([
	{
		month: 'October-November',
		events: [
			{
				id: 'session',
				name: '見学会',
				detail: '2024年度の日程は以下の通りです',
				bullets: [
					'10/28(Tue) 18:15 @DR-8(14-218) — 研究室見学・懇談会(途中参加OK)',
					'11/4(Tue) 18:15 @DR-8(14-218) — 研究室見学・懇談会(途中参加OK)',
				],
			},
		],
	},
	{
		month: 'January',
		events: [
			{
				name: 'Final',
				detail:
					'期末試験頑張りつつ、卒論・修論発表もこの時期なので是非見に行きましょう！',
			},
		],
	},
	{
		month: 'February',
		events: [
			{
				name: 'Training',
				detail:
					'研究室の活動がいよいよ始まります！新人研修ではみんなのレベルに応じて必要な知識を教えます！',
			},
		],
	},
	{
		month: 'March',
		events: [
			{
				name: 'Lintaraction',
				detail: '今井研究室のOB会を行います。例年日吉のHUBで行っています！',
				images: ['/images/Lintaraction.jpg'],
			},
		],
	},
	{
		month: 'April',
		events: [{ name: 'New Semester🌸', detail: '新学期開始です！' }],
	},
	{
		month: 'May',
		events: [
			{
				name: 'Softball Championship',
				detail:
					'理工学部、全研究室対抗のソフトボール大会に出ます！楽しくやりましょう！',
				images: ['/images/softball2025.PNG'],
			},
		],
	},
	{
		month: 'June',
		events: [
			{
				name: 'Reading Articles',
				detail:
					'7月終わりの情報工学科内の輪講発表に向けて論文を選んで発表練習を行います。英語の論文にも慣れちゃいましょう！',
			},
		],
	},
	{
		month: 'July',
		events: [
			{
				name: 'Presentation',
				detail:
					'輪講発表を他の研究室の先生の前でやります。必修単位なのでしっかり準備しましょう！',
			},
		],
	},
	{
		month: 'August',
		events: [
			{
				name: 'Bachelor Thesis Startup',
				detail: '8月で研究の進捗を出しましょう！',
			},
		],
	},
	{
		month: 'September',
		events: [
			{
				name: 'Summer Camp',
				detail: '夏休みに合宿をやります！しっかり遊びましょう！',
				images: ['/images/summer_camp2024.jpg', '/images/summer_camp2023.jpeg'],
			},
		],
	},
	{
		month: 'October',
		events: [
			{
				name: 'Demo Presentation',
				detail: '夏休みの研究成果を研究室内でデモ発表します！',
			},
		],
	},
	{
		month: 'November',
		events: [
			{
				name: 'Bachelor Thesis Report',
				detail: '本格的に卒論テーマに取り組みましょう！',
			},
		],
	},
	{
		month: 'December',
		events: [
			{
				name: 'Keio Techno-Mall',
				detail: '慶応テクノモールに出展します！是非たくさん質問してください！',
				images: ['/images/techno-mall.jpg'],
			},
		],
	},
	{
		month: 'January',
		events: [
			{
				name: 'Bachelor Thesis Presentation',
				detail: '卒論発表です！お疲れっす！',
			},
		],
	},
]);
</script>

<template>
	<SectionWrapper id="schedule" title="SCHEDULE" borderClass="border-slate-800">
		<div class="space-y-10">
			<div
				v-for="(group, gIdx) in groups"
				:key="`${group.month}-${gIdx}`"
				class="grid md:grid-cols-12 gap-4 md:gap-8"
			>
				<div class="md:col-span-3">
					<p class="text-xl font-semibold">{{ group.month }}</p>
				</div>

				<div class="md:col-span-9 space-y-6">
					<div
						v-for="(ev, idx) in group.events"
						:key="`${group.month}-${idx}`"
						class="rounded-xl ring-1 ring-slate-200 p-5 bg-white"
					>
						<p :id="ev.id || undefined" class="text-lg font-semibold mb-2">
							{{ ev.name }}
						</p>
						<p class="mb-3">{{ ev.detail }}</p>

						<ul v-if="ev.bullets?.length" class="list-disc pl-6 space-y-1">
							<li v-for="(b, i) in ev.bullets" :key="i">{{ b }}</li>
						</ul>

						<div v-if="ev.images?.length" class="mt-3 flex gap-3 flex-wrap">
							<img
								v-for="(src, i) in ev.images"
								:key="i"
								:src="useResolveAssetPath(src)"
								:alt="`${ev.name} image ${i + 1}`"
								class="h-48 rounded-lg object-cover"
								loading="lazy"
								decoding="async"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</SectionWrapper>
</template>
