import axios from 'axios'

let api = (headers) => {
    return axios.create({
        baseURL: 'http://localhost:3000/api/',
        headers: headers
    })
}

export default api