<script setup>
import PvToolbar from 'primevue/toolbar'
import PvButton from 'primevue/button'
</script>

<template>
  <pv-toolbar>
    <template #start>
      <h1 class="text-xl">TechnoGym TechnoRun Analytics</h1>
    </template>
    <template #end>
      <router-link to="/home" class="mr-3">
        <pv-button label="Home" icon="pi pi-home" />
      </router-link>
      <router-link to="/analytics/health-checks">
        <pv-button label="Health checks" icon="pi pi-database" />
      </router-link>
    </template>
  </pv-toolbar>
  <router-view></router-view>
</template>
