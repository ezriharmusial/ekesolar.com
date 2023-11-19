<script>
	/*
	Navigation
	*/
	import Fa from 'svelte-fa';
	import { faWeixin } from '@fortawesome/free-brands-svg-icons';
	import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
	import { page } from '$app/stores';
	import LanguageSwitcher from "./LanguageSwitcher.svelte";
	import { lang } from "@lib/i18n/language";

	const locale = {};
	let menuActive = false;
	let node = [];

	locale['en'] = {
		"go to" : "Go to",
		"contact us" : "Contact Us",
		"projects": "Projects",
		"shareholders summit 2021": "Solar Summit '21"
	}
	locale['nl'] = {
		"go to": "Ga naar",
		"contact us" : "Contact",
		"projects": "Projecten",
		"shareholders summit 2021": "Solar Top '21"
	}


	function isActive(path) {
		console.log('path', path);
		console.log('$page.path', $page.path);
		return $page.path == path ? true : false;
	}


	function toggleMenu() {
		menuActive = !menuActive
	}

	function foldMenu() {
		menuActive = false
	}
</script>

<style lang="scss">
	@media screen and (max-width: 1023px) {
		.nav-toggle,.nav-menu.is-active {
			display: block;
		}
		.nav-menu { display: none; }
	}

	.nav-toggle.is-active {
		span {
			&:nth-child(1) {
				transform: translateY(5px) rotate(45deg);
			}

			&:nth-child(2) {
				opacity: 0;
			}

			&:nth-child(3) {
				transform: translateY(-5px) rotate(-45deg);
			}
		}
	}

	.navbar-item { text-transform: capitalize }
</style>

<header class="banner">
	<nav class="navbar is-fixed-top is-black" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item has-text-weight-bold is-italic has-text-shadow is-size-5" href={'/'} on:click={foldMenu}>
				<span class="icon">
					<img src="/android-chrome-192x192.png" alt="EkeSolar Unlimited: Funding Happiness" width="30" height="30">
				</span>
				<span>

					<!--span class="artkids has-text-info">EkeSolar</span>
						<span class="foundation has-text-success">Unlimited</span-->
						</a>
						<div class="navbar-item">
							<LanguageSwitcher />
						</div>

						<button class="nav-toggle navbar-burger float-left" class:is-active={menuActive} on:click={toggleMenu}>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>

					<div class="navbar-menu nav-menu" class:is-active={menuActive}>
						<div class="navbar-end">
							{#each node.children as { path, title, children }, i}
							<!-- TODO:? -->
							{#if i !== 1}
							<a class="navbar-item" href={path} class:is-active={isActive(path)} title="{locale[lang]['go to']} {locale[lang][title]}" on:click={foldMenu}>
								<span class="icon">
									<Fa icon={faWeixin} />
								</span>
								<span>{ locale[lang][title] }</span>
							</a>
							{:else if i == 1}
							<div class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link" href={'/#projects'} title="{locale[lang]['go to']} {locale[lang]['projects']}" on:click={foldMenu}>
									<span class="icon">
										<Fa icon={faBriefcase} />
									</span>
									<span>{ locale[lang][title] }</span>
								</a>

								<div class="navbar-dropdown">
									{#each children as { path, title }, j}
									<a class="navbar-item" href={path} class:is-active={isActive(path)} title="{locale[lang]['go to']} {locale[lang][title]}" on:click={foldMenu}>
										{ title }
									</a>
									{/each}
								</div>
							</div>
							{/if}
							{/each}
						</div>
					</div>
				</nav>
			</header>
