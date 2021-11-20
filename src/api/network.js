import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3003';
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true; // 让axios发送请求的时候带上cookie

export default {
    get: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            axios.get(path, {
                params: data,
            })
                .then(function (response) {
                    resolve(response)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    post: function (path = '', data = {},options = {}) {
        return new Promise(function (resolve, reject) {
            axios.post(path, data, options)
                .then(function (response) {
                    resolve(response.data)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    delete: function (path = '',data = {}) {
        return new Promise(function (resolve, reject) {
            axios.delete(path,{
                data
            })
                .then(function (response) {
                    resolve(response.data)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    put: function (path = '', data = {}) {
        return new Promise(function (resolve, reject) {
            axios.put(path, data)
                .then(function (response) {
                    resolve(response.data)
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
}