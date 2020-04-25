import Api from '../utils/API'

export default {

    async sendUrl(payload) {
        console.log('URL to check: ')
        console.log(typeof payload)
        let response = await Api().post('/', {
            data: payload
        })
        console.log('URL from Back End: ')
        console.log(response)
        console.log(response.data.result)
        return response.data.result;
    },

    async fetchData(urlToFetch) {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        var targetUrl = proxyUrl + urlToFetch
        var response = await fetch(targetUrl)
        var responseText = response.text()
        console.log('fetchData ', responseText)
        return responseText
    }
}