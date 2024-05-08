import HttpClient from '@/shared/services/http.service'

class HealthChecksServices {
  constructor() {
    this.http = new HttpClient().http
  }

  async getHealthChecks() {
    const response = await this.http.get('/health-checks')
    return response.data
  }

  async getAveragePerformance() {
    const healthCheck = await this.getHealthChecks()

    const averagePerformance = {
      volts: 0,
      watts: 0,
      hp: 0
    }

    healthCheck.forEach((check) => {
      averagePerformance.volts += check.volts
      averagePerformance.watts += check.watts
      averagePerformance.hp += check.hp
    })

    averagePerformance.volts /= healthCheck.length
    averagePerformance.watts /= healthCheck.length
    averagePerformance.hp /= healthCheck.length

    return averagePerformance
  }
}

export default HealthChecksServices
