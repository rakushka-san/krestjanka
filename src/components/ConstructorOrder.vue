<template>
	<div class="order">
		<h2 class="heading-2">Заказ</h2>
		<select
			class="order__configuration"
			name="configuration"
			id="configuration"
			@change="selectConfiguration(parseValue($event))"
		>
			<option
				v-for="configuration in allConfigurations"
				:key="configuration.id"
				:value="configuration.id"
				:selected="configuration.id === selectedConfiguration.id"
			>
				{{ configuration.name }}
			</option>
		</select>
		<div class="order__total">
			<span class="order__total-heading">Итого:</span>
			<span class="order__total-price">{{ totalPrice }} ₽</span>
		</div>
		<div class="order__form">
			<input
				class="order__input"
				type="text"
				name="name"
				id="name"
				placeholder="Имя"
				v-model.trim="name"
			/>
			<input
				class="order__input"
				type="text"
				name="phone"
				id="phone"
				placeholder="+7 (___)-___-__-__"
				v-model.trim="phone"
			/>
		</div>
		<p class="order__hint">
			Менеджеры свяжутся с вами в ближайшее время для уточнения деталей заказа
		</p>
		<button type="submit" class="order__button">Заказать</button>
		<p v-if="error">{{ error }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
	name: 'ConstructorOrder',
	computed: {
		...mapGetters(['allConfigurations', 'selectedConfiguration', 'error']),
		totalPrice() {
			const totalPrice: Number =
				this.$store.getters.extrasPrice + this.$store.getters.configurationPrice
			const totalPriceString = totalPrice.toString()
			return totalPriceString.replace(
				totalPriceString.slice(-3),
				' ' + totalPriceString.slice(-3)
			)
		},
		name: {
			get() {
				return this.$store.getters.name
			},
			set(newName: string) {
				this.$store.commit('updateName', newName)
			},
		},
		phone: {
			get() {
				return this.$store.getters.phone
			},
			set(newPhone: string) {
				this.$store.commit('updatePhone', newPhone)
			},
		},
	},
	methods: {
		...mapActions(['selectConfiguration']),
		parseValue(event: Event) {
			const { target } = event
			return (target as HTMLSelectElement)?.value
		},
	},
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
