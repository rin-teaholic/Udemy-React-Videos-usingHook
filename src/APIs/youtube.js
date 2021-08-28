import axios from 'axios'

const KEY ='AIzaSyB5QEP3dNJB_K2PU15y7YctNgq1eKFiTZk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

