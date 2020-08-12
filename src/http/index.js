import axios from 'axios'

let instance = axios.create({
    baseURL: "/api",
    timeout: 5000
})

instance.interceptors.request.use((config) => {
    return config
}, err => {
    Promise.reject(err)
})


function get (url, params) {
    return instance.get(url, {
        params
    })
}

function post (url, data) {
    return instance.post(url, data)
}

export default {
    get,
    post
}