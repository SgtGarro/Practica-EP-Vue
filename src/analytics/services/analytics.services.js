import CentersServices from './centers.services'
import HealthChecksServices from './health-checks.services'
import TreadmillsServices from './treadmills.services'

class AnalyticsServices {
  constructor() {
    this.centersService = new CentersServices()
    this.healthChecksService = new HealthChecksServices()
    this.treadmillsService = new TreadmillsServices()
  }

  async getAnalytics() {
    const healthChecks = await this.healthChecksService.getHealthChecks()
    const treadmills = await this.treadmillsService.getTreadmills()
    const centers = await this.centersService.getCenters()

    const analytics = healthChecks.map((healthCheck) => {
      const formatDate = (year, month, day) => {
        const parsedMonth = month.toString().padStart(2, '0')
        const parsedDay = day.toString().padStart(2, '0')

        return `${year}-${parsedMonth}-${parsedDay}`
      }
      const formatTime = (hour, minutes, seconds) => {
        const parsedHour = hour.toString().padStart(2, '0')
        const parsedMinutes = minutes.toString().padStart(2, '0')
        const parsedSeconds = seconds.toString().padStart(2, '0')

        return `${parsedHour}:${parsedMinutes}:${parsedSeconds}`
      }

      const analytic = {
        recordId: healthCheck.id,
        treadmillId: healthCheck.treadmillId,
        serialNumber: '',
        centerName: '',
        date: formatDate(healthCheck.year, healthCheck.month, healthCheck.day),
        time: formatTime(healthCheck.hour, healthCheck.minutes, healthCheck.seconds),
        volts: healthCheck.volts,
        watts: healthCheck.watts,
        hp: healthCheck.hp
      }

      const treadmill = treadmills.find((treadmill) => treadmill.id === healthCheck.treadmillId)
      if (!treadmill) throw new Error('Treadmill not found')
      analytic.serialNumber = treadmill.serialNumber

      const center = centers.find((center) => treadmill.centerId === center.id)
      if (!center) throw new Error('Center not found')
      analytic.centerName = center.name

      return analytic
    })

    return analytics
  }
}

export default AnalyticsServices
