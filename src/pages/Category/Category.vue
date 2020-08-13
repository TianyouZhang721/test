<template>
	<div class="category">
		<CommonHead>
			<span>商品分类</span>
		</CommonHead>
		<main>
			<div class="left-nav">
				<ul>
					<li v-for="(item, index) in categoryList" :key="item.id"
						:class="{'active': index == ind}"
						@click="changeCategory(index)"
					>
						{{ item.catename }}
					</li>
				</ul>
			</div>
			<div class="right-list">
				<List v-if="categoryList.length > 0" :secondCate="categoryList[ind].children"></List>
			</div>
		</main>
	</div>
</template>

<script>
	import List from '@/components/category/list'
	import CommonHead from '@/components/common/commonHead'
	export default {
		data() {
			return {
				categoryList: [],
				ind: 0
			}
		},
		methods: {
			changeCategory(i) {
				this.ind = i
			}
		},
		components: {
			CommonHead,
			List
		},
		mounted() {
			this.$http.get("/getcatetree").then(res => {
				console.log(res)
				this.categoryList = res.data.list
			})
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
			overflow-y auto
			display flex
			.left-nav
				width 1.6rem;
				border-right .02rem solid #ccc
				li
					height .52rem
					line-height .52rem
					width 100%
					text-align center
					margin .25rem 0
					border-left .04rem solid transparent
					&.active
						border-left .04rem solid color
			.right-list
				flex 1
</style>
