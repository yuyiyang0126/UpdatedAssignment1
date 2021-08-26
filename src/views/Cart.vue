<template>
<div class="cart">
	<v-header></v-header>
    
    <div class="main">
        <div class="m_01">
            <div class="l"><img :src="color" alt=""></div>
            <div class="r">
                <h2>Pick a paint color:</h2>
                <ul>
                    <li v-for="(item,index) of colorArr" :key="index" :class="[index==colorindex ? 'on' : '']"><a href="javascript:;" @click="colorFun(index)"><img :src="item.colored" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div class="m_02">
            <div class="l"><img :src="wheel" alt=""></div>
            <div class="r">
                <h2>Select your wheel:</h2>
                <ul>
                    <li v-for="(item,index) of wheelArr" :key="index" :class="[index==wheelindex ? 'on' : '']"><a href="javascript:;" @click="wheelFun(index)"><img :src="item.wheeled" alt=""></a></li>
                </ul>
            </div>
        </div>
        <div class="order"><p>Total price：{{totalPrice}}</p><button @click="openform">Order</button></div>
    </div>
	 
	 <div class="orderform" v-show="showform">
		<div class="center">
			<dl>
				<dd><p>Name:</p><input type="text" name="username"></dd>
				<dd><p>Number:</p><input type="text" name="username"></dd>
				<dd><p>Address:</p><input type="text" name="username"></dd>
				<dt><button @click="openok">Place an order</button></dt>
				<div class="btn"><a href="javascript:;" @click="openform">×</a></div>
			</dl>
		</div>
	 </div>

 
	 
	 <div class="orderok" v-show="orderok">
		<div class="center">
			<div class="box">
				<p>Thank you for ordering</p>
				<div class="btn"><a href="javascript:;" @click="openok">×</a></div>
			</div>
		</div>
	 </div>

	<v-footer></v-footer>
</div>
</template>

<script>
import vHeader from '@/components/header.vue';
import vFooter from '@/components/footer.vue';
export default {
	name: 'Cart',
    data(){
        return {
            color:'',
            colorindex:0,
            colorprice:0,
				wheel:'',
            wheelindex:0,
            wheelprice:0,
				colorArr:[
					{'color':require("../assets/img/color_01.webp"),'colored':require("../assets/img/color_01ed.webp"),'price':0},
					{'color':require("../assets/img/color_02.webp"),'colored':require("../assets/img/color_02ed.webp"),'price':100},
					{'color':require("../assets/img/color_03.webp"),'colored':require("../assets/img/color_03ed.webp"),'price':200},
					{'color':require("../assets/img/color_04.webp"),'colored':require("../assets/img/color_04ed.webp"),'price':300},
					{'color':require("../assets/img/color_05.webp"),'colored':require("../assets/img/color_05ed.webp"),'price':400},
					{'color':require("../assets/img/color_06.webp"),'colored':require("../assets/img/color_06ed.webp"),'price':500}
				],
            wheelArr:[
					{'wheel':require("../assets/img/wheel_01.webp"),'wheeled':require("../assets/img/wheel_01ed.webp"),'price':0},
					{'wheel':require("../assets/img/wheel_02.webp"),'wheeled':require("../assets/img/wheel_02ed.webp"),'price':100},
					{'wheel':require("../assets/img/wheel_03.webp"),'wheeled':require("../assets/img/wheel_03ed.webp"),'price':200},
					{'wheel':require("../assets/img/wheel_04.webp"),'wheeled':require("../assets/img/wheel_04ed.webp"),'price':300},
					{'wheel':require("../assets/img/wheel_05.webp"),'wheeled':require("../assets/img/wheel_05ed.webp"),'price':400},
					{'wheel':require("../assets/img/wheel_06.webp"),'wheeled':require("../assets/img/wheel_06ed.webp"),'price':500}
				],
				showform:false,
				orderok:false
        }
    },
	components: {
		vHeader,vFooter
	},
    computed:{
        totalPrice(){
            return 150000+this.colorprice+this.wheelprice
        }
    },
    mounted(){
        this.color=this.colorArr[this.colorindex].color;
        this.wheel=this.wheelArr[this.wheelindex].wheeled;
    },
    watch:{
       colorindex:function(){
          this.color=this.colorArr[this.colorindex].color;
          this.colorprice=this.colorArr[this.colorindex].price;
       },
       wheelindex:function(){
          this.wheel=this.wheelArr[this.wheelindex].wheeled;
          this.wheelprice=this.wheelArr[this.wheelindex].price;
       }
    },
    methods:{
        colorFun:function(index){
            this.colorindex=index;
        },
        wheelFun:function(index){
            this.wheelindex=index;
        },
        openform:function(){
				this.showform=!this.showform;
        },
		  openok:function(){
				this.showform=false;
		  		this.orderok=!this.orderok;
		  }
    }
}
</script>

