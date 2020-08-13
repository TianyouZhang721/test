<template>
    <div class="home">

        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/index" tag="div">
                <i class="iconfont icon-1"></i>
                <p >首页</p>
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
