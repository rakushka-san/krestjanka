<template>
	<section class="constructor">
		<header class="constructor__header">
			<h1 class="heading-1">
				Откройте
				<span class="heading-1__accent">больше возможностей</span> «Крестьянки»
			</h1>
			<p class="constructor__intro">Вместе с полезными дополнениями</p>
		</header>
		<div class="constructor__content">
			<ConstructorExtras class="extras" />
			<ConstructorVisualisation />
			<ConstructorOrder class="order" />
		</div>
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
})
</script>

<style lang="scss">
.constructor {
	&__intro {
		margin-top: 1.25rem;
		font-size: 2rem;
		line-height: 2.4375rem;
		text-align: center;
	}

	&__content {
		margin-top: 3.13rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

.extras {
	width: 24.3rem;
}

.visualisation {
	width: 30.4rem;
	aspect-ratio: 243 / 259;
}

.order {
	width: 21.4rem;
}
</style>
