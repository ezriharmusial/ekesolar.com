<script>
	import {userObject} from '../userbase'
	import Fa from 'svelte-fa';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	// import { page } from "@roxi/routify";
	import { lang } from '@lib/i18n/language'

	const databaseName = 'translations'

	let translationPromise
	let translations = [], newTranslation = ''

	function changeHandler(items) { translations = items}

	function addTranslation() {
		translationPromise = userbase.insertItem({databaseName, item: newTranslation})
		newTranslation = ''
	}

	function deleteTranslation(itemId) {
		translationPromise = userbase.deleteItem({databaseName, itemId})
	}

	function updateTranslation(index) {
		const {item, itemId} = translations[index];
		translationPromise = userbase.updateItem({databaseName, itemId, item})
	}

	$: frontmatter = ($page.meta.frontmatter) ? Object.entries($page.meta.frontmatter[lang]) : []
	$: console.log('translations', translations)
	$: console.log('frontmatter', frontmatter)
	$: if ($userObject) translationPromise = userbase.openDatabase({databaseName, changeHandler})
</script>

{#await translationPromise}
	Loading Translation...
{:then _}
	<div class="field is-grouped">
		<div class="control">
			<input type="text" class="input" bind:value={newTranslation} name="translation" id="translation" placeholder="translation"/>
	  </div>
	  <div class="control">
			<button class="button is-success is-outlined" on:click={addTranslation} type="button">
				<span class="icon is-small">
					<Fa icon={faCheck} />
  		  </span>
    		<span>Save</span>
			</button>
		</div>
	</div>
	{#each frontmatter as item, index}
		{#if typeof item[1] === 'object'}
			{#each frontmatter as item, index}
				nestje
			{/each}
		{:else}
	<div class="columns content" style="border-bottom: 1px solid whitesmoke;">
		<div class="column has-text-right">
			<div class="py-2 is-size-6">
				{item[0]}
			</div>
		</div>
		<div class="column">
			<div class="field is-grouped">
				<div class="control">
					<input type="text" class="input" bind:value={frontmatter[index][1]} />
			  </div>
				<div class="control">
					<button class="button is-success is-outlined" on:click={() => updateTranslation(index)}>
				    <span class="icon is-small">
							<Fa icon={faCheck} />
				    </span>
 				    <span>Save</span>
					</button>
				</div>
			  <div class="control">
					<button class="delete is-large" on:click={() => deleteTranslation(itemId)}>x</button>
				</div>
			</div>
		</div>
	</div>
	{/if}
	{/each}
{:catch error}
	Translation Error: {error.message}
{/await}
