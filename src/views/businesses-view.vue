<script setup lang="ts">
import ProductImage from '@/assets/images/product.jpg'
import AddBusiness from '@/components/business/add-business.vue'
import { ArrowUpFromLine, SquarePen, TicketPlus, Trash2, UserPlus } from 'lucide-vue-next'
</script>

<template>
  <div>
    <section class="bg-white min-h-full rounded-2xl shadow overflow-hidden">
      <div class="flex items-center justify-between py-4 px-5 border-b border-b-primary/15">
        <h1 class="text-xl font-normal">لیست کسب و کارهای شما</h1>
        <AddBusiness />
      </div>

      <div class="py-4 px-5 space-y-6">
        <div class="rounded-2xl bg-secondary p-2.5">
          <div class="flex items-center justify-between pb-2 border-b border-b-primary/15">
            <div class="flex items-center gap-2">
              <img
                :src="ProductImage"
                alt="product"
                class="h-[48px] w-[50px] rounded-xl object-cover"
              />
              <div class="space-y-1.5">
                <p class="font-medium">لورم ایپسوم متن ساختگی</p>
                <p class="text-[10px]">زمینه : حسابداری</p>
              </div>
            </div>
            <div class="flex gap-1.5 items-center">
              <button
                class="bg-dark-2/15 text-xs font-medium flex items-center gap-1.5 text-dark-2 border box-border transition-all border-dark-2/15 hover:border-dark-2 rounded-md px-2 h-8"
              >
                <SquarePen />
                ویرایش اطلاعات
              </button>
              <button
                class="bg-warning-2/15 text-xs font-medium flex items-center gap-1.5 text-warning-2 border box-border transition-all border-warning-2/15 hover:border-warning-2 rounded-md px-2 h-8"
              >
                <UserPlus />
                افزودن کاربر
              </button>
              <button
                class="bg-blue-2/15 text-xs font-medium flex items-center gap-1.5 text-blue-2 border box-border transition-all border-blue-2/15 hover:border-blue-2 rounded-md px-2 h-8"
              >
                <ArrowUpFromLine />
                ارتقا اشتراک
              </button>
              <button
                class="bg-success/15 text-xs font-medium flex items-center gap-1.5 text-success border box-border transition-all border-success/15 hover:border-success rounded-md px-2 h-8"
              >
                <TicketPlus />
                تمدید اشتراک
              </button>

              <button
                class="bg-danger-2/15 text-xs font-medium text-danger-2 border box-border transition-all border-danger-2/15 hover:border-danger-2 rounded-md px-2 h-8"
              >
                <Trash2 />
              </button>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4 mt-3">
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">سطح دسترسی : <span class="font-medium">مالک</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">تعداد کاربران : <span class="font-medium">3 کاربر</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">نوع اشتراک : <span class="font-medium">آزمایشی</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">تاریخ انقضا : <span class="font-medium">3 تیر 1403</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">اعتبار کسب و کار : <span class="font-medium">نامحدود</span></p>
            </div>
          </div>
        </div>
        <div class="rounded-2xl p-2.5">
          <div class="flex items-center justify-between pb-2 border-b border-b-primary/15">
            <div class="flex items-center gap-2">
              <img
                :src="ProductImage"
                alt="product"
                class="h-[48px] w-[50px] rounded-xl object-cover"
              />
              <div class="space-y-1.5">
                <p class="font-medium">لورم ایپسوم متن ساختگی</p>
                <p class="text-[10px]">زمینه : حسابداری</p>
              </div>
            </div>
            <div class="flex gap-1.5 items-center">
              <button
                class="bg-dark-2/15 text-xs font-medium flex items-center gap-1.5 text-dark-2 border box-border transition-all border-dark-2/15 hover:border-dark-2 rounded-md px-2 h-8"
              >
                <SquarePen />
                ویرایش اطلاعات
              </button>
              <button
                class="bg-warning-2/15 text-xs font-medium flex items-center gap-1.5 text-warning-2 border box-border transition-all border-warning-2/15 hover:border-warning-2 rounded-md px-2 h-8"
              >
                <UserPlus />
                افزودن کاربر
              </button>
              <button
                class="bg-blue-2/15 text-xs font-medium flex items-center gap-1.5 text-blue-2 border box-border transition-all border-blue-2/15 hover:border-blue-2 rounded-md px-2 h-8"
              >
                <ArrowUpFromLine />
                ارتقا اشتراک
              </button>
              <button
                class="bg-success/15 text-xs font-medium flex items-center gap-1.5 text-success border box-border transition-all border-success/15 hover:border-success rounded-md px-2 h-8"
              >
                <TicketPlus />
                تمدید اشتراک
              </button>

              <button
                class="bg-danger-2/15 text-xs font-medium text-danger-2 border box-border transition-all border-danger-2/15 hover:border-danger-2 rounded-md px-2 h-8"
              >
                <Trash2 />
              </button>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4 mt-3">
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">سطح دسترسی : <span class="font-medium">مالک</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">تعداد کاربران : <span class="font-medium">3 کاربر</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">نوع اشتراک : <span class="font-medium">آزمایشی</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">تاریخ انقضا : <span class="font-medium">3 تیر 1403</span></p>
            </div>
            <div class="bg-white rounded-xl px-10 py-3.5 flex items-center justify-center">
              <p class="font-light">اعتبار کسب و کار : <span class="font-medium">نامحدود</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
button > svg {
  height: 18px;
  width: 18px;
}
</style>
