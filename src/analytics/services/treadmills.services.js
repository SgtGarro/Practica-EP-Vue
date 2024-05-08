import HttpClient from '@/shared/services/http.service'

class TreadmillsServices {
  constructor() {
    this.http = new HttpClient().http
  }

  async getTreadmills() {
    const response = await this.http.get('/treadmills')
    return response.data
  }
}

export default TreadmillsServices
