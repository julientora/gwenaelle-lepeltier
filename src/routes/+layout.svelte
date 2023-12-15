<script>
	import "../app.css";
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Nav from '$lib/components/Nav.svelte';
	// import Settings from '$lib/components/Settings.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import { PrismicRichText, PrismicImage } from "@prismicio/svelte";

	let currentYear = new Date().getFullYear();
  	let siteName = "Gwenaelle Lepeltier";
	let open = false;
	let isColorful = false;

	$: { isColorful = $page.data.page.data.color;}
	
	export let data;

</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
	<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
	<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
	<meta name="og:image" content={$page.data.meta_image.url} />
	<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<header class="sticky top-0 z-10 grid w-full px-5 py-4 bg-white md:mx-auto max-2xl:border-b max-w-screen-2xl md:flex md:items-center md:justify-between md:px-20">
		<a href="/">
			<img src="/svg/logo-{data.page.data.color === true ? 'v2' : 'v1'}.svg" class="w-48 md:w-60 lg:w-72" alt="logo-header">
		</a>
		<!-- Display burger-button on mobile -->
			<Hamburger bind:open />
		<!-- Display on desktop only -->
		<nav class="desktop-nav">
			<Nav links={data.nav.data.links} />
		</nav>
		<!-- Display navigation on mobile on click -->
		{#if open}
		<Nav links={data.nav.data.links} />
		{/if}
  </header>
	
<main class="mx-5 md:mx-auto max-w-screen-2xl" on:click={() => open = false}>
	<slot />
</main>
<PrismicPreview {repositoryName} />

<section>
	<footer class="flex flex-col items-center px-5 py-5 mt-20 shadow-inner md:mx-auto md:px-24">
			<a href="/" class="mt-10 mb-3">
				<img src="/svg/logo-{data.page.data.color === true ? 'v2' : 'v1'}.svg" class="w-48 md:w-60 lg:w-72" alt="logo-header">
			</a>

		<div class="flex justify-between w-full md:gap-6 md:justify-center">
			<div class="footer-nav">
				<Nav links={data.nav.data.links} />
			</div>
        <div class="mb-8 text-right infos-contact">
	        <a href="https://www.google.com/maps/search/?api=1&query={data.settings.data.googlemap}" target="_blank" class="mb-1"><PrismicRichText field={data.settings.data.adress} /></a>
			<a href="tel:{data.settings.data.telephone}" class="block telephone hover:underline">{data.settings.data.telephone}</a>
        </div>
    </div>
	<div class="text-[.55rem] md:text-xs footer__copyright">
		©{currentYear} {siteName} | tous droits réservés | <a href="/mentions-legales" class="text-[.55rem] md:text-xs hover:underline">mentions légales</a>
	  </div>
</footer>
</section>

<style>
	/* Burger button */
	:global(.hamburger) {
		position: fixed;
		top: 0;
		right: .9rem;
		z-index: 100;
	}

	@media (min-width: 768px) {
		:global(.hamburger) {
			visibility: hidden;
		}
	}
	
	:global(.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after) {
		width: 40px !important;
		height: 3px !important;
	}

	:global(.hamburger-inner::before) { background-color: #757FCA !important; }
	:global(.hamburger-inner) { background-color: #F47553 !important; }
	:global(.hamburger-inner::after) { background-color: #CCC700 !important; }

	/* media query for mobile only */
	@media (max-width: 768px) {
		.desktop-nav {
			display: none;
		}
	}
	
</style>