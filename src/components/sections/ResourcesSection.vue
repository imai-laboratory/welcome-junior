<script setup lang="ts">
import SectionWrapper from '@/components/SectionWrapper.vue';
</script>

<template>
	<SectionWrapper id="gpu" title="RESOURCES" borderClass="border-slate-800">
		<div
			class="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-2xl p-6 md:p-10"
		>
			<p class="mb-2">
				2台のGPUサーバと5台以上のタワー型マシンを保有しており、GPUの数は
				<span class="text-amber-300 font-bold">計30個以上</span> です。
			</p>
			<p class="mb-2">
				特にGPUサーバは
				<span class="text-amber-300 font-bold">計14個</span> の高性能GPU
				<span class="opacity-80 text-sm align-top">(1)</span>
				を搭載しており非常に強力な計算資源となっています。
			</p>
			<p class="mb-6">
				また、より強力な計算資源を必要とする研究に関しては、クラウドGPUサーバABCI
				<span class="opacity-80 text-sm align-top">(2)</span> の利用も可能です。
			</p>
			<p class="text-xs opacity-80">
				(1) NVIDIA Quadro RTX 8000 x6, NVIDIA Quadro RTX 6000 x8 (2) Intel Xeon
				Gold 6148 x2 (40 core), NVIDIA Tesla V100 x4
			</p>
		</div>
	</SectionWrapper>
</template>
