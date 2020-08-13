<template>
	<div>
		<ul>
			<li v-for="(item, index) in secondCate" :key="item.id" @click="goGoods(item)">
				<img :src="'http://localhost:3000' + item.img" alt="">
				<p>{{ item.catename }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ["secondCate"],
		methods: {
			goGoods(item) {
				console.log(item)
				this.$router.push("/home/index?id=" + item.id)
			}
		},
	}
</script>

<style lang="stylus" scoped>
	ul
		display flex
		justify-content space-between
		li
			width 30%
			text-align center
			img
				width 80%
				margin 0 auto
</style>
