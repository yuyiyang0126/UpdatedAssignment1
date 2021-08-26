<template>
<div class="alert" v-show="showed">
	<div class="center">
		<div class="box">
			<p>{{textinfo}}</p>
			<div class="btn"><a href="javascript:;" @click="closeShow">×</a></div>
		</div>
	</div>
 </div>
</template>

<script>
export default {
	props:['textinfo'],
	data(){
		return {
			showed:false
		}
	},
	methods:{
		closeShow:function(){
			this.showed=!this.showed;
		}
	}
}
</script>

<style scoped="scoped">
.alert{width: 100%; height: 100%; background: rgba(255,255,255,0.3); position: fixed; left: 0; top: 0; z-index: 999999;}
.alert .center{width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;}
.alert .center .box{max-width: 1200px; width: 100%; font-size: 20px; border-radius: 5px; height: auto; background: #fff; text-align: center; box-sizing: border-box; padding:50px 20px; position: relative;}
.alert .center .btn{ position: absolute; top: -10px; right: -10px;}
.alert .center .btn a{display: block; width: 30px; width: 30px; line-height: 30px; font-size: 30px; border-radius: 100%; background: #FF0000; color: #fff; text-align: center;}

</style>
