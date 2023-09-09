<template>
	<div class="extras">
		<fieldset class="extras__list">
			<ConstructorExtra class="extra" />
			<ConstructorExtra class="extra" />
			<ConstructorExtra class="extra" />
			<ConstructorExtra class="extra" />
		</fieldset>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConstructorExtra from './ConstructorExtra.vue'

export default defineComponent({
	name: 'ConstructorExtras',
	components: {
		ConstructorExtra,
	},
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
