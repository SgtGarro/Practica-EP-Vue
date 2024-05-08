<script setup>
import PvCard from 'primevue/card'
import HealthChecksServices from '@/analytics/services/health-checks.services'
import { ref } from 'vue'

defineOptions({
  name: 'home-page'
})

const healthCheckService = new HealthChecksServices()
const averagePerformance = ref({ volts: 0, watts: 0, hp: 0 })

;(async function () {
  averagePerformance.value = await healthCheckService.getAveragePerformance()
})()
</script>

<template>
  <section class="flex align-items-center justify-content-center">
    <pv-card class="max-w-24rem mt-6">
      <template #title>
        <p class="m-0 text-center">Average performance</p>
      </template>
      <template #content>
        <ul class="p-0 list-none flex flex-column row-gap-2 m-0">
          <li>Volts: {{ averagePerformance.volts.toFixed(2) }}</li>
          <li>Watts: {{ averagePerformance.watts.toFixed(2) }}</li>
          <li>Hp: {{ averagePerformance.hp.toFixed(2) }}</li>
        </ul>
      </template>
    </pv-card>
  </section>
</template>
