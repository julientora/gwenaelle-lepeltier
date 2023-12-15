<script>
	import { PrismicLink } from '@prismicio/svelte';
	import { fly } from 'svelte/transition';

	/** @type {import('../../prismicio-types').NavDocumentData['links']} */


	export let links;
</script>

<nav class="header-nav">
	<ul class="flex justify-end gap-8"  transition:fly={{ y: -15, delay: 250 }}>
		{#each links as link}
			<li>
				<PrismicLink field={link.link}>{link.label}</PrismicLink>
			</li>
		{/each}
	</ul> 
</nav>

<style>
	li :global(a:hover) {
        text-decoration: none;
	}

	li :global(a::after) {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    transition: top .2s ease-in, bottom .2s ease-in;
    border-bottom: 1.5px solid black;
    }

    li :global(a:hover::after) {
    width: 100%;
    bottom: -6px;
	top: -5px;
    }

	/* Make the same border-bottom when we are on the current page */
	/* li :global(a.active::after) {
		width: 100%;
		bottom: -6px;
		top: -5px;
	} */


	/* MOBILE Header navigation */
	@media (max-width: 600px) {
		.header-nav ul {
			padding-block: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		li :global(a.active) {
		/* Add your styles here */
		color: red; /* Example: change the color to red */
		font-weight: bold; /* Example: make the text bold */
		}

		li :global(a.active::after) {
			width: 100%;
			bottom: -6px;
			top: -5px;
		}

		/* li :global(a::after) {
		content: "";
		position: absolute;
		left: 50%;
  		transform: translateX(-50%);
		bottom: -5px;
		width: 4rem;
		transition: top .2s ease-in, bottom .2s ease-in;
		border-bottom: 1.5px solid black;
		} */
	}

	/* styling specific for footer navigation */
	:global(.footer-nav ul) {
		flex-direction: column;
		gap: .1rem;
		padding-block: 0 !important;
		align-items: flex-start !important;
	}
	:global(.footer-nav a) { display: inline-block; }
	:global(.footer-nav a::first-letter) { text-transform: uppercase; }
	:global(.footer-nav li a::after) { content: none; }
	:global(.footer-nav li a:hover) { text-decoration: underline; }
</style>