<style>
	:global(body) {
		color: #003263;
		font-family: 'Noto Serif JP', serif;
	}

	:global(h1),
	:global(h2) {
		font-family: Roboto;
		display: inline-block;
		border-bottom: solid 2px;
		margin-bottom: 0;
	}

	ul {
		font-size: 14px;
		font-weight: 400;
	}

	a {
		border-bottom: solid 1px;
	}

	a:hover {
		color: #ff6b81;
		text-decoration: none;
	}

	b {
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

<script>
	import Item from './components/Item.svelte';
</script>

<svelte:head>
	<title>Arata</title>
	<meta name="google-site-verification" content="Zvni4vmMa8E2Jt6X5tjAXXB-F02ZelcJqdupaEKRZR4" />
	<link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<header>
	<h1>Arata</h1>
</header>

<main>
	<Item header="Contacts">
		<ul>
			<li>Twitter: <a href="https://twitter.com/arata_nvm">arata_nvm</a></li>
			<li>GitHub: <a href="https://github.com/arata-nvm">arata-nvm</a></li>
			<li>Blog: <a href="https://arata-nvm.me/blog">$ sleep infinity</a></li>
		</ul>
	</Item>

	<Item header="Affilations">
		<ul>
			<li>津山工業高等専門学校 - 総合理工学科 情報システム系 (2019/04-)</li>

		</ul>
	</Item>

	<Item header="Likes">
		<ul>
			<li>Physics</li>
			<li>Mathematics</li>
			<li>Cyber Security</li>
			<li>Reverse Engineering</li>
			<li>Low-Level Programming</li>
			<li>CTF(Team: helix, <a href="https://ctftime.org/team/71813">KUDoS</a>)</li>
		</ul>
	</Item>



	<Item header="Skills">
		<ul>
			<li>Language: Rust, Go, Python</li>
			<li>Editor: Vim, Visual Studio Code</li>
			<li>OS: Arch Linux, Windows 10</li>
		</ul>
	</Item>

	<Item header="Activities">
		<ul>
			<li>2019/08 <b>Hack U 2019 OSAKA</b></li>
			<li>2019/10 <b>KOSENセキュリティコンテスト2019</b> - helix 7th</li>
			<li>2019/12 <b>K-SECセキュリティウィンタースクール2019</b></li>
			<li>2020/03 <b>中国地区高専コンピュータフェスティバル</b> - アプリケーション部門 3rd</li>
			<li>2020/07 <b>SecHack365</b> - 学習駆動コース 坂井ゼミ</li>
			<li>2020/11 <b>KOSENセキュリティコンテスト2020</b> - helix 7th</li>
			<li>2020/11 <b>パソコン甲子園2020</b> - プログラミング部門 本選</li>
			<li>2021/03 <b>中国地区高専コンピュータフェスティバル</b> - アプリケーション部門 審査員賞</li>
			<li>2021/08 <b>セキュリティ・キャンプ全国大会2021</b></li>
			<li>2021/10 <b>第32回全国高専プログラミングコンテスト</b> - 競技部門</li>
		</ul>
	</Item>

	<Item header="Works">
		<ul>
			<li><b>Visket</b> A toy programming language made with Go and LLVM</li>
			<li><b>ccc</b> A C compiler from scratch(self hosted)</li>
			<li><b>Poly</b> A software renderer from scratch</li>
			<li><b>tnct-info</b> An API that provides information on NITTC</li>
			<li><b>AutoProxy</b> An app that automatically changes the proxy settings in Windows 10</li>
		</ul>
	</Item>


</main>

<footer>
	<small>© 2020 arata-nvm.</small>
</footer>