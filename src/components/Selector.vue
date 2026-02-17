<template>
	<Dialog
		:open="visible"
		@close="$emit('close')"
		ref="dialog"
		class="absolute top-0 left-0 h-screen w-screen lg:w-auto lg:max-w-100 px-8 z-50 bg-page-overlay-darker overflow-y-scroll backdrop-filter backdrop-blur-lg overflow-y-scroll"
	>
		<DialogPanel>
			<button
				@click="$emit('close')"
				class="block ml-auto mr-0 w-8 h-8 mr-4 my-4 z-50 !text-gray-500 outline-basic"
				title="Close experiment selector"
			>
				<i class="i-lucide:x inline-block w-8 h-8" />
			</button>

			<h2 class="text-white text-2xl mb-4 px-4">Choose experiment</h2>

			<ul>
				<li
					v-for="experiment in experiments"
					:key="experiment.name"
					class="text-xl"
					:class="{
						'bg-gradient-to-tr from-true-gray-800 to-true-gray-900 text-blue-500':
							currentExperimentName === experiment.name,
					}"
				>
					<button
						class="w-full h-full pl-4 pt-1.5 pb-1 text-left hover:bg-blue-700 focus-visible:(bg-blue-700) outline-basic"
						@click="$emit('select', experiment.name)"
					>
						{{ experiment.name }}
						<div
							v-show="experiment.creator !== 'Daniel Grayvold'"
							class="text-sm"
						>
							{{ experiment.creator }}
						</div>
					</button>
				</li>
			</ul>
		</DialogPanel>
	</Dialog>
</template>

<script setup lang="ts">
import type { BlavaExperiment } from '@/types';
import { Dialog, DialogPanel } from '@headlessui/vue';

const { experiments = [] } = defineProps<{
	currentExperimentName?: string;
	experiments: BlavaExperiment[];
	visible: boolean;
}>();

defineEmits(['close', 'select']);
</script>

<style lang="postcss" scoped>
button {
	@apply text-gray-300;
}
</style>
