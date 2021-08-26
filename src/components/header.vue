<template>
<div class="root">
	<div class="header">
		<div class="center">
			<div class="search"><form action="https://www.google.com/"><input type="text" name="keywords" placeholder="Search"/><button type="submit">Search</button></form></div>
			<div class="nav">
				<ul>
					<li><a href="/" class="one">Home</a></li>
					<li><a href="javascript:;" class="one">Spec</a>
						<div class="son">
							<a href="javascript:;" @click="showinfo(1)">Fuel</a>
							<a href="javascript:;" @click="showinfo(2)">Fact</a>
						</div>
					</li>
					<li><a href="/Cart" class="one">Build your own</a></li>
					<li><a href="/Contact" class="one">Contact</a></li>
					
				</ul>
			</div>
		</div>
	</div>
	
	<v-showopen :textinfo="textinfo" :show="show" ref="child"></v-showopen>
</div>
</template>

<script>
import vShowopen from '@/components/showopen.vue';
export default {
	name:"Header",
	data() {
		return {
			textinfo:'',
			show:false
		}
	},
	components:{
		vShowopen
	},
	methods:{
		showinfo(type){
			if(type==1){
				this.textinfo='M4 Competition Coupe 8.8L/100KM M4 Competition Convertible 9.1L/100KM';
				this.show=true;
				 this.$refs.child.closeShow();
			}else{
				this.textinfo="The BMW M4 coupe for 2021 is undoubtedly one of the company's most drastic redesigns in its long history. Not only does the two-door version of the likewise-all-new BMW M3 have significantly different bodywork. The S58 straight-six engine, producing 503 horsepower versus 473 in the base model.";
				this.show=true;
				 this.$refs.child.closeShow();
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.header
	width:100%; height:80px; background:#fff;
	.center
		max-width:1200px; height:50px; margin:0 auto;  align-items: center ; justify-content: space-between; float:right;
		.search
			input
				width 180px; height:30px; text-indent:10px; float:left; border:1px solid #ccc;
			button
				width:60px; height:32px; background:orange; color:#fff; font-size:16px;
		.nav
			ul li
				float:left;  position: relative; margin-left:20px;
			ul li .son
				display:none; position: absolute; left:-15px; top:50px; background:#fff; z-index:99999;
				a
					display:block; width:60px; height:30px; line-height:30px; border-bottom:1px solid #ccc; text-align:center;

			ul li a.one
				line-height:50px; display:block; width:auto; text-align:center; font-size:16px;
				&:hover
					color:orange; 
			ul li:hover .son
				display:block;

			ul li .son a:hover
				color:orange
</style>