const BASE_URL = 'http://codercba.com:9002'

class CyRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data: params,
        success: function(res) {
          resolve(res)
        },
        fail: function(err) {
          reject(err)
        }
      })
    }) 
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", data)
  }
}

const cyRequest = new CyRequest()

export default cyRequest