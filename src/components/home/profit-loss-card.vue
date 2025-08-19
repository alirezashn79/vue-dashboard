<script setup lang="ts">
import { ChevronDown, PlusCircle } from 'lucide-vue-next'
import AppCard from '../shared/app-card.vue'
</script>

<template>
  <AppCard>
    <div class="flex items-center justify-between">
      <div class="space-y-3.5">
        <h2 class="text-base">سود یا زیان</h2>
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
    <div class="h-48 overflow-y-auto mt-6 hide-scrollbar space-y-2">
      <div class="space-y-1">
        <p>فروش : ۱۲۴٬۲۲۸٬۶۱۳ ریال</p>
        <div class="h-[22px] rounded-lg overflow-hidden relative bg-secondary">
          <div
            class="absolute top-0 bottom-0 start-0 h-full bg-[#84FF9F]"
            :style="{ width: `${40}%` }"
          ></div>
        </div>
      </div>
      <div class="space-y-1">
        <p>خرید : ۱۲۴٬۲۲۸٬۶۱۳ ریال</p>
        <div class="h-[22px] rounded-lg overflow-hidden relative bg-secondary">
          <div
            class="absolute top-0 bottom-0 start-0 h-full bg-[#FF9384]"
            :style="{ width: `${40}%` }"
          ></div>
        </div>
      </div>
      <div class="space-y-1">
        <p>هزینه ها : ۱۲۴٬۲۲۸٬۶۱۳ ریال</p>
        <div class="h-[22px] rounded-lg overflow-hidden relative bg-secondary">
          <div
            class="absolute top-0 bottom-0 start-0 h-full bg-[#1AD55A]"
            :style="{ width: `${40}%` }"
          ></div>
        </div>
      </div>
      <div class="space-y-1">
        <p>درامدها : ۱۲۴٬۲۲۸٬۶۱۳ ریال</p>
        <div class="h-[22px] rounded-lg overflow-hidden relative bg-secondary">
          <div
            class="absolute top-0 bottom-0 start-0 h-full bg-[#FDB26C]"
            :style="{ width: `${40}%` }"
          ></div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary-opacity gap-2 w-full mt-6">
      <PlusCircle class="size-5" stroke-width="1" />
      <span>افزودن فاکتور خرید</span>
    </button>
  </AppCard>
</template>