<style scoped>
.main{max-width:1200px; height:auto; overflow:hidden; margin:0 auto;}

.main	.m_01{display:flex; justify-content: space-between; flex-wrap: wrap; margin:50px 0}
.main	.m_01 .l{flex:1;}
.main	.m_01 .l img{display:block; width:100%; border:border-box;}			
.main	.m_01 .r{flex:1; color:#fff; padding-left:20px; display:flex; flex-direction: column; justify-content: space-around;}
.main	.m_01 .r	ul{display:flex; justify-content: space-between;}
.main	.m_01 .r	ul	li{border:1px solid #ccc;}			
.main	.m_01 .r	ul	li.on{border:1px solid red;}
.main	.m_01 .r	ul	li img{display:block;}	

.main .m_02{display:flex; justify-content: space-between; flex-wrap: wrap; margin:20px 0;}
.main .m_02 .l{flex:1; border:1px solid #ccc;}		
.main .m_02 .l img{display:block; width:60%; border:border-box; padding:20px 20%;}
.main .m_02	.r{flex:1; color:#fff; padding-left:20px; display:flex; flex-direction: column; justify-content: space-around;}
.main .m_02	.r ul{display:flex; justify-content: space-between;}			
.main .m_02	.r ul li{border:1px solid #ccc; border-radius:100%;}
.main .m_02	.r ul li.on{border:1px solid red;}				
.main .m_02	.r ul li img{display:block;}						
.main .order{width:100%; height:auto; background:#2f2f2f; display:flex; justify-content: flex-end; align-items: center;}
.main .order p{color:#fff}	
.main .order button{width:130px; height:30px; background:red; font-size:16px; color:#fff; margin-left:20px; cursor: pointer;}


.orderform{position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.6);}		
.orderform .center{width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;}
.orderform .center dl{max-width: 350px; width: 100%; height: auto; background: #fff; box-sizing: border-box; padding: 20px; position: relative;}
.orderform .center dl dd{ margin-bottom: 20px;}
.orderform .center dl dd p{ font-size: 16px; margin-bottom: 5px;}
.orderform .center dl dd input{width: 100%; height:35px; line-height: 35px; text-indent: 10px; background: #eee;}
.orderform .center dl dt{width: 100%; height: auto; overflow: hidden; text-align: right;}
.orderform .center dl dt button{width: 160px; height: 30px; background: #FF0000; text-align: center; color: #fff; cursor: pointer;}
.orderform .center .btn{ position: absolute; top: -10px; right: -10px;}
.orderform .center .btn a{display: block; width: 30px; width: 30px; line-height: 30px; font-size: 30px; border-radius: 100%; background: #FF0000; color: #fff; text-align: center;}

.orderok{position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.6);}	
.orderok .center{width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;}
.orderok .center .box{max-width: 350px; width: 100%; height: auto; background: #fff; text-align: center; box-sizing: border-box; padding: 20px; position: relative;}
.orderok .center .btn{ position: absolute; top: -10px; right: -10px;}
.orderok .center .btn a{display: block; width: 30px; width: 30px; line-height: 30px; font-size: 30px; border-radius: 100%; background: #FF0000; color: #fff; text-align: center;}

</style>