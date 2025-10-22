<script setup lang="ts">
import { useResolveAssetPath } from '@/utils/resolveAssetPath';

const coverImage = useResolveAssetPath('images/member2024.jpg');
</script>

<template>
	<section class="relative">
		<div class="relative h-[60vh] md:h-[80vh] overflow-hidden">
			<img :src="coverImage" alt="cover" class="w-full h-full object-cover" />
			<div class="absolute inset-0 bg-black/40"></div>
			<div class="absolute inset-0 grid justify-center items-end">
				<div class="text-center tracking-widest text-white pb-40">
					<p class="text-sm md:text-base">INTERACTIVE</p>
					<p class="text-4xl md:text-6xl font-extrabold">
						<span class="font-black">A</span>RTIFICIAL
					</p>
					<p class="text-4xl md:text-6xl font-extrabold">
						<span class="font-black">I</span>NTELLIGENCE
					</p>
					<p class="text-lg md:text-2xl">LABORATORY</p>
				</div>
			</div>
		</div>
	</section>
</template>
