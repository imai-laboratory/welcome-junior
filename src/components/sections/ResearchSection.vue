<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import SectionWrapper from '@/components/SectionWrapper.vue';
import ColorChip from '@/components/chips/ColorChip.vue';
import { useResolveAssetPath } from '@/utils/resolveAssetPath';

const socialIntelligenceGoalsImage = useResolveAssetPath(
	'images/social-intelligence-goals.png',
);

const researchText = ref<HTMLElement | null>(null);
const researchImageContainer = ref<HTMLElement | null>(null);
const imageSize = ref<{ width: string; height: string }>();
let resizeObserver: ResizeObserver | undefined;

onMounted(() => {
	const updateImageSize = () => {
		if (!researchText.value || !researchImageContainer.value) return;
		const text = researchText.value.getBoundingClientRect();
		const container = researchImageContainer.value.getBoundingClientRect();
		// Stacked layouts use the available width; side-by-side layouts also fit the text height.
		const width =
			container.top >= text.bottom
				? container.width
				: Math.min(container.width, (text.height * 1122) / 1402);
		imageSize.value = {
			width: `${width}px`,
			height: `${(width * 1402) / 1122}px`,
		};
	};
	resizeObserver = new ResizeObserver(updateImageSize);
	if (researchText.value) resizeObserver.observe(researchText.value);
	if (researchImageContainer.value)
		resizeObserver.observe(researchImageContainer.value);
	updateImageSize();
});

onBeforeUnmount(() => resizeObserver?.disconnect());
</script>

<template>
	<SectionWrapper id="research" title="RESEARCH" borderClass="border-slate-800">
		<div
			class="rounded-2xl ring-1 ring-slate-200 shadow-sm p-6 md:p-8 bg-white"
		>
			<h3 class="text-xl md:text-2xl font-semibold mb-3">
				人に寄り添うパートナーAIの実現を目指して
			</h3>

			<p class="text-sm md:text-base mb-4 flex flex-wrap gap-2 items-center">
				<span class="text-slate-500">キーワード：</span>
				<ColorChip label="感情" bgClass="bg-sky-100" textClass="text-sky-700" />
				<ColorChip
					label="心の理論（意図・欲求）"
					bgClass="bg-cyan-100"
					textClass="text-cyan-700"
				/>
				<ColorChip
					label="認知科学とAI"
					bgClass="bg-emerald-100"
					textClass="text-emerald-700"
				/>
				<ColorChip
					label="ソーシャルロボット"
					bgClass="bg-amber-100"
					textClass="text-amber-700"
				/>
			</p>

			<div class="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
				<p ref="researchText" class="self-start leading-relaxed text-slate-700">
					人と共に社会の一員として活動できるAIエージェントやロボットには、人が暗黙的に行っているソーシャルスキル(社会の中で円滑に行動できる能力）が必要です。人間であっても、発達障害傾向があり、ソーシャルな行動が不得意な人は社会の中で生きづらさを感じてしまいます。場合によってはトレーニングが必要になります。大規模言語モデルをはじめとする生成AIにより、柔軟に文脈・状況を読み取り、知識を活用できるようになったAIエージェントやロボットが次に必要となる機能は、ソーシャルスキルの獲得です。闇雲にマルチモーダルな学習データを集めるだけでは、ソーシャルスキルを扱えるようにはなりません。今井研究室では、30個のソーシャルスキルを、ソーシャル・インテリジェンス・ゴールとして用意し、人と円滑にコミュニケーションできる次世代のAIシステムの実現を目指します(右図)。シミュレーションをベースとしたモデル開発から、人とインタラクションのできる実機システムの研究開発まで行います。
				</p>
				<div ref="researchImageContainer" class="relative min-w-0">
					<img
						:src="socialIntelligenceGoalsImage"
						alt="Social Intelligence Goals：社会的知覚・社会的理解・社会的表現と対話・社会的協調・社会的関係の5分野に分類した30のソーシャルスキル"
						width="1122"
						height="1402"
						class="mx-auto w-full h-auto lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2"
						:style="imageSize"
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>
		</div>
	</SectionWrapper>
</template>
