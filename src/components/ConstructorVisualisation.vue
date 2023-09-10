<template>
	<div class="visualisation">
		<img
			src="./../assets/img/vis-34t.png"
			alt="AK Image"
			class="visualisation__image"
		/>
		<img
			v-for="extra in allExtras"
			:key="extra.id"
			:src="require(`./../assets/img/${extra.visImgSrc}`)"
			alt="Extra Image"
			class="visualisation__image"
			:class="{ visualisation__image_transparent: !extra.checked }"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
	name: 'ConstructorVisualisation',
	computed: mapGetters(['allExtras']),
})
</script>

<style lang="scss">
.visualisation {
	position: relative;

	&__image {
		width: 100%;
		position: absolute;
		transition: 0.5s ease;

		&_transparent {
			opacity: 0.3;
		}
	}
}
</style>
