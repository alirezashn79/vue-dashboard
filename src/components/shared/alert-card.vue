<script setup lang="ts">
import { XCircle } from 'lucide-vue-next'

const { variant, description, title } = defineProps<{
  variant: 'primary' | 'danger' | 'success'
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="px-3.5 py-3 rounded-[10px]"
    :class="
      variant === 'primary'
        ? 'bg-primary/10'
        : variant === 'danger'
          ? 'bg-danger/10'
          : variant === 'success'
            ? 'bg-success/10'
            : 'bg-warning/10'
    "
  >
    <div class="flex items-center justify-between">
      <h2 class="text-[13px] font-medium">
        {{ title }}
      </h2>
      <button>
        <XCircle class="text-[#000000] size-4" stroke-width="1" />
      </button>
    </div>

    <p class="mt-3 text-pretty font-light text-[11px]">
      {{ description }}
    </p>
  </div>
</template>
