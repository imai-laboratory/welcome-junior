<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import DemoCard from '@/components/cards/DemoCard.vue';

const demos = [
	{
		title: '少ないサンプルで商品を推薦するロボットInteractive-SmartClerk',
		caption:
			'機械学習でモデルをつくるときには大量のサンプルが必要です。ある人の好みのモデルをファインチューニングするにしても、それなりの好みのサンプルが必要です。一方で、店の店員は2,3好みを聞くことで商品を推薦できたりします。この研究では、人が相手の好みをどのように推定するのか、認知科学実験をおこない明らかになった数理モデルを利用しています。4着のドレスの好みを聞くだけで、好みのドレスを推薦することができます。',
		thumb: '/images/demos_2024/Interactive-SmartClerk.png',
		video: '/images/demos_2024/Interactive-SmartClerk.mp4',
	},
	{
		title: '仲の良し悪しを判断しながら会話するロボット',
		caption:
			'人は、会話の中で意見が合う合わないを考えながら、会話します。時には話し合いの中で仲間割れが生じます。本研究は、大規模言語モデルで会話参加者の関係を推測させながら、ハイダーのバランス理論と呼ばれる三人の間の好き嫌いの関係の変化規則を利用することで、仲間になったり、仲間割れが発生する会話を実現しています。慶應ファンのペッパーくんと、早稲田ファンのペッパーちゃんと、人間の三人の会話を見てみましょう。',
		thumb: '/images/demos_2024/RelBot.png',
		video: '/images/demos_2024/RelBot.mp4',
	},
	{
		title: '主観表現によるイラスト生成',
		caption:
			'絵が上手じゃない人が、上手な人に絵を描いてもらいたいときには、言葉で描いて欲しい絵を伝えないとなりません。犬とか猫とか描いて欲しい物の情報、それらの位置とか、色とか、欲しい絵の特徴は客観的なものもあります。さらに客観的特徴に加えて「明るい印象で」とか、「ダイナミックな構図で」といった主観的な表現も付け加えて欲しい絵を伝えることもあります。しかし、主観的な表現は、いろいろな解釈が可能なので、一度で欲しい絵にならなかったりします。本研究では、画像生成AIが生成した絵の印象と、人が頭の中にある絵のイメージをなん度も擦り合わせて、欲しい絵を生成する仕組みを作りました。',
		thumb: '/images/demos_2024/Matsuoka2024.png',
		imgOnly: true,
	},
	{
		title: '対話を通じた旅行体験記生成',
		caption:
			'ロボットとの対話を通じて旅行体験記を生成するシステムの実現を目指しています。画像キャプショニングが登場し、画像に関する説明文が得られるようになっていますが、その写真をとった時のエピソードや、体験したことなどの思い出は、画像情報から得られません。旅行体験記を作るためには、本人から情報を聞き出す必要があります。本研究では、旅行で撮った写真に対して人と会話するロボットを実現しました。そして、ロボットとの会話を通して得られた情報をもとに、思い出話の詰まった旅行体験記を生成することができます。',
		thumb: '/images/demos_2024/TRAVOT.png',
		video: '/images/demos_2024/TRAVOT.mp4',
	},
		{
		title: '意図を可視化した赤ちゃんロボットBabbleMind',
		caption:
			'癒しロボットなどの非言語ロボットとのインタラクションでは、ロボットの声や動きによって意図を伝えようとしていますが、皆がロボットの意図を汲み取ることができるわけではありません。そこで本研究では、赤ちゃんの思っていること（inner voice）を可視化し、ユーザがinner voiceを見ながらインタラクションできるロボットを実現しました。このロボットにより、非言語的なインタラクションが苦手な人でもロボットの意図を理解しやすくなり、共感や没入感をより深く感じられるようになります。',
		thumb: '/images/demos_2024/BubbleMind.png',
		video: '/images/demos_2024/BubbleMind.mp4',
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
				:img-only="demo.imgOnly"
				:reverse="i % 2 === 1"
				loading="lazy"
				decoding="async"
			/>
		</div>
	</SectionWrapper>
</template>
