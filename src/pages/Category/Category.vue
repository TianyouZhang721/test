<template>
	<div class="category">
		<CommonHead>
			<span>商品分类</span>
		</CommonHead>
		<main></main>
	</div>
</template>

<script>
	import CommonHead from '@/components/common/commonHead'
	export default {
		components: {
			CommonHead
		}
	}
</script>

<style lang="stylus" scoped>
	.category
		width 100%
		height 100%
		display flex
		flex-direction column

		main
			flex 1
</style>
