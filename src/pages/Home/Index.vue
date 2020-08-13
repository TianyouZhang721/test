<template>
  <div class="index">
	<div :is="comName"></div>
  </div>
</template>

<script>
	import Index from '@/components/Home/Index'
	import Goods from '@/components/Home/Goods'
	export default {
		components: {
			Index,
			Goods
		},
		data() {
			return {
				comName: "Index"
			}
		},
		mounted() {
			let id = this.$route.query.id
			console.log(id)
			if (id) {
				this.comName = "Goods"
			} else {
				this.comName = "Index"
			}
		}
	}
</script>

<style></style>
