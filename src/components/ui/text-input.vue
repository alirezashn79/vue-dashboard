<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  label?: string
  required?: boolean
  error?: string
}

const { label, required = true, error, ...inputProps } = defineProps<Props>()

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
    <input
      v-bind="{ ...$attrs, ...inputProps }"
      :class="['input', $attrs.class, error && 'outline-danger']"
    />
    <small v-if="error" class="text-danger text-xs mt-1">{{ error }}</small>
  </div>
</template>
