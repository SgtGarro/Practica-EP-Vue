import HttpClient from '@/shared/services/http.service'

class CentersServices {
  constructor() {
    this.http = new HttpClient().http
  }

  async getCenters() {
    const response = await this.http.get('/centers')
    return response.data
  }
}

export default CentersServices
