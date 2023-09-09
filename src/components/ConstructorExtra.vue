<template>
	<div class="extra">
		<input
			class="extra__checkbox"
			type="checkbox"
			id="1"
			name="extra"
			value="name"
		/>
		<label for="1"></label>
		<div class="extra__image-container">
			<img
				src="./../assets/img/03.png"
				alt="Extra Image"
				class="extra__image"
			/>
		</div>
		<span class="extra__name"> Жестяные банки (10 шт.) </span>
		<div class="extra__price-block">
			<span class="extra__price extra__price_old">7 990 ₽</span>
			<span class="extra__price extra__price_current">7 990 ₽</span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ConstructorExtra',
})
</script>

<style lang="scss">
@import './../assets/scss/colors';
.extra {
	display: flex;
	align-items: center;
	padding-bottom: 1.25rem;
	border-bottom: $colorSilent 1px solid;

	& > * {
		margin-left: 0.625rem;
	}

	&__checkbox {
		position: absolute;
		z-index: -1;
		opacity: 0;

		& + label {
			display: inline-flex;
			align-items: center;
			user-select: none;
		}

		& + label::before {
			content: '';
			width: 1.875rem;
			height: 1.875rem;
			border-radius: 50%;
			border: $colorLightGray solid 3px;
		}

		&:checked + label::before {
			background-image: url('./../assets/img/checkbox-inner.svg');
			background-position: center;
			background-repeat: no-repeat;
		}
	}

	&__image-container {
		width: 3.125rem;
		height: 3.125rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	&__name {
		font-size: 1.25rem;
		font-weight: 600;
		color: $colorGray;
		text-decoration: underline;
	}

	&__price-block {
		margin-left: auto;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	&__price {
		text-wrap: nowrap;

		&_old {
			font-size: 0.875rem;
			font-weight: 700;
			color: $colorSilent;
			text-decoration: line-through;
		}

		&_current {
			line-height: 1.375rem;
			font-weight: 900;
		}
	}
}
</style>
