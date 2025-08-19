<template>
  <div class="chart-container">
    <Doughnut :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = ref({
  labels: ['خرید', 'فروش', 'غیره'],
  datasets: [
    {
      data: [45, 25, 30],
      backgroundColor: ['#0E5FD9', '#E84646', '#FF9500'],
      borderWidth: 4,
    },
  ],
})

const chartOptions = ref<ChartOptions<'doughnut'>>({
  responsive: true,
  locale: 'fa-IR',
  cutout: '70%',
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        font: {
          family: 'Vazir',
          size: 14,
        },
        textAlign: 'right' as const,
        usePointStyle: true,
        pointStyle: 'rectRounded',
      },
    },
    tooltip: {
      titleFont: {
        family: 'Vazir',
        size: 14,
      },
      bodyFont: {
        family: 'Vazir',
        size: 12,
      },
      rtl: true,
      callbacks: {
        label: function (context) {
          const label = context.label || ''
          const value = context.parsed
          const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
          const percentage = Math.round((value / total) * 100)
          return `${label}: ${percentage}%`
        },
      },
    },
  },
})

const data = computed<ChartData<'doughnut'>>(() => chartData.value)
const options = computed<ChartOptions<'doughnut'>>(() => chartOptions.value)
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  direction: rtl;
  font-family: 'Vazir', sans-serif;
}
.chart-container :deep(canvas) {
  height: auto !important;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  max-width: 100%;
  margin: auto;
}
</style>
