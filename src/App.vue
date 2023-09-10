<template>
	<main>
		<div class="container">
			<AppConstructor />
		</div>
	</main>
	<AppModal v-if="false">
		<AppOrderConfirm />
	</AppModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppConstructor from './components/AppConstructor.vue'
import AppModal from './components/AppModal.vue'
import AppOrderConfirm from './components/AppOrderConfirm.vue'

export default defineComponent({
	name: 'App',
	components: { AppConstructor, AppModal, AppOrderConfirm },
})
</script>

<style lang="scss"></style>
