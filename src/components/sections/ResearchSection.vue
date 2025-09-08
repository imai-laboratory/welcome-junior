<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
import ColorChip from '@/components/chips/ColorChip.vue';
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

			<p class="leading-relaxed text-slate-700">
				　あなたが欲しいものや知りたいことをインターネットで検索する時代から、あなたの好みに応じてAIシステムが欲しいものを積極的に見つけてきてくれる時代になってきています。さらに進むと、見つけるだけでなく、あなたの代わりにそれ購入したり、予約してくれるようになるでしょう。さらに進化すると、(あなたの知らないうちに）あなたに成り代わって友達を作ってきたり、飲み会の約束をしてきたりするようになるかもしれません。勝手に、そんなことされたら困ると多くの人は思ったことでしょう。このような極端な場面を考えることで、未来のAIシステムのあり方を考え出すことができます。<br />
				　AIシステムが勝手に友達を作った理由を人に説明できるようなると良いかもしれません。もしくは、AIシステムがあなたの好みを把握してくれていると思えてくるぐらい、日常的にあなたと生活を共にしてコミュニケーションすることが重要かもしれません。そもそも、日常的にAIとコミュニケーションするとはどういうことなのでしょうか?
				どらえもんは、便利そうだけども、ほんとうにドラえもんがあなたの家にいたら、毎日なにをしますか？<br />
				　未来の人に寄り添うパートナーAIの姿を想豫しながら構築してくことで、人間がコミュニケーションする際に重要な感情や、心（欲求や信念）を考慮した人工知能を作っていきます。今現在話題になっているAI技術ではなく、ずっと未来のAIに必要な手法を研究開発することで、まだ世の中に存在していない新しいシステム・サービスを生み出していくことのできる研究開発能力をみんなに持ってもらうことを目指します。
			</p>
		</div>
	</SectionWrapper>
</template>
