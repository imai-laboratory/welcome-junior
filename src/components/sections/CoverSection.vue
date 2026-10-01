<script setup lang="ts">
import { useResolveAssetPath } from '@/utils/resolveAssetPath';

const coverImage = useResolveAssetPath('images/member2025.jpg');
</script>

<template>
	<section class="relative">
		<div class="relative h-[60vh] md:h-[80vh] overflow-hidden">
			<img :src="coverImage" alt="cover" class="w-full h-full object-cover" />
			<div class="absolute inset-0 bg-black/40"></div>
			<div class="absolute inset-0 grid justify-center items-end">
				<div class="px-4 text-center tracking-widest text-white pb-12 md:pb-40">
					<h1>
						<span class="block text-6xl md:text-8xl font-extrabold"
							>Social AI</span
						>
						<span class="mt-2 block text-3xl md:text-5xl">Laboratory</span>
					</h1>
				</div>
			</div>
		</div>
	</section>
</template>
