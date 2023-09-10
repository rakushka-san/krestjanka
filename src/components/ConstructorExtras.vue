<template>
	<div class="extras">
		<fieldset class="extras__list">
			<ConstructorExtra
				class="extra"
				v-for="extra in allExtras"
				:key="extra.id"
				:extra="extra"
			/>
		</fieldset>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConstructorExtra from './ConstructorExtra.vue'

import { mapGetters } from 'vuex'

export default defineComponent({
	name: 'ConstructorExtras',
	components: {
		ConstructorExtra,
	},
	computed: mapGetters(['allExtras']),
})
</script>

<style lang="scss">
@import './../assets/scss/colors';

.extras {
	width: 100%;
	padding: 7.37rem 1.4375rem 7.37rem 0.9375rem;
	border-radius: 0.625rem;
	background-color: $colorGray5;

	&__list {
		border: none;
	}
}

.extra {
	margin-top: 5rem;

	&:first-of-type {
		margin-top: 0;
	}
}
</style>
