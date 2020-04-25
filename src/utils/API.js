import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://veritas-news.herokuapp.com/prediction/`
    })
}