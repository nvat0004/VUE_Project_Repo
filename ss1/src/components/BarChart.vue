<template>
  <div class="chart-container">
    <h1 class="text-center">Quantity vs Brand Chart</h1>
    <Bar :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { Bar } from 'vue-chartjs'

// Define props for chart data and options
const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => ({
      responsive: true, // Make chart responsive
      maintainAspectRatio: false, // Ensure chart resizes with container
      scales: {
        y: {
          beginAtZero: true
        }
      }
    })
  }
})
</script>

<style scoped>
.chart-container {
  width: 100%; /* Full width of parent container */
  max-width: 800px; /* Optional max width */
  height: 400px; /* Adjust height as needed */
  margin: 0 auto; /* Center the chart */
}

@media (max-width: 768px) {
  .chart-container {
    height: 300px; /* Adjust height for smaller screens */
  }
}

@media (max-width: 576px) {
  .chart-container {
    height: 250px; /* Adjust height for very small screens */
  }
}
</style>
