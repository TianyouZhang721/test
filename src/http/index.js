import axios from 'axios'
import store from "../store/index.js"
import router from '../router'
let instance = axios.create({
  baseURL: "/api",
  timeout: 5000
})

instance.interceptors.request.use((config) => {
	// app.js
    config.headers.authorization = store.state.user.token
    return config
}, err => {
  Promise.reject(err)
})


instance.interceptors.response.use((res) => {
	console.log(res)
	if (res.data.code == 403) {
		router.push("/login")
	} 
	return res
}, err => {
	Promise.reject(err)
})



function get(url, params) {
    return instance.get(url, {
      params
    })
}

function post(url, data) {
    return instance.post(url, data)
}

export default {
  get,
  post
}
