<template>
	<Dialog
		:open="visible"
		ref="dialog"
		class="absolute top-0 left-0 h-screen w-screen lg:w-auto min-w-64 z-50 bg-page-overlay-darker overflow-y-scroll backdrop-filter backdrop-blur-lg"
	>
		<DialogPanel>
			<button
				@click="$emit('close')"
				class="block ml-auto mr-0 w-8 h-8 mr-4 my-4 z-50 !text-gray-500"
				title="Close experiment selector"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 16 16"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="m7.116 8l-4.558 4.558l.884.884L8 8.884l4.558 4.558l.884-.884L8.884 8l4.558-4.558l-.884-.884L8 7.116L3.442 2.558l-.884.884L7.116 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<h2 class="text-white text-2xl mb-4 px-4">Choose experiment</h2>

			<ul>
				<li
					v-for="experiment in experiments"
					:key="experiment.name"
					class="text-xl"
					:class="{
						'bg-gradient-to-tr from-true-gray-800 to-true-gray-900 text-blue-500':
							currentExperiment == experiment.name,
					}"
				>
					<button
						class="w-full h-full pl-4 pt-1.5 pb-1 text-left hover:bg-blue-700 focus-visible:bg-blue-700"
						@click="$emit('select', experiment.name)"
					>
						{{ experiment.name }}
						<div v-show="experiment.creator" class="text-sm">
							{{ experiment.creator }}
						</div>
					</button>
				</li>
			</ul>
		</DialogPanel>
	</Dialog>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue';

defineProps({
	/**
	 * The active experiment on display
	 */
	currentExperiment: {
		type: String,
		default: null,
	},

	/**
	 * The full list of experiments to choose from
	 */
	experiments: {
		type: Array,
		default: () => [],
	},

	/**
	 * Whether the selector is active
	 */
	visible: {
		type: Boolean,
		default: false,
	},
});

defineEmits(['close', 'select']);
</script>

<style lang="postcss" scoped>
button {
	@apply text-gray-300;
}
</style>
