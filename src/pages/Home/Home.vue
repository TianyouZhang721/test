<template>
    <div class="home">
        <header>
            <div class="img-box">
                <img src="../../assets/logo.png" alt="">
            </div>
            <input type="text">
            <i class="iconfont icon-19"></i>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/index" tag="div">
                <i class="iconfont icon-1"></i>
                <p>首页</p>
            </router-link>
            <router-link to="/home/cart" tag="div">
                <i class="iconfont icon-gouwuche"></i>
                <p>购物车</p>
            </router-link>
            <router-link to="/home/my" tag="div">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.home
    width 100%
    height 100%
    display flex
    flex-direction column
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
    main
        flex 1
        overflow-y auto
    footer
        width 100%
        height 1rem
        border-top 0.02rem solid #eee
        display flex
        align-items center
        div
          flex 1
          text-align center
          &.router-link-active
            color color
</style>
