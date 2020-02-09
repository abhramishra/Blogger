import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
})

export default axios