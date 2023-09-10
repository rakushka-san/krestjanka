<template>
	<main>
		<div class="container">
			<AppConstructor />
		</div>
	</main>
	<AppModal v-if="showModal">
		<AppOrderConfirm />
	</AppModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppConstructor from './components/AppConstructor.vue'
import AppModal from './components/AppModal.vue'
import AppOrderConfirm from './components/AppOrderConfirm.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
	name: 'App',
	components: { AppConstructor, AppModal, AppOrderConfirm },
	computed: mapGetters(['showModal']),
})
</script>

<style lang="scss"></style>
