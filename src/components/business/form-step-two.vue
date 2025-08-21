<script setup lang="ts">
import TextInput from '../ui/text-input.vue'
</script>

<template>
  <form @submit.stop.prevent>
    <div class="grid grid-cols-2 gap-x-2.5 gap-y-6">
      <TextInput :required="false" label="شناسه ملی" />
      <TextInput :required="false" label="کد اقتصادی" />
      <div class="col-span-2">
        <TextInput :required="false" label="شماره ثبت" />
      </div>
    </div>
  </form>
</template>
