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
		title: '関係認識AIの研究: 仲の良し悪しを判断しながら会話するロボット',
		caption:
			'人は、会話の中で意見が合う合わないを考えながら、会話します。時には話し合いの中で仲間割れが生じます。本研究は、大規模言語モデルで会話参加者の関係を推測させながら、ハイダーのバランス理論と呼ばれる三人の間の好き嫌いの関係の変化規則を利用することで、仲間になったり、仲間割れが発生する会話を実現しています。慶應ファンのペッパーくんと、早稲田ファンのペッパーちゃんと、人間の三人の会話を見てみましょう。',
		thumb: '/images/demos_2026/RelBot.png',
		video: '/images/demos_2026/RelBot.mp4',
		socialSkills,
	},
	{
		title: '状況認識認識AIの研究 : 周囲の雰囲気を察知して案内するロボット',
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
		title: '注意認識AIの研究: 相手の興味を理解するロボット技術',
		caption:
			'人の視線を理解することは、ロボットが人間に寄り添ってコミュニケーションすることの基礎になります。単純に人の目線を認識するだけでなく、どの物体に人が注目しているかを認識することで、ロボットはより良い行動が行えるようになります。',
		thumb: '/images/demos_2026/gaze-3.jpg',
		video: '/images/demos_2026/gaze-3.mp4',
		socialSkills: [
			{ id: 1, label: '見る', viewBox: '17 159 174 173' },
			{ id: 4, label: '視線理解', viewBox: '566 159 173 173' },
			{ id: 9, label: '心の理解', viewBox: '384 396 173 174' },
			{ id: 10, label: '注意理解', viewBox: '566 396 173 174' },
			{ id: 14, label: '視線を使う', viewBox: '201 633 173 175' },
		],
	},
	{
		title: '社会的行動生成AIの研究: 人に寄り添って一緒に見てくれるロボット',
		caption:
			'人は誰かと同じものを見るとき、相手と対象物の両方が見やすい位置に自然と移動します。本研究では、人の視線から見ている対象物を推定し、ロボットが自ら適切な立ち位置と身体の向きを決めるシステムを開発しました。ロボットに搭載した360度カメラで周囲の人を捉え、顔の向きや視線から注目している対象物を推定します。その情報をもとに、人と対象物の両方が見やすくなる位置へ移動し、状況に応じて身体の向きを変えます。人がロボットを見たときには人の方を向き、対象物を見ているときには同じ対象物へ視線を向けます。これにより、人とロボットが自然に同じものを眺めながら交流できることを目指しています。',
		thumb: '/images/demos_2026/gaze-companion.png',
		socialSkills: [
			{ id: 4, label: '視線理解', viewBox: '566 159 173 173' },
			{ id: 10, label: '注意理解', viewBox: '566 396 173 174' },
			{ id: 14, label: '視線を使う', viewBox: '201 633 173 175' },
			{ id: 19, label: '立ち位置', viewBox: '17 872 174 189' },
		],
	},
	{
		title: 'AIの記憶研究：意外な一面以外は忘れるロボット',
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
	{
		title: '映像の状況に応じた人物動作の生成と合成',
		caption:
			'人は映像に登場する人物の動きから、その人が状況をどう捉え、何をしようとしているのかを読み取ります。本研究では、見る人に伝えたい人物の考えや意図を指定し、それに合った身体動作を生成して、既存の映像に合成する手法を検討しています。例えば同じ台風の映像でも、「危険を感じて身を守ろうとしている」「強風の中にいることを楽しんでいる」といった異なる受け取り方を、人物の動きによって表現します。指定した内容を姿勢や腕の動き、足運びなどの具体的な動作に変換し、生成した人物を映像の中に配置します。その映像を見た人が、狙った考えや意図を読み取れるか、また人物の動きによって映像全体の受け取り方がどう変わるかを検証します。これにより、伝えたい内容に合わせて人物の振る舞いを作り、映像表現を編集できる仕組みの実現を目指しています。',
		thumb: '/images/demos_2026/storm_motion_composite.jpg',
		video: '/images/demos_2026/storm_motion_composite.mp4',
		socialSkills: [
			{ id: 4, label: '視線理解', viewBox: '566 159 173 173' },
			{ id: 6, label: '身体動作理解', viewBox: '934 159 173 173' },
			{ id: 7, label: '感情理解', viewBox: '17 396 174 174' },
			{ id: 8, label: '意図理解', viewBox: '201 396 173 174' },
			{ id: 9, label: '心の理解', viewBox: '384 396 173 174' },
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
