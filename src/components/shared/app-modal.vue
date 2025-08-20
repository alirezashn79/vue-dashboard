<script setup lang="ts">
import {
  Dialog,
  DialogDescription,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XCircle } from 'lucide-vue-next'
import { watch } from 'vue'

const { modalValue, desc, title } = defineProps<{
  modalValue: boolean
  title?: string
  desc?: string
}>()

const emit = defineEmits<{
  (e: 'update:modalValue', value: boolean): void
}>()

watch(
  () => modalValue,
  (newValue) => {
    if (!newValue) {
      emit('update:modalValue', false)
    }
  },
)

function close() {
  emit('update:modalValue', false)
}
</script>

<template>
  <TransitionRoot appear :show="modalValue" as="template">
    <Dialog as="div" class="relative z-50" :open="modalValue" @close="close">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30 backdrop-blur-xs" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="bg-white p-4 rounded-lg w-[690px] relative min-h-48">
              <div class="p-2 border-b border-b-dark-2/20 flex items-center justify-between">
                <DialogTitle class="text-xl font-semibold" v-if="title">{{ title }}</DialogTitle>
                <DialogDescription v-if="desc">{{ desc }}</DialogDescription>
                <button class="ms-auto" @click="close">
                  <XCircle class="text-[#000000]" stroke-width="1" />
                </button>
              </div>

              <div class="mt-7 px-2">
                <slot />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
