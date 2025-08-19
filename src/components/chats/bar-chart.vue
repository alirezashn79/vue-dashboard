<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Bar } from 'vue-chartjs'

const { color, dataArray, legendLabel, labels } = defineProps<{
  color: string
  legendLabel: string
  dataArray: number[]
  labels: string[]
}>()

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = ref({
  labels: labels,
  datasets: [
    {
      label: legendLabel,
      backgroundColor: color,
      data: dataArray,
      barThickness: 21,
    },
  ],
})

const chartOptions = ref<ChartOptions<'bar'>>({
  responsive: true,
  locale: 'fa-IR',
  plugins: {
    legend: {
      display: false,
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
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: 'Vazir',
          size: 12,
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: 'Vazir',
          size: 12,
        },
      },
      position: 'right' as const,
    },
  },
})

const data = computed<ChartData<'bar'>>(() => chartData.value)
const options = computed<ChartOptions<'bar'>>(() => chartOptions.value)
</script>

<template>
  <div class="chart-container">
    <Bar :data="data" :options="options" />
  </div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  direction: rtl;
  font-family: 'Vazir', sans-serif;
}
</style>
