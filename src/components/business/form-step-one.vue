<script setup lang="ts">
import TextInput from '../ui/text-input.vue'
</script>

<template>
  <form @submit.stop.prevent>
    <div class="grid grid-cols-2 gap-x-2.5 gap-y-6">
      <TextInput label="نام کسب و کار" />
      <TextInput label="نام قانونی" />
      <TextInput :required="false" label="نوع کسب و کار" />
      <TextInput :required="false" label="زمینه فعالیت" />
      <TextInput :required="false" label="واحد پول اصلی" />
      <TextInput :required="false" label="تقویم" />
      <TextInput :required="false" label="نرخ مالیات ارزش افزوده" />
      <div class="flex flex-col w-full items-start">
        <label class="font-medium mb-0.5"> سیستم انبارداری </label>
        <div class="input flex items-center gap-1">
          <input type="checkbox" name="" id="" />
          <span>مدیریت انبار دارید.</span>
        </div>
      </div>
    </div>
  </form>
</template>
