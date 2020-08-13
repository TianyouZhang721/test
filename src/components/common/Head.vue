<template>
	<header>
	    <slot name="left"></slot>
	    <slot name="middle"></slot>
	    <i class="iconfont icon-19"></i>
	</header>
</template>

<script>
	export default {

	}
</script>

<style lang="stylus" scoped>
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
</style>
