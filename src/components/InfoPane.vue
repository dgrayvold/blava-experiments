<template>
	<Dialog
		:open="visible"
		@close="$emit('close')"
		ref="dialog"
		class="absolute top-0 right-0 h-screen w-screen lg:w-auto lg:max-w-100 px-8 z-50 bg-page-overlay-darker overflow-y-scroll backdrop-filter backdrop-blur-lg overflow-y-scroll"
		:class="visible ? `right-0` : `right-full`"
	>
		<DialogPanel>
			<button
				@click="$emit('close')"
				class="block ml-auto mr-0 w-8 h-8 mr-4 my-4 z-50 !text-gray-500"
				title="Close info pane"
			>
				<i class="i-lucide:x inline-block w-8 h-8" />
			</button>

			<h2 class="text-2xl text-gray-100 mb-4">Blobby experiments</h2>

			<p class="mb-4 text-gray-100">
				<a
					href="https://blava.greatnews.life"
					title="Check out the Blava docs"
					class="text-blue-400"
					target="_blank"
				>
					Blava
				</a>
				is a performant artful blob generator created by
				<a
					href="https://dgrayvold.com"
					title="Check out Daniel's work"
					class="text-blue-400"
					target="_blank"
				>
					Daniel Grayvold
				</a>
				and
				<a
					href="https://t-o-n-y.netlify.app"
					title="Check out Tony's work"
					class="text-blue-400"
					target="_blank"
				>
					Tony Ketcham
				</a>
				at
				<a
					href="https://greatnews.life"
					title="Check out GreatNews.Life"
					class="text-blue-400"
					target="_blank"
					>GreatNews.Life</a
				>. This page showcases some interesting uses in artistic
				settings. Unless otherwise noted, all the experiments were
				created by Daniel. Feel free to use or expand upon them in your
				own projects!
			</p>

			<p class="mb-4 text-gray-100">
				<a
					href="https://github.com/dgrayvold/blava-experiments"
					title="Submit your own Blava experiments on the GitHub repo"
					class="text-blue-400"
					target="_blank"
				>
					Want to contribute your own experiments?
				</a>
			</p>
		</DialogPanel>
	</Dialog>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue';

const props = defineProps({
	/**
	 * Whether the pane is active
	 */
	visible: {
		type: Boolean,
		default: false,
	},
});

defineEmits(['close']);
</script>
