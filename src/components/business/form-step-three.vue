<script setup lang="ts">
import TextInput from '../ui/text-input.vue'
</script>

<template>
  <form @submit.stop.prevent>
    <div class="grid grid-cols-2 gap-x-2.5 gap-y-6">
      <div class="col-span-2">
        <TextInput label="عنوان سال مالی *" />
      </div>
      <TextInput label="تاریخ شروع" type="date" />
      <TextInput label="تاریخ پایان" type="date" />
    </div>
  </form>
</template>
