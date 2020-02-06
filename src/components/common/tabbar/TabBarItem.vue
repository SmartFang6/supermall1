<template>
		<div class="tabbar-item" @click="itemClick">
			<div v-if="!isActive"><slot name = "item-icon"></slot></div>
			<div v-else><slot name = "item-icon-active"></slot></div>
			<div :style="isStyle">
				<slot name = "item-text"></slot>
			</div>
		</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		data(){
			return{
//				isActive: true
			}
		},
		props:{
			link:String,  //父组件向子组件传递的数据
			isColor:{
				type:String,
				default:'red'
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.link) !== -1  //判断每个活跃的组件的path是否和当前的组件相匹配
			},
			isStyle(){
				return this.isActive ? {color:this.isColor} : {}  //动态修改文字的active颜色，
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.link).catch(err => {err})  //使用$router.push方法传递跳转的组件
			}
		}
	}
</script>

<style>
.tabbar-item{
	flex: 1;
	text-align: center;
	height: 49px;
}
.tabbar-item img{
	width: 24px;
	height: 24px;
	vertical-align: middle;
}
</style>