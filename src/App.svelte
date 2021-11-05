<script>
	import Activities from "./components/Activities.svelte";
	import Contacts from "./components/Contacts.svelte";
	import Likes from "./components/Likes.svelte";
	import Works from "./components/Works.svelte";
</script>

<svelte:head>
	<title>Arata</title>
	<meta
		name="google-site-verification"
		content="Zvni4vmMa8E2Jt6X5tjAXXB-F02ZelcJqdupaEKRZR4"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<h1>Arata</h1>
</header>

<main>
	<Contacts />
	<Likes />
	<Activities />
	<Works />
</main>

<footer>
	<small>© 2021 arata.</small>
</footer>

<style>
	:global(body) {
		font-size: 14px;
		font-weight: 400;
		font-family: "Noto Serif JP", serif;
	}

	:global(h1),
	:global(h2) {
		font-family: Roboto;
		display: inline-block;
		border-bottom: solid 2px;
		margin-bottom: 0;
	}

	:global(ul) {
		padding-left: 0;
		list-style-type: none;
	}

	:global(a) {
		border-bottom: solid 1px;
	}

	:global(a:hover) {
		color: #ff6b81;
		text-decoration: none;
	}

	:global(b) {
		font-weight: 700;
	}

	header,
	footer {
		text-align: center;
	}

	header,
	main,
	footer {
		padding-left: 2em;
		padding-right: 2em;
		max-width: 768px;
		margin: 0 auto;
	}
</style>
