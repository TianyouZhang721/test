<template>
	<div>
		<header>
		    <div class="img-box">
		        <img src="../../assets/logo.png" alt="">
		    </div>
		    <input type="text">
		    <i class="iconfont icon-19"></i>
		</header>
		<!-- 轮播图 -->
		<div class="banner">
			<Swiper ref="mySwiper" :options="swiperOptions">
			    <Swiper-slide v-for="(item, index) in bannerList" :key="item.id">
					<img :src="'http://localhost:3000' + item.img" alt="">
				</Swiper-slide>
			 </Swiper>
		</div>
		<!-- 导航菜单 -->
		<div class="nav">
			<ul>
				<li v-for="(item, index) in navList" :key="index" @click="goCategory(index)">
					<i :class="['iconfont', item.icon]"></i>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
		<!-- tab切换 -->
		<div class="goods-tab">
			<!-- tab导航 -->
			<div class="tab">
				<ul>
					<li v-for="(item,index) in arr" :key="index"
						:class="{'active': index == ind}"
						@click="changeTab(index)"
					>{{item}}</li>
				</ul>
			</div>
			<!-- tab切换列表 -->
			<div class="goods">
				<ul v-if="goodsList.length > 0">
					<li
					v-for="(item, index) in goodsList[ind].content"
					:key="item.id"
		
					>
						<div class="img-box">
							<img :src="'http://localhost:3000' + item.img" alt="">
						</div>
						<div class="content">
							<p>{{ item.goodsname }}</p>
							<p class="price">￥{{ item.price }}</p>
							<p class="count">已售8000件</p>
							<div>立即抢购</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
	import "swiper/css/swiper.css"
	export default {
		methods: {
			// tag切换
			changeTab(i) {
				this.ind = i
			},
			// 跳到分类页面
			goCategory(i) {
				if (i == 3) {
					this.$router.push("/category")
				}
			}
		},
		data() {
			return {
				arr: ["最新商品", "最热商品", "全部商品"],
				ind: 0,
				goodsList: [],
				navList: [
					{
						title: "限时抢购",
						icon: "icon-xianshiqianggou"
					},{
						title: "积分商城",
						icon: "icon-jifenshangcheng"
					},{
						title: "联系我们",
						icon: "icon-lianxiwomen"
					},{
						title: "商品分类",
						icon: "icon-shangpinfenlei"
					}
				],
				bannerList: [],
				swiperOptions: {
				  autoplay: {
					  delay: 3000
				  }
				  // Some Swiper option/callback...
				}
			}
		},
		mounted() {
			// 调用获取轮播图接口
			this.$http.get("/getbanner").then(res => {
				console.log(res)
				this.bannerList = res.data.list
			})

			// 调用获取商品信息接口
			this.$http.get("/getindexgoods").then(res => {
				console.log(res)
				this.goodsList = res.data.list
			})
		},
		components: {
		    Swiper,
		    SwiperSlide
		},
		directives: {
		    swiper: directive
		}
	}
</script>

<style lang="stylus">
	header
	    width 100%
	    height 0.88rem
	    border-bottom 0.02rem solid #eee
	    display flex
	    justify-content space-between
	    align-items center
	    padding 0 .2rem
	    .img-box
	      width 2rem
	      height .8rem
	      img
	        width 100%
	        height 100%
	    input
	        width 2.5rem
	        height .36rem
	.swiper-container
		width 100%
		height 2.38rem
		img
			width 100%

	.nav
		width 100%
		height 1.7rem
		ul
			width 100%
			height 100%
			display flex
			align-items center
			li
				flex 1
				text-align center

	.tab
		ul
			display flex
			li
				flex 1
				height .7rem
				text-align center
				line-height .7rem
				border .01rem solid #eee
				&.active
					background-color color
					color #fff
	.goods
		li
			display flex
			height 2.96rem
			.img-box
				width 2.9rem
				height 100%
				img
					width 100%
					height 100%
			.content
				font-size .28rem
				display flex
				flex-direction column
				justify-content space-around
				padding .25rem 0
				.price
					color color
				.count
					color #666
					font-size .22rem
				div
					width 1.6rem
					height .5rem
					border-radius .04rem
					background-color color
					color #fff
					text-align center
					line-height .5rem

</style>