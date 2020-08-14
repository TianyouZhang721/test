<template>
  <div class="cart">
    <CommonHead>
		<span>购物车</span>
	</CommonHead>
	<ul>
		<li v-for="(item, index) in list" :key="item.id">
			<div class="content">
				<i @click="checkOne(item)" :class="{'active': item.checked}" class="iconfont icon-quanxuan1"></i>
				<img :src="'http://localhost:3000' + item.img" />
				<div>
					<p>{{item.goodsname}}</p>
					<p>{{item.price}}</p>
				</div>
				<div>
					<button>-</button>
					<span>{{item.num}}</span>
					<button>+</button>
				</div>
			</div>
			<div class="del">删除</div>
		</li>
	</ul>
	<div class="total">
		<i @click="changeAll" class="iconfont icon-quanxuan1" :class="{'active': checkAll}"></i>
		<div>
			总计：163.00
		</div>
		<div>去结算(2件)</div>
	</div>
  </div>
</template>

<script>
	import CommonHead from '@/components/common/commonHead'
	export default {
		components: {
			CommonHead
		},
		data() {
			return {
				list: [],
				checkAll: false
			}
		},
		computed: {
			user() {
				return this.$store.state.user
			},
			// checkAll: {
			// 	get() {
			// 		return this.list.every(item => {
			// 			return item.checked
			// 		})
			// 	},
			// 	set() {}
			// }
		},
		watch: {
			list: {
				deep: true,
				handler() {
					this.checkAll  = this.list.every(item => {
						return item.checked
					})
				}
			}
		},
		methods: {
			checkOne(item) {
				item.checked = !item.checked
			},
			changeAll() {
				this.checkAll = true
			}
		},
		mounted() {
			this.$http.get("/cartlist", {uid: this.user.uid}).then(res => {
				console.log(res)
				if (res.data.code == 200) {
					this.list = res.data.list
					this.list = this.list.map(item => {
						return {...item, checked: false}
					})
					console.log(this.list)
				}
			})
		}
	}
</script>

<style lang="stylus" scoped>
	.cart
		width 100%
		height 100%
		display flex
		flex-direction column
		ul
			flex 1
			overflow-y auto
			overflow-x hidden
		.total
			height 1rem
			display flex
			justify-content space-between
			padding 0 .3rem
	li
		width 100%
		height 1.7rem
		position relative
		padding 0 .3rem
		.content
			width 100%
			display flex
			justify-content space-between
			align-items center
			i
				font-size .4rem
				&.active
					color color
			img
				width 1.4rem
				height 1.4rem
		.del
			width 1rem
			height 100%
			background-color #BD2C00
			color #FFFDEF
			line-height 1.7rem
			text-align center
			position absolute
			right -1rem
		button
			width .6rem
			height .4rem
	.total
		i
			&.active
				color color
</style>
