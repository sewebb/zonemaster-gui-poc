<svelte:options customElement="zm-language-switcher" />
<script lang="ts">
	import { languageTag } from '../../paraglide/runtime.js';
	import { getRelativeLocaleUrl } from 'astro:i18n';

	const currentLanguage = languageTag();
	const languages = {
		en: 'English',
		sv: 'Svenska',
		es: 'Español',
		da: 'Dansk',
		fr: 'Français',
		nb: 'Norsk Bokmål',
		fi: 'Suomi'
	};

	function switchToLanguage(e: Event) {
		const target = e.target as HTMLSelectElement;
		const newLanguage = target.value;
		let canonicalPath = document.location.pathname;

		if (canonicalPath.startsWith('/' + currentLanguage)) {
			canonicalPath = canonicalPath.replace(`/${currentLanguage}`, '/');
		}

		document.location.href = getRelativeLocaleUrl(newLanguage, canonicalPath);
	}
</script>

<select
	class="zm-language-switcher rounded-md border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
	id="languageSwitcher"
	onchange={switchToLanguage}
>
	{#each Object.entries(languages) as [code, label]}
		<option lang={code} value={code} selected={currentLanguage === code}>{label}</option>
	{/each}
</select>