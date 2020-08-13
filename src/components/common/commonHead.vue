<!-- 公用头部组件 -->
<template>

	<header>
		<i class='iconfont icon-zuo'></i>
		<slot></slot>
		<i class="iconfont icon-19"></i>
	</header>
</template>

<script>
	export default {

	}
</script>

<style lang="stylus" scoped>
	header
		height .88rem
		background-color color
		display flex
		justify-content space-between
		padding 0 .2rem
		align-items center
		color #fff
		font-size .3rem
</style>
