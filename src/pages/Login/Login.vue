<template>
	<div>
		<input type="text" v-model="phone"/>
		<br>
		<input type="text" v-model="password"/>
		<br>
		<button @click="login">登录</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				password: ""
			}
		},
		methods: {
			login() {
				this.$http.post("/login", {
					phone: this.phone,
					password: this.password
				}).then(res => {
					console.log(res)
					if (res.data.code == 200) {
						// localStorage.setItem("user", JSON.stringify(res.data.list))
						this.$store.commit("getUser", res.data.list)
						this.$router.push("/")
					}
				})
			}
		}
	}
</script>

<style>
</style>
