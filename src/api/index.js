import axios from "axios";

export const domain = 'http://localhost:8080'

const $api = axios.create({
    withCredentials: true
})

export default $api