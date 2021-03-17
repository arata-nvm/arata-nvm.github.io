<style>
:global(body) {
	color: #003263;
	font-family: 'Noto Serif JP', serif;
}

:global(h1), :global(h2) {
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

header, footer {
	text-align: center;
}

header, main, footer {
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
	<Item header="About">
		<ul>
			<li>HN: Arata </li>
			<li>School: National Institute of Technology, Tsuyama College</li>
			<li>Dept: Department of Integrated Science and Technology / Communication and Information Systems Program</li>
		</ul>
	</Item>

	<Item header="Interest">
		<ul>
			<li>Information Security</li>
			<li>CTF(Team: helix, <a href="https://ctftime.org/team/71813">KUDoS</a>)</li>
			<li>Low-Level Programming</li>
		</ul>
	</Item>

	<Item header="Skills">
		<ul>
			<li>Language: Rust, Go, Python</li>
			<li>Editor: Vim, Visual Studio Code</li>
			<li>OS: Arch Linux, Windows 10</li>
		</ul>
	</Item>

	<Item header="Activity">
		<ul>
			<li>2019/08 <b>Hack U 2019 OSAKA</b></li>
			<li>2019/10 <b>KOSENセキュリティコンテスト2019</b> helix 7th</li>
			<li>2019/12 <b>K-SECセキュリティウィンタースクール2019</b></li>
			<li>2020/03 <b>中国地区高専コンピュータフェスティバル</b> アプリケーション部門 3rd</li>
			<li>2020/07 <b>SecHack365</b> 学習駆動コース 坂井ゼミ</li>
      <li>2020/11 <b>KOSENセキュリティコンテスト2020</b> helix 7th</li>
      <li>2020/11 <b>パソコン甲子園2020</b> プログラミング部門 本選</li>
			<li>2021/03 <b>中国地区高専コンピュータフェスティバル</b> アプリケーション部門 審査員賞</li>
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

	<Item header="Contact">
		<ul>
			<li>Twitter: <a href="https://twitter.com/arata_nvm">arata_nvm</a></li>
			<li>GitHub: <a href="https://github.com/arata-nvm">arata-nvm</a></li>
			<li>Blog: <a href="https://arata-nvm.me/blog">$ sleep infinity</a></li>
			</ul>
	</Item>
</main>

<footer>
	<small>© 2020 arata-nvm.</small>
</footer>
