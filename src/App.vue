<script setup lang="ts">
import CoverSection from './components/sections/CoverSection.vue';
import WhatsNewSection from './components/sections/WhatsNewSection.vue';
import B3Section from './components/sections/B3Section.vue';
import ResearchSection from './components/sections/ResearchSection.vue';
import FeaturesSection from './components/sections/FeaturesSection.vue';
import DemoSection from './components/sections/DemoSection.vue';
import ScheduleSection from './components/sections/ScheduleSection.vue';
import OurLabSection from './components/sections/OurLabSection.vue';
import AccessSection from './components/sections/AccessSection.vue';
</script>

<template>
	<div class="bg-white text-slate-800 font-roboto">
		<CoverSection />
		<WhatsNewSection />
		<B3Section />
		<ResearchSection />
		<FeaturesSection />
		<DemoSection />
		<ScheduleSection />
		<OurLabSection />
		<AccessSection />
	</div>
</template>
