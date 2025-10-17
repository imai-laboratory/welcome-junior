<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import FeatureCard from '@/components/cards/FeatureCard.vue';
</script>

<template>
	<SectionWrapper id="features" title="FEATURES" borderClass="border-slate-800">
		<!-- 上段 -->
		<div class="grid md:grid-cols-3 gap-6">
			<FeatureCard title="認知モデル研究">
				AIを用いて人間の認知プロセスをモデル化し、理解を深めます。人はどのように学習し、判断し、コミュニケーションするのか。
				AIモデルを通じて認知メカニズムの本質に迫ります。
			</FeatureCard>

			<FeatureCard title="インタラクションデザイン">
				実際に人とコミュニケーションするAIエージェント、知能ロボットのデザインと実装を行います。
				ヒューマンロボットインタラクション（HRI）、ヒューマンコンピュータインタラクション（HCI）の観点から、より自然で効果的な知能システムを追求します。
			</FeatureCard>

			<FeatureCard title="認知科学アプローチ">
				心理学、神経科学、言語学などの認知科学の知見を取り入れ、人間中心のAI研究を推進します。
				実験手法と計算モデルを組み合わせた学際的アプローチが特徴です。
			</FeatureCard>
		</div>

		<!-- 下段 -->
		<div class="grid md:grid-cols-3 gap-6 mt-6">
			<FeatureCard title="研究環境">
				人型ロボット（ペッパー、Sota, コミュー,
				NAO)や、肩乗りロボットなど多くのロボットがいます。3Dプリンタ、GPUサーバー、視線・生理データ計測器なども利用して、人に関するさまざまな研究を行うことができます。
			</FeatureCard>
		</div>
	</SectionWrapper>
</template>
