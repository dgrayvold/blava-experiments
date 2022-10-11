<template>
	<header class="absolute left-0 right-0 w-full z-50">
		<nav class="flex w-full h-10 max-w-512 mx-auto left-0 right-0">
			<button
				@click="
					() => {
						selectorVisible = true;
						infoPaneVisible = false;
					}
				"
				class="flex-grow-0 w-8 h-8 z-50 bg-page-overlay-lighter text-blue-400"
				:class="selectorVisible ? `opacity-0` : `opacity-100`"
				title="Open experiment selector"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
					/>
				</svg>
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
				class="flex-grow-0 w-8 h-8 pt-0.5 z-50 bg-page-overlay-lighter text-blue-400 text-2xl"
				title="Open info pane"
			>
				?
			</button>
		</nav>

		<div class="top-10 text-center text-lg text-blue-300 z-50">
			{{ currentExperiment }}
			<span v-show="currentExperimentCreator">
				— {{ currentExperimentCreator }}
			</span>
		</div>
	</header>
	<main>
		<section class="absolute w-screen h-screen overflow-hidden">
			<transition>
				<component :is="experimentsMap.get(currentExperiment)" />
			</transition>
		</section>
	</main>

	<Selector
		:experiments="experimentsData"
		:current-experiment="currentExperiment"
		:visible="selectorVisible"
		@close="selectorVisible = false"
		@select="setCurrentExperiment"
	/>

	<InfoPane :visible="infoPaneVisible" @close="infoPaneVisible = false" />
</template>

<script>
const experiments = Object.values(
	import.meta.globEager([
		'./components/experiments/*.vue',
		'!./components/experiments/_ExperimentTemplate.vue',
	]),
);
import Selector from '@/components/Selector.vue';
import InfoPane from '@/components/InfoPane.vue';

export default {
	components: {
		...experiments,
		Selector,
		InfoPane,
	},

	data() {
		return {
			/**
			 * The experiment currently displayed
			 */
			currentExperiment: experiments[0].default.name,

			/**
			 * The names of all available experiments and their creators
			 */
			experimentsData: experiments.map(experiment => {
				return {
					name: experiment.default.name,
					creator:
						experiment.default.creator == 'Daniel Grayvold'
							? null
							: experiment.default.creator,
				};
			}),

			/**
			 * Whether the info pane is currently active
			 */
			infoPaneVisible: false,

			/**
			 * Whether the experiment selector is currently active
			 */
			selectorVisible: false,
		};
	},

	computed: {
		/**
		 * A map of the experiments with their names as keys
		 */
		experimentsMap() {
			const result = new Map();

			experiments.map(experiment =>
				result.set(experiment.default.name, experiment.default),
			);

			return result;
		},

		/**
		 * The name of the current experiment's creator, or null if it's Daniel or not added
		 */
		currentExperimentCreator() {
			const creator = experiments.find(
				function (experiment) {
					return experiment.default.name == this.currentExperiment;
				}.bind(this),
			).default.creator;

			if (creator === undefined || creator == 'Daniel Grayvold') {
				return null;
			}

			return creator;
		},
	},

	methods: {
		/**
		 * Set the current experiment on display
		 *
		 * @param {String} experiment The name of the experiment to display
		 */
		setCurrentExperiment(experiment) {
			this.currentExperiment = experiment;
			this.selectorVisible = false;
		},
	},
};
</script>

<style>
* {
	font-family: 'OverpassVariable';
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
