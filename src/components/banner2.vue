<template>
    <div class="banenr">
	<swiper :options="swiperOption">
		<swiper-slide v-for="item of swiperList" :key="item.id"><img class="img" :src="item.imgUrl"></swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</div>
</template>

<script>
export default {
    name:'banner',
    data(){
        return {
            "swiperList": [{
                "id": "0001",
                "imgUrl": require("../assets/img/Deakin1.jpg")
            },{
                "id": "0002",
                "imgUrl": require("../assets/img/Deakin2.jpg")
            },{
                "id": "0003",
                "imgUrl": require("../assets/img/Deakin3.jpg")
            },{
                "id": "0004",
                "imgUrl": require("../assets/img/Deakin4.jpg")
            }],

            swiperOption:{
				autoplay: 3000,
                initialSlide: 1,
                autoplayDisableOnInteraction: false,
                loop: true,
                pagination: '.swiper-pagination'
			}
        }
    }
}
</script>

<style lang="stylus" scoped>
    .img
        display:block; width:100%;
        z-index = -1;
</style>