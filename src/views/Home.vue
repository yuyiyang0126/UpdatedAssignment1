<template>

<div class="home">
	<v-header></v-header>

	<div class="title">The New 2021 BMW M4</div>

	<v-banner></v-banner>
	<v-footer></v-footer>
</div>
</template>

<script>
import vHeader from '@/components/header.vue';
import vBanner from '@/components/banner.vue';
import vFooter from '@/components/footer.vue';
export default {
	name: 'Home',
	components: {
		vHeader,vBanner,vFooter
	}
}
</script>

<style lang="stylus" scoped>
	.title
		max-width:1200px; height:auto; padding:30px 0; font-size:20px; color:#fff; margin: 0 auto;
</style>
