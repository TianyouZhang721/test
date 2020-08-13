<template>
	<div class="goods">
		<div class="search-box">
			<input type="text">
			<i class="iconfont icon-fangdajing"></i>
		</div>
		<ul>
			<li>
				<div class="img-box">
					<img src="" alt="">
				</div>
				<div class="content">
					<p>标题</p>
					<p class="price">￥13</p>
					<p>333条评论</p>
				</div>
			</li>
		</ul>

	</div>
</template>

<script>
	import Head from '@/components/common/Head'
	export default {
		components: {
			Head
		},
		mounted() {
			console.log(this)
			let id = this.$route.query.id
			this.$http.get("/getgoods", {fid:id}).then(res => {
				console.log(res)
			})
		}
	}
</script>

<style scoped>

</style>
