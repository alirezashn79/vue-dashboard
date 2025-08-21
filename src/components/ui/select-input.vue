<script setup lang="ts">
import type { SelectHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ SelectHTMLAttributes {
  label?: string
  required?: boolean
  error?: string
  options: Array<{ value: string; title: string }>
}

const { label, required = true, error, options, ...inputProps } = defineProps<Props>()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div class="flex flex-col w-full items-start">
    <label class="font-medium mb-0.5">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <select
      v-bind="{ ...$attrs, ...inputProps }"
      :class="['input', $attrs.class, { 'outline-danger': error }]"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.title }}
      </option>
    </select>
    <small v-if="error" class="text-danger text-xs mt-1">{{ error }}</small>
  </div>
</template>
