<template>
	<div>
		<input type="text" v-model="nickname"/>
		<br>
		<input type="text" v-model="phone" />
		<br>
		<input type="text" v-model="password" />
		<button @click="register">注册</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nickname: "",
				phone: "",
				password: ""
			}
		},
		methods: {
			register() {
				this.$http.post("/register", {
					phone: this.phone,
					nickname: this.nickname,
					password: this.password
				}).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
</style>
