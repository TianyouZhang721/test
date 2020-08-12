<template>
    <div class="swiper">
        <div class="swiper-container"
             ref="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                     v-for="(item, index) in bannerList"
                     :key="item.id">
                    <img :src="'http://localhost:3000' + item.img"
                         alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import "swiper/swiper-bundle.css"
export default {
    mounted () {

    },
    props: [
        "bannerList"
    ],
    watch: {
        bannerList: {
            deep: true,
            handler () {
                console.log(123)
                this.$nextTick(() => {
                    let swiper = new Swiper(".swiper-container", {
                        autoplay: true
                    })
                    console.log(swiper)
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.swiper-container
    width 100%
    height 2.9rem
    .swiper-wrapper
        height 100%
        .swiper-slide
            height 100%
            display flex
            align-items center
            img
                width 100%
</style>