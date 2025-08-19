<script setup lang="ts">
import { ChevronDown, PlusCircle } from 'lucide-vue-next'
import AppCard from '../shared/app-card.vue'
import BarChart from '../chats/bar-chart.vue'
</script>

<template>
  <AppCard>
    <div class="flex items-center justify-between">
      <div class="space-y-3.5">
        <h2 class="text-base">نمودار فروش</h2>
        <p class="text-2xl">
          {{ Number(123456789).toLocaleString() }} <span class="text-[15px]">ریال</span>
        </p>
        <p class="font-light">۱۴۰۳/۰۴/۰۱ الی ۱۴۰۳/۰۹/۳۰</p>
      </div>
      <button
        class="btn btn-primary-outline flex items-center justify-between gap-1 rounded-xl font-light text-[11px] h-7"
      >
        <span>6 ماه</span>
        <ChevronDown class="size-3" />
      </button>
    </div>
    <div class="h-48 mt-6">
      <BarChart
        color="#FF9384"
        :data-array="[20, 10, 12, 17, 72, 10]"
        :labels="['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور']"
        legend-label="نمودار فروش"
      />
    </div>
    <button class="btn btn-primary-opacity gap-2 w-full mt-6">
      <PlusCircle class="size-5" stroke-width="1" />
      <span>افزودن فاکتور فروش</span>
    </button>
  </AppCard>
</template>
