<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import DemoCard from '@/components/cards/DemoCard.vue';
import { useResolveAssetPath } from '@/utils/resolveAssetPath';

const socialSkillsImage = useResolveAssetPath(
	'/images/social-intelligence-goals.png',
);

// Clip each numbered tile directly from the original image.
const socialSkills = [
	{ id: 3, label: '話者特定', viewBox: '384 159 173 173' },
	{ id: 11, label: '関係理解', viewBox: '749 396 174 174' },
	{ id: 13, label: '話す', viewBox: '17 633 174 175' },
	{ id: 29, label: '関係適応', viewBox: '749 1125 174 186' },
];

const demos = [
	{
		title: '仲の良し悪しを判断しながら会話するロボット',
		caption:
			'人は、会話の中で意見が合う合わないを考えながら、会話します。時には話し合いの中で仲間割れが生じます。本研究は、大規模言語モデルで会話参加者の関係を推測させながら、ハイダーのバランス理論と呼ばれる三人の間の好き嫌いの関係の変化規則を利用することで、仲間になったり、仲間割れが発生する会話を実現しています。慶應ファンのペッパーくんと、早稲田ファンのペッパーちゃんと、人間の三人の会話を見てみましょう。',
		thumb: '/images/demos_2026/RelBot.png',
		video: '/images/demos_2026/RelBot.mp4',
		socialSkills,
	},
];
</script>

<template>
	<SectionWrapper id="demo" title="研究紹介" borderClass="border-slate-800">
		<div class="mb-4 text-slate-600">
			<p>今井研究室で行われている研究の一部を紹介します</p>
			<p>画像をクリックで拡大表示、または動画が再生されます</p>
		</div>

		<div class="space-y-8">
			<DemoCard
				v-for="(demo, i) in demos"
				:key="demo.title"
				:title="demo.title"
				:caption="demo.caption"
				:thumb="demo.thumb"
				:video="demo.video"
				:reverse="i % 2 === 1"
				loading="lazy"
				decoding="async"
			>
				<template #icons>
					<ul
						class="flex flex-wrap gap-2 mb-3"
						aria-label="関連するソーシャルスキル"
					>
						<li v-for="skill in demo.socialSkills" :key="skill.id">
							<svg
								:viewBox="skill.viewBox"
								width="72"
								height="72"
								class="size-16 md:size-18 overflow-hidden"
								role="img"
								:aria-label="`${skill.id} ${skill.label}`"
							>
								<title>{{ skill.id }} {{ skill.label }}</title>
								<image :href="socialSkillsImage" width="1122" height="1402" />
							</svg>
						</li>
					</ul>
				</template>
			</DemoCard>
		</div>
	</SectionWrapper>
</template>
