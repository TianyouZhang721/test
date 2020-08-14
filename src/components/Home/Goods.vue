<template>
	<div class="goods">
		<header>
			<i class="iconfont icon-zuo"></i>
			<img src="../../assets/logo.png" />
			<i class="iconfont icon-19"></i>
		</header>
		<div class="search-box">
			<input type="text" placeholder="搜索商品" v-model="searchVal" @keydown.13="search">
			<i v-show="isShow" class="iconfont icon-fangdajing"></i>
		</div>
		<ul>
			<li v-for="(item, index) in list" :key="item.id" @click="goDetail(item.id)">
				<div class="img-box">
					<img :src="'http://localhost:3000' + item.img" alt="">
				</div>
				<div class="content">
					<p>{{ item.goodsname }}</p>
					<p class="price">￥{{ item.price }}</p>
					<p>333条评论</p>
				</div>
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				searchVal: "",
				isShow: true
			}
		},
		watch: {
			searchVal(newVal) {
				if (!newVal) {
					this.isShow = true
				} else {
					this.isShow = false
				}
			}
		},
		methods: {
			search() {
				this.$http.get("getgoods", {keyword: this.searchVal}).then(res => {
					console.log(res)
					this.list = res.data.list
				})
			},
			goDetail(id) {
				this.$router.push("/detail?id=" + id)
			}
		},
		components: {
		},
		mounted() {
			console.log(this)
			let id = this.$route.query.id
			this.$http.get("/getgoods", {fid:id}).then(res => {
				this.list = res.data.list
			})
		}
	}
</script>

<style lang="stylus" scoped>
	.goods
		width 100%
		height 100%
		display flex
		flex-direction column
		header
			height .88rem
			display flex
			justify-content space-between
			padding 0 .2rem
			img
				height .88rem
		.search-box
			width 6.2rem
			height .8rem
			margin 0 auto
			margin-top: .3rem
			position relative
			input
				width 100%
				height 100%
				border-radius .4rem
				border none
				outline none
				background-color color
				text-align center
				color #fff
				&::placeholder
					color #fff
			i
				position absolute
				top 50%;
				left 50%
				transform translate(-300%,-50%)
				color #fff

</style>
