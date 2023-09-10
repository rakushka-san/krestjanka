<template>
	<div class="modal">
		<div class="modal__window">
			<div class="modal__content">
				<img
					src="./../assets/img/cross.png"
					alt="Close Modal"
					class="modal__close"
					@click="hideModal()"
				/>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'

export default defineComponent({
	name: 'AppModal',
	methods: mapMutations(['hideModal']),
})
</script>

<style lang="scss">
@import './../assets/scss/colors';

.modal {
	// visibility: hidden;
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background-color: $colorModalBackground;
	display: flex;
	justify-content: center;
	align-items: center;

	&__window {
		margin: 1.25rem;
		background-color: $colorWhite;
		border-radius: 0.625rem;
	}

	&__content {
		position: relative;
	}

	&__close {
		position: absolute;
		top: 1.875rem;
		right: 1.875rem;

		width: 1.4375rem;
	}
}
</style>
