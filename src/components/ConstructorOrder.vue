<template>
	<div class="order">
		<h2 class="heading-2">Заказ</h2>
		<select
			class="order__configuration"
			name="configuration"
			id="configuration"
		>
			<option value="15">15 литров без ТЭНа</option>
			<option value="15t">15 литров с ТЭНом</option>
			<option value="20">20 литров без ТЭНа</option>
			<option value="20t">20 литров с ТЭНом</option>
			<option value="26">26 литров без ТЭНа</option>
			<option value="26t">26 литров с ТЭНом</option>
			<option value="34">34 литра без ТЭНа</option>
			<option value="34t">34 литра с ТЭНом</option>
		</select>
		<div class="order__total">
			<span class="order__total-heading">Итого:</span>
			<span class="order__total-price">11 000 ₽</span>
		</div>
		<form action="#" class="order__form">
			<input
				class="order__input"
				type="text"
				name="name"
				id="name"
				placeholder="Имя"
			/>
			<input
				class="order__input"
				type="text"
				name="phone"
				id="phone"
				placeholder="+7 (___)-___-__-__"
			/>
		</form>
		<p class="order__hint">
			Менеджеры свяжутся с вами в ближайшее время для уточнения деталей заказа
		</p>
		<button class="order__button">Заказать</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructorOrder',
})
</script>

<style lang="scss">
@import './../assets/scss/colors';

.order {
	padding: 3.125rem 1.875rem;
	border-radius: 0.625rem;
	box-shadow: 0px 4px 15px 0px $colorShadow;

	display: flex;
	flex-direction: column;
	align-items: center;

	&__configuration {
		margin-top: 1.875rem;
		padding: 0.94rem;
		width: 100%;

		color: $colorSecondary;
		font-family: Montserrat;
		font-size: 1.25rem;
		font-weight: 500;

		border: 2px solid $colorSecondary;
		border-radius: 0.1875rem;
	}

	&__total {
		margin-top: 1.875rem;
		padding: 1.25rem 0;
		border-top: 1px solid $colorLine1;
		border-bottom: 1px solid $colorLine1;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	&__total-heading {
		text-align: center;
		font-size: 2.1875rem;
		font-weight: 700;
	}

	&__total-price {
		text-wrap: nowrap;
		margin-top: 1.06rem;
		font-size: 3.125rem;
		font-weight: 900;
	}

	&__form {
		margin-top: 1.875rem;
	}

	&__input {
		margin-top: 1.25rem;
		padding: 0.94rem;

		width: 100%;

		background-color: $colorGray3;
		border-radius: 0.1875rem;
		border: none;

		font-size: 1.25rem;
		font-family: Inter;

		&::placeholder {
			color: $colorPlaceholder;
		}

		&:first-of-type {
			margin-top: 0;
		}
	}

	&__hint {
		margin-top: 1.25rem;
		font-size: 1.125rem;
		font-weight: 500;
		color: $colorHint;
		text-align: center;
	}

	&__button {
		margin-top: 2.08rem;
	}
}
</style>
