<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';

type LabRoom = {
	src: string;
	alt: string;
	title: string;
	desc: string;
};

const rooms: LabRoom[] = [
	{
		src: '/images/26-203.png',
		alt: '26-203',
		title: '26-203',
		desc: 'みんなの作業場',
	},
];
</script>

<template>
	<SectionWrapper id="our_lab" title="OUR LAB" borderClass="border-slate-800">
		<p class="mb-4 text-slate-700">今井研究室が使っている教室の写真です！</p>

		<div
			class="grid gap-6 justify-items-center [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]"
		>
			<figure
				v-for="room in rooms"
				:key="room.title"
				class="w-full max-w-sm rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
			>
				<div class="aspect-[3/2] w-full overflow-hidden bg-slate-50">
					<img
						:src="room.src"
						:alt="room.alt"
						class="w-full h-full object-cover object-center"
						loading="lazy"
						decoding="async"
					/>
				</div>

				<figcaption class="p-4 text-sm text-slate-700 text-center">
					<div class="font-semibold">{{ room.title }}</div>
					<div class="text-slate-600">{{ room.desc }}</div>
				</figcaption>
			</figure>
		</div>
	</SectionWrapper>
</template>
