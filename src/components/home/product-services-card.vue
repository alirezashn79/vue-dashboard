<script setup lang="ts">
import { PlusCircle } from 'lucide-vue-next'
import AppCard from '../shared/app-card.vue'
</script>

<template>
  <AppCard>
    <div class="flex flex-col size-full">
      <h2 class="text-base">کالاها و خدمات</h2>

      <div class="h-48 mt-6 hide-scrollbar space-y-1 overflow-y-auto grow">
        <div class="bg-secondary rounded-2xl p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              src="../../assets/images/product.jpg"
              alt="product"
              class="h-[52px] w-[54px] rounded-xl object-cover"
            />
            <div class="space-y-1.5">
              <p>لورم ایپسوم متن ساختگی</p>
              <p class="text-xs">نوع : خدمات</p>
            </div>
          </div>

          <div
            class="min-w-9 min-h-[18px] p-1 bg-danger/15 text-danger text-[11px] rounded-md flex items-center justify-center"
          >
            ۶ فروش
          </div>
        </div>
        <div class="rounded-2xl p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              src="../../assets/images/product.jpg"
              alt="product"
              class="h-[52px] w-[54px] rounded-xl object-cover"
            />
            <div class="space-y-1.5">
              <p>لورم ایپسوم متن ساختگی</p>
              <p class="text-xs">نوع : خدمات</p>
            </div>
          </div>

          <div
            class="min-w-9 min-h-[18px] p-1 bg-danger/15 text-danger text-[11px] rounded-md flex items-center justify-center"
          >
            ۶ فروش
          </div>
        </div>
        <div class="rounded-2xl p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              src="../../assets/images/product.jpg"
              alt="product"
              class="h-[52px] w-[54px] rounded-xl object-cover"
            />
            <div class="space-y-1.5">
              <p>لورم ایپسوم متن ساختگی</p>
              <p class="text-xs">نوع : خدمات</p>
            </div>
          </div>

          <div
            class="min-w-9 min-h-[18px] p-1 bg-danger/15 text-danger text-[11px] rounded-md flex items-center justify-center"
          >
            ۶ فروش
          </div>
        </div>
        <div class="rounded-2xl p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              src="../../assets/images/product.jpg"
              alt="product"
              class="h-[52px] w-[54px] rounded-xl object-cover"
            />
            <div class="space-y-1.5">
              <p>لورم ایپسوم متن ساختگی</p>
              <p class="text-xs">نوع : خدمات</p>
            </div>
          </div>

          <div
            class="min-w-9 min-h-[18px] p-1 bg-danger/15 text-danger text-[11px] rounded-md flex items-center justify-center"
          >
            ۶ فروش
          </div>
        </div>
        <div class="rounded-2xl p-2 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              src="../../assets/images/product.jpg"
              alt="product"
              class="h-[52px] w-[54px] rounded-xl object-cover"
            />
            <div class="space-y-1.5">
              <p>لورم ایپسوم متن ساختگی</p>
              <p class="text-xs">نوع : خدمات</p>
            </div>
          </div>

          <div
            class="min-w-9 min-h-[18px] p-1 bg-danger/15 text-danger text-[11px] rounded-md flex items-center justify-center"
          >
            ۶ فروش
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <button class="btn btn-primary-opacity gap-2 w-full mt-6">
          <PlusCircle class="size-5" stroke-width="1" />
          <span>ثبت کالا</span>
        </button>
        <button class="btn btn-primary-opacity gap-2 w-full mt-6">
          <PlusCircle class="size-5" stroke-width="1" />
          <span>ثبت خدمت</span>
        </button>
      </div>
    </div>
  </AppCard>
</template>
