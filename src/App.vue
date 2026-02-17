<template>
	<header class="absolute left-0 right-0 w-full z-50">
		<nav
			class="flex w-full max-w-512 mx-auto left-0 right-0 p-2 items-center"
		>
			<button
				@click="
					() => {
						selectorVisible = true;
						infoPaneVisible = false;
					}
				"
				class="flex-grow-0 w-8 h-8 flex items-center justify-center z-50 bg-page-overlay-lighter text-blue-400 outline-basic"
				:class="selectorVisible ? `opacity-0` : `opacity-100`"
				title="Open experiment selector"
			>
				<i class="i-lucide:square-menu inline-block w-6 h-6" />
			</button>

			<h1
				class="flex-grow mt-2 text-center font-black text-blue-400 uppercase z-50"
			>
				<img
					src="/blava-logo.svg"
					alt="Blava"
					class="inline h-6 md:h-8 -mt-3.5 mr-3 transform translate-z-0 backface-hidden"
				/>
				<span class="text-xl md:text-2xl">Experiments</span>
			</h1>

			<button
				@click="
					() => {
						infoPaneVisible = true;
						selectorVisible = false;
					}
				"
				class="flex-grow-0 w-8 h-8 flex items-center justify-center z-50 bg-page-overlay-lighter text-blue-400 outline-basic"
				title="Open info pane"
			>
				<i class="i-lucide:info inline-block w-6 h-6" />
			</button>
		</nav>

		<div class="top-10 text-center text-lg text-blue-300 z-50">
			{{ currentExperimentName }}
			<span v-show="currentExperimentCreator">
				— {{ currentExperimentCreator }}
			</span>
		</div>
	</header>
	<main>
		<section class="absolute w-screen h-screen overflow-hidden">
			<transition>
				<component :is="experimentsMap.get(currentExperimentName)" />
			</transition>
		</section>
	</main>

	<Selector
		:experiments="experimentEntries"
		:current-experiment-name="currentExperimentName"
		:visible="selectorVisible"
		@close="selectorVisible = false"
		@select="setCurrentExperiment"
	/>

	<InfoPane :visible="infoPaneVisible" @close="infoPaneVisible = false" />
</template>

<script lang="ts">
type BlavaExperimentComponentModule = {
	default: BlavaExperiment;
};
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Selector from '@/components/Selector.vue';
import InfoPane from '@/components/InfoPane.vue';
import type { BlavaExperiment } from './types';

const experiments = Object.values(
	import.meta.glob<BlavaExperimentComponentModule>(
		[
			'./components/experiments/*.vue',
			'!./components/experiments/_ExperimentTemplate.vue',
		],
		{ eager: true },
	),
);

/**
 * The experiment currently displayed
 */
const currentExperimentName = ref(experiments[0]?.default.name);

/**
 * The names of all available experiments and their creators
 */
const experimentEntries = computed(() => {
	return experiments.map(experiment => {
		return {
			name: experiment.default.name,
			creator: experiment.default.creator,
		};
	});
});

/**
 * Whether the info pane is currently active
 */
const infoPaneVisible = ref(false);

/**
 * Whether the experiment selector is currently active
 */
const selectorVisible = ref(false);

/**
 * A map of the experiments with their names as keys
 */
const experimentsMap = computed(() => {
	const result = new Map();

	experiments.map(experiment =>
		result.set(experiment.default.name, experiment.default),
	);

	return result;
});

/**
 * The name of the current experiment's creator, or null if it's Daniel or not added
 */
const currentExperimentCreator = computed(() => {
	if (!currentExperimentName.value) {
		return '';
	}

	const creator = experiments.find(experiment => {
		return experiment.default.name === currentExperimentName.value;
	})?.default.creator;

	if (!creator || creator === 'Daniel Grayvold') {
		return '';
	}

	return creator;
});

/**
 * Set the current experiment on display
 */
function setCurrentExperiment(name: string) {
	currentExperimentName.value = name;
	selectorVisible.value = false;
}
</script>

<style lang="postcss">
* {
	font-family: 'Overpass Variable';
}

button {
	@apply cursor-pointer;
}
</style>

<style scoped lang="postcss">
.v-enter-active,
.v-leave-active {
	transition: opacity 0.7s ease;
}

.v-enter-active {
	@apply delay-1000;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
