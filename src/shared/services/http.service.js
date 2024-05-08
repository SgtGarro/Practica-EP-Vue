import axios from 'axios'

class HttpClient {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1'
    this.http = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  }
}

export default HttpClient
