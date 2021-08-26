<template>

<div class="contact">
	<v-header></v-header>
    <div class="title">Contact us</div>
    <v-banner2></v-banner2>
    <div>
    </div>
    
    <div class="content">We are located in Melbourne </div>
    <div class="content">Contact us through Email: yyyu@deakin.edu.au</div>
    <v-footer></v-footer>
</div>
</template>


<script>
import vHeader from '@/components/header.vue';
import vBanner2 from '@/components/banner2.vue';
import vFooter from '@/components/footer.vue';
export default {
	name: 'contact',
	components: {
		vHeader,vFooter,vBanner2
	}
}
</script>


<style lang="stylus" scoped>
	.title{
		max-width:1200px; height:auto; padding:30px 0; font-size:20px; color:#fff; margin: 0 auto;}

    .content{
        max-width:1200px; height:auto; padding:30px 0; font-size:20px; color:#fff; margin: 0 auto;}
    
    .img{
        display:block; width:100%;
        z-index = -1;}


</style>
