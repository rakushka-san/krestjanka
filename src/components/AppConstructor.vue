<template>
	<section class="constructor">
		<header class="constructor__header">
			<h1 class="heading-1">
				Откройте
				<span class="heading-1__accent">больше возможностей</span> «Крестьянки»
			</h1>
			<p class="constructor__intro">Вместе с полезными дополнениями</p>
		</header>
		<form method="post" action="#" @submit.prevent="submitForm($event)">
			<div class="constructor__content">
				<ConstructorExtras class="extras" />
				<ConstructorVisualisation />
				<ConstructorOrder class="order" />
			</div>
		</form>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConstructorExtras from './ConstructorExtras.vue'
import ConstructorVisualisation from './ConstructorVisualisation.vue'
import ConstructorOrder from './ConstructorOrder.vue'

export default defineComponent({
	name: 'AppConstructor',
	components: { ConstructorExtras, ConstructorVisualisation, ConstructorOrder },
	methods: {
		submitForm(event: Event) {
			if (!this.checkForm()) {
				return
			}

			const form = event.target as HTMLFormElement
			const formData = new FormData(form)
			for (let input of formData.entries()) {
				console.log(input[0], input[1])
			}

			this.$store.commit('updateName', '')
			this.$store.commit('updatePhone', '')
			this.$store.commit('emptyChecked')
			this.$store.commit('selectDefaultConfiguration')

			this.$store.commit('showModal')
		},
		checkForm() {
			this.$store.commit('emptyError')

			if (!this.checkName()) {
				this.$store.commit('error', 'Укажите корректное имя.')
				return false
			}

			if (!this.checkPhone()) {
				this.$store.commit('error', 'Укажите корректный номер телефона.')
				return false
			}

			return true
		},
		checkName() {
			const re = /^[А-Я][а-яё]*$/
			return re.test(this.$store.getters.name)
		},
		checkPhone() {
			const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
			return re.test(this.$store.getters.phone)
		},
	},
})
</script>

<style lang="scss">
@import './../assets/scss/breakpoints';

.constructor {
	&__intro {
		margin-top: 1.25rem;
		font-size: 2rem;
		line-height: 2.4375rem;
		text-align: center;

		@media screen and (max-width: $xs) {
		}
	}

	&__content {
		margin-top: 3.13rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: $md) {
			flex-direction: column;
		}
	}
}

.extras {
	width: 24.3rem;

	@media screen and (max-width: $md) {
		width: 100%;
	}
}

.visualisation {
	width: 30.4rem;
	aspect-ratio: 243 / 259;

	@media screen and (max-width: $md) {
		margin-top: 1.25rem;
		width: 100%;
	}
}

.order {
	width: 21.4rem;

	@media screen and (max-width: $md) {
		margin-top: 1.25rem;
		width: 100%;
	}
}
</style>
