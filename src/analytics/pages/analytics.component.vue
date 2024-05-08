<script setup>
import PvDataTable from 'primevue/datatable'
import PvColumn from 'primevue/column'
import InputText from 'primevue/inputtext'

import { FilterMatchMode } from 'primevue/api'
import { ref } from 'vue'
import AnalyticsServices from '../services/analytics.services'

defineOptions({
  name: 'analytics-page'
})

const analytics = ref([])
const analyticsService = new AnalyticsServices()

const filters = ref({
  recordId: { value: null, matchMode: FilterMatchMode.EQUALS },
  treadmillId: { value: null, matchMode: FilterMatchMode.EQUALS },
  serialNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
  centerName: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

async function getAnalytics() {
  try {
    analytics.value = await analyticsService.getAnalytics()
  } catch (err) {
    console.error(err)
  }
}
getAnalytics()
</script>

<template>
  <pv-data-table
    v-model:filters="filters"
    filterDisplay="row"
    :value="analytics"
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
  >
    <pv-column field="recordId" filterField="recordId" sortable header="Record Id">
      <template #filter="{ filterModel, filterCallback }">
        <input-text
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          class="p-column-filter"
          placeholder="Search by id"
        />
      </template>
    </pv-column>
    <pv-column field="treadmillId" sortable header="Treadmill Id">
      <template #filter="{ filterModel, filterCallback }">
        <input-text
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          class="p-column-filter"
          placeholder="Search by id"
        />
      </template>
    </pv-column>
    <pv-column field="serialNumber" sortable header="Serial Number">
      <template #filter="{ filterModel, filterCallback }">
        <input-text
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          class="p-column-filter"
          placeholder="Search by number"
        />
      </template>
    </pv-column>
    <pv-column field="centerName" sortable header="Center Name">
      <template #filter="{ filterModel, filterCallback }">
        <input-text
          v-model="filterModel.value"
          type="text"
          @input="filterCallback()"
          class="p-column-filter"
          placeholder="Search by name"
        />
      </template>
    </pv-column>
    <pv-column field="date" sortable header="Date"></pv-column>
    <pv-column field="time" sortable header="Time"></pv-column>
    <pv-column field="volts" sortable header="Volts"></pv-column>
    <pv-column field="watts" sortable header="Watts"></pv-column>
    <pv-column field="hp" sortable header="HP"></pv-column>
  </pv-data-table>
</template>
