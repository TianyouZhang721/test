<template>
    <div class="home">
        <header>
            <div class="img-box">
                <img src="../../assets/logo.png"
                     alt="">
            </div>
            <div class="search-box">
                <input type="text"
                       placeholder="搜索商品">
            </div>
            <i class="iconfont icon-shezhi"></i>
        </header>
        <main>
            <Swiper :bannerList="bannerList"></Swiper>
            <div class="nav">
                <ul>
                    <li v-for="(item, index) in navList"
                        :key="index">
                        <i :class="['iconfont', item.icon ]"></i>
                        <p>{{ item.title }}</p>
                    </li>
                </ul>
            </div>
        </main>
        <footer>
            <router-link to="/home/index"
                         tag="div">
                <i class="iconfont icon-shouye1"></i>
                <p>首页</p>
            </router-link>
            <router-link to="/home/cart"
                         tag="div">
                <i class="iconfont icon-gouwuche"></i>
                <p>购物车</p>
            </router-link>
            <router-link to="/home/my"
                         tag="div">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>

        </footer>
    </div>
</template>

<script>
import Swiper from "@/components/Home/Swiper"
export default {
    data () {
        return {
            bannerList: [],
            navList: [
                {
                    title: "限时抢购",
                    icon: "icon-xianshiqianggou"
                },
                {
                    title: "积分商城",
                    icon: "icon-jifenshangcheng"
                },
                {
                    title: "联系我们",
                    icon: "icon-lianxiwomen"
                },
                {
                    title: "商品分类",
                    icon: "icon-shangpinfenlei"
                }
            ]
        }
    },
    components: {
        Swiper
    },
    mounted () {
        this.$http.get("/getbanner").then(res => {
            console.log(res)
            this.bannerList = res.data.list
        })
    }
}
</script>

<style lang="stylus" scoped>
.home
    width 100%
    height 100%
    display flex
    flex-direction column
    overflow hidden
    header
        height 0.88rem
        border-bottom 0.02rem solid #eeeeee
        display flex
        justify-content space-between
        padding 0 0.15rem
        align-items center
        .img-box
            width 1.83rem
            height 0.8rem
            img
                width 100%
                height 100%
        .search-box
            width 3rem
            height 0.4rem
            input
                width 100%
                height 100%
                border none
                outline none
                background-color #eee
                text-align center
        i
            font-size 0.4rem
    main
        flex 1
        overflow-y auto
        .nav
            width 100%
            height 1.76rem
            ul
                height 100%
                display flex
                align-items center
                li
                    flex 1
                    text-align center
    footer
        height 1rem
        border-top 0.02rem solid #eee
        display flex
        div
            flex 1
            text-align center
            align-items center
            &.router-link-active
                color color
</style>