<script>
 		import { languages, lang } from '@lib/i18n/language';
		// import { route } from "@roxi/routify";

		//TODO Improve Mapping
		let langArray = Object.keys(languages).map((key) => [key, languages[key]]);

</script>
{#each langArray as item, i }
	{#if item[0] !== lang }
	console.log('item')
		<!-- <a href="/{item[0]}{$route.shortPath}" title="{item[1].native} ({item[1].full})">{item[1].native}</a> -->
	{:else}
		{item[1].native}
	{/if}
	{#if langArray.length !== i+1}
		&nbsp;|&nbsp;
	{/if}
{/each}
