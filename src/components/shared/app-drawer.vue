<script setup lang="ts">
import { XCircle } from 'lucide-vue-next'
import AlertCard from './alert-card.vue'

const { isOpen, onClose } = defineProps<{
  isOpen: boolean
  onClose: () => void
}>()
</script>

<template>
  <div
    class="fixed end-0 h-screen w-72 bg-white top-0 bottom-0 z-20 shadow transition-all duration-300 -translate-x-72"
    :class="isOpen && 'translate-x-0'"
  >
    <div
      class="h-[70px] py-4 mx-4 font-bold border-b justify-between border-b-primary/30 flex items-center"
    >
      <h2>اطلاعیه ها</h2>
      <button @click="onClose">
        <XCircle class="text-[#000000]" stroke-width="1" />
      </button>
    </div>

    <div class="py-5 px-3 space-y-1.5">
      <AlertCard
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
        title="اطلاعیه 1"
        variant="success"
      />
      <AlertCard
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
        title="اطلاعیه 2"
        variant="danger"
      />
      <AlertCard
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. "
        title="اطلاعیه 3"
        variant="primary"
      />
    </div>
  </div>
</template>
