<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import FeatureCard from '@/components/cards/FeatureCard.vue';
</script>

<template>
	<SectionWrapper id="features" title="FEATURES" borderClass="border-slate-800">
		<!-- 上段 -->
		<div class="grid md:grid-cols-3 gap-6">
			<FeatureCard title="STATE-OF-THE-ART">
				今井研究室ではインタラクティブAIの研究をしています。研究テーマは先生やグループリーダーと相談しながら決めます。近年Googleが盛んに研究を行なっている
				<a
					class="text-sky-600 hover:underline"
					href="https://speakerdeck.com/takuseno/survey-of-deep-reinforcement-learning"
					target="_blank"
					rel="noreferrer"
					>深層強化学習</a
				>
				や人の脳や認知モデルに基づいた深層学習の研究も行なっています。また、
				<a
					class="text-sky-600 hover:underline"
					href="https://wbawakate.jp"
					target="_blank"
					rel="noreferrer"
					>全脳アーキテクチャ若手の会</a
				>
				と密接な関係にあります。
			</FeatureCard>

			<FeatureCard title="CONFERENCE">
				研究の成果は毎年国際会議で発表しており、CHI、HRI、HAI
				などに採択されています。学術論文誌にも適宜投稿し、成果発表を行なっています。
			</FeatureCard>

			<FeatureCard title="ROBOT">
				ATRで開発されたヒューマノイド「ロボビー」、小型版「ロボビーMR2」など多くのロボットを保有。学生が自由に研究・実験に使用できます。
			</FeatureCard>
		</div>

		<!-- 下段 -->
		<div class="grid md:grid-cols-3 gap-6 mt-6">
			<FeatureCard title="FACILITY">
				高精度3Dプリンタ、ロボット、必要に応じたPC支給。深層学習需要に応えるため計算資源を増強しています。
			</FeatureCard>

			<FeatureCard title="COLLABORATION">
				国内外の研究機関と共同研究・研究費提供の連携。JST CREST、NEDO
				などのプロジェクトに参加しています。
			</FeatureCard>

			<FeatureCard title="IPA">
				2002, 2006, 2009, 2011,
				2013年度に未踏クリエータを輩出。若手育成プロジェクトに継続的に挑戦しています。
			</FeatureCard>
		</div>
	</SectionWrapper>
</template>
