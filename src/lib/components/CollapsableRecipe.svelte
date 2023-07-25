<script>
	// @ts-nocheck
	import { CollapsibleCard } from 'svelte-collapsible';
	let isOpen = false;
	let recipe;
</script>

<div class="_card-collapse rounded-xl bg-black-light ">
	<CollapsibleCard bind:open={isOpen}>
		<div slot="header" class="flex cursor-pointer items-center justify-between px-6 py-4 ">
			<span class="_title text-2xl font-bold italic text-white">Spaghetti</span
			>

			<div class="flex items-center gap-3">
				<div class="_ingredient-counter flex rounded-full bg-black py-1 px-4">
					<span class="my-auto text-sm text-grey-light">2/13</span>
				</div>
				<div class="{isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-150">
					<svg
						width="18"
						height="12"
						viewBox="0 0 18 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.65549 10.9212L8.84368 10.458L8.65549 10.9212C8.7906 10.9761 8.93128 11 9.07139 11C9.2115 11 9.35219 10.9761 9.4873 10.9212C9.63614 10.8607 9.76017 10.7654 9.8624 10.6616L17.1285 3.28197C17.3792 3.02737 17.5 2.70554 17.5 2.35299C17.5 1.98746 17.3634 1.66257 17.1078 1.40299L16.7516 1.75379L17.1078 1.40299C16.8676 1.15901 16.5648 1.02412 16.2243 1.00251C15.8356 0.977828 15.4996 1.13531 15.236 1.40299L9.07139 7.66387L2.90679 1.40299L2.55051 1.7538L2.90679 1.40299C2.65104 1.14326 2.32757 1.0015 1.96052 1.0015C1.59347 1.0015 1.27 1.14326 1.01425 1.40299L1.37054 1.7538L1.01425 1.40299C0.760612 1.66059 0.642822 1.9875 0.642822 2.34248C0.642822 2.69747 0.760612 3.02437 1.01425 3.28197L8.28039 10.6616C8.38262 10.7654 8.50665 10.8607 8.65549 10.9212Z"
							stroke="white"
						/>
					</svg>
				</div>
			</div>
		</div>

		<ul slot="body" class="flex flex-col gap-4 px-6 py-4">
			<li>
				<label class="main py-2">
					<span class="text-base">1 handful curry leaves</span>
					<input type="checkbox" />
					<span class="checkbox" />
				</label>
			</li>
			<li>
				<label class="main py-2">
					<span class="text-base">1 handful curry leaves</span>
					<input type="checkbox" />
					<span class="checkbox" />
				</label>
			</li>
			<li>
				<label class="main py-2">
					<span class="text-base">1 handful curry leaves</span>
					<input type="checkbox" />
					<span class="checkbox" />
				</label>
			</li>
		</ul>
	</CollapsibleCard>
</div>
