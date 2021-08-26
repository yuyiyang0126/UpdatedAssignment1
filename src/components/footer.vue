<template>
	<div class="footer">
		<audio src="@/assets/img/v.mp3" controls autoplay></audio>
		<p>Copy yuyiyang0126@hotmail.com</p>
	</div>
</template>

<script>
	export default {
		name:'Footer',
		data(){
			return {
				
			}
		},
		
	}
</script>

<style lang="stylus" scoped>
	.footer
		display:flex; align-items: center ; justify-content: center; height:80px; border-top:1px solid #2f2f2f; margin-top:20px;
		audio
			display:none;
		p
			color: #fff; text-align: center; margin-left:20px
		 
</style>
