<template>
	<div class="order-confirm">
		<h3 class="heading-3 order-confirm__heading">Благодарим за заказ!</h3>
		<p class="order-confirm__message">
			Менеджер уже получил Ваше обращение, он свяжется с Вами в течение 10 минут
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AppOrderConfirm',
})
</script>

<style lang="scss">
@import './../assets/scss/breakpoints';

.order-confirm {
	padding: 3.125rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&__heading {
		text-align: center;
	}

	&__message {
		margin-top: 0.625rem;
		width: 52%;

		font-size: 1.375rem;
		line-height: 1.8125rem;
		font-weight: 300;
		text-align: center;

		@media screen and (max-width: $xs) {
			width: initial;

			font-size: 1.125rem;
			line-height: 1.5625rem;
		}
	}
}
</style>
