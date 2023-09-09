<template>
	<main>
		<div class="container">
			<AppConstructor />
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppConstructor from './components/AppConstructor.vue'

export default defineComponent({
	name: 'App',
	components: { AppConstructor },
})
</script>

<style lang="scss"></style>
