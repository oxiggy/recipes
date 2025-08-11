<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<main class="min-h-dvh overflow-y-hidden">
	{@render children()}
</main>

