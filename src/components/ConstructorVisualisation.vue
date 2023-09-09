<template>
	<div class="visualisation">
		<img
			src="./../assets/img/34t.png"
			alt="AK Image"
			class="visualisation__image"
		/>
		<img
			src="./../assets/img/0.png"
			alt="Extra Image"
			class="visualisation__image visualisation__image_transparent"
		/>
		<img
			src="./../assets/img/1.png"
			alt="Extra Image"
			class="visualisation__image"
		/>
		<img
			src="./../assets/img/2.png"
			alt="Extra Image"
			class="visualisation__image"
		/>
		<img
			src="./../assets/img/3.png"
			alt="Extra Image"
			class="visualisation__image"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructorVisualisation',
})
</script>

<style lang="scss">
.visualisation {
	position: relative;

	&__image {
		width: 100%;

		position: absolute;

		&_transparent {
			opacity: 0.3;
		}
	}
}
</style>
