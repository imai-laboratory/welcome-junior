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
	{
		title: '周囲の雰囲気を察知して案内するロボット',
		caption:
			'人は話すときに自然と身振りが出て、場所を教えるときには指を差します。本研究では、人型ロボットPepperが話す内容に合わせて身体を動かし、場所をたずねられるとその方角を指差して答える案内ロボットを実現しました。頭に載せた360度カメラで周りをすべて見ているので、どの位置から話しかけても、ロボットはその人の正面を向いて会話を始めます。聞いているあいだは、相手の腕の動きに合わせて身体を動かします。車輪がどれだけ回ったかから向きを求める方法では、回るほど誤差がたまります。このロボットは見えている景色から自分の向きを判断するので、何度回ったあとでも、指す方角はずれません。',
		thumb: '/images/demos_2026/gesture.png',
		video: '/images/demos_2026/gesture.mov',
		socialSkills: [
			{ id: 15, label: '身体表現', viewBox: '384 633 173 175' },
			{ id: 18, label: '相手に合わせる', viewBox: '934 633 173 175' },
			{ id: 6, label: '身体動作理解', viewBox: '934 159 173 173' },
			socialSkills[0],
		],
	},
	{
		title: '相手の興味を理解するロボット技術',
		caption:
			'人の視線を理解することは、ロボットが人間に寄り添ってコミュニケーションすることの基礎になります。単純に人の目線を認識するだけでなく、どの物体に人が注目しているかを認識することで、ロボットはより良い行動が行えるようになります。',
		thumb: '/images/demos_2026/gaze360.png',
		video: '/images/demos_2026/gaze360.mov',
		socialSkills: [
			{ id: 1, label: '見る', viewBox: '17 159 174 173' },
			{ id: 4, label: '視線理解', viewBox: '566 159 173 173' },
			{ id: 9, label: '心の理解', viewBox: '384 396 173 174' },
			{ id: 10, label: '注意理解', viewBox: '566 396 173 174' },
			{ id: 14, label: '視線を使う', viewBox: '201 633 173 175' },
		],
	},
	{
		title: '人に寄り添って一緒に見てくれるロボット',
		caption:
			'人は誰かと同じものを見るとき、相手と対象物の両方が見やすい位置に自然と移動します。本研究では、人の視線から見ている対象物を推定し、ロボットが自ら適切な立ち位置と身体の向きを決めるシステムを開発しました。ロボットに搭載した360度カメラで周囲の人を捉え、顔の向きや視線から注目している対象物を推定します。その情報をもとに、人と対象物の両方が見やすくなる位置へ移動し、状況に応じて身体の向きを変えます。人がロボットを見たときには人の方を向き、対象物を見ているときには同じ対象物へ視線を向けます。これにより、人とロボットが自然に同じものを眺めながら交流できることを目指しています。',
		thumb: '/images/demos_2026/gaze360.png',
		video: '/images/demos_2026/gaze360.mov',
		socialSkills: [
			{ id: 4, label: '視線理解', viewBox: '566 159 173 173' },
			{ id: 10, label: '注意理解', viewBox: '566 396 173 174' },
			{ id: 14, label: '視線を使う', viewBox: '201 633 173 175' },
			{ id: 19, label: '立ち位置', viewBox: '17 872 174 189' },
		],
	},
	{
		title: '意外な一面以外は忘れるロボット',
		caption:
			'人は初めて会った相手にたぶんこんな人かなという印象を持ち、その予想が外れたときのことをよく覚えています。本研究では、ロボットが相手について予想（スキーマ）を持ち、会話の中で予想とのズレが大きかった出来事を選んで記憶する仕組みをつくっています。予想どおりの話は忘れ、意外だった一面を覚えておきます。動画では、メガネをかけた大人しそうな人が実はラクロスという激しいスポーツをしているという意外な一面を強く記憶し、それ以外は忘れている様子を紹介しています。何を覚え、何を忘れるかで、ロボットとの関係がどう変わるのかを調べています。',
		thumb: '/images/demos_2026/schemagap.png',
		video: '/images/demos_2026/schemagap.mp4',
		socialSkills: [
			{ id: 1, label: '見る', viewBox: '17 159 174 173' },
			{ id: 9, label: '予想する', viewBox: '384 396 173 174' },
			{ id: 25, label: '個人を覚える', viewBox: '17 1125 174 186' },
			{ id: 30, label: '関係を維持する', viewBox: '934 1125 173 186' },
		],
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
