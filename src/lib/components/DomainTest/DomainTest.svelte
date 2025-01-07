<script lang="ts">
  import Button from '../Button/Button.svelte';
  import Input from '../Input/Input.svelte';

  let domain = $state('');

  function startTest(e) {
    e.preventDefault();
    console.log('Starting test with domain:', domain);
  }
</script>
<form novalidate onsubmit={startTest} class="zm-domain-test">
  <Input type="text" bind:value={domain} placeholder="Domain" />
  <Button type="submit">Start Test</Button>
</form>

<style>
  .zm-domain-test {
    background-color: var(--color-palette-main-10);
    border: 1px solid var(--color-palette-main-30);
    border-radius: var(--border-radius);
    padding: var(--spacing-default);
  }
</style>
