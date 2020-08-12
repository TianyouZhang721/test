<template>
    <div class="index">
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
.index
    width 100%
    height 100%
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
</style>