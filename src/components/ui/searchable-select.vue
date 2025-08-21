<template>
  <div class="relative w-full" ref="selectContainer">
    <!-- Input Field -->
    <div class="relative">
      <input
        v-model="inputValue"
        :placeholder="placeholder"
        class="bg-secondary rounded-lg px-4 h-12 w-full font-light outline-secondary outline cursor-text pr-12"
        @focus="openDropdown"
        @input="handleInput"
        @keydown="handleKeydown"
        ref="mainInput"
      />

      <!-- Arrow Icon -->
      <div class="absolute inset-y-0 left-2 flex items-center pr-4 pointer-events-none">
        <svg
          class="w-4 h-4 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>

    <!-- Dropdown Options -->
    <div
      v-if="isOpen"
      class="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg h-60 overflow-y-auto"
    >
      <div v-if="filteredOptions.length === 0" class="px-4 py-3 text-gray-500 text-center">
        آیتمی یافت نشد
      </div>

      <div
        v-for="(option, index) in filteredOptions"
        :key="getOptionValue(option)"
        class="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors duration-150 border-b border-gray-50 last:border-b-0"
        :class="{
          'bg-blue-50 text-blue-700': index === selectedIndex,
          'bg-gray-100': getOptionValue(option) === modelValue,
        }"
        @click="selectOption(option)"
      >
        {{ getOptionLabel(option) }}
      </div>
    </div>

    <!-- Overlay to close dropdown -->
    <div v-if="isOpen" class="fixed inset-0 z-40" @click="closeDropdown"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

// Simple base interface
export interface OptionBase {
  value: string | number
  label: string
  [key: string]: string | number | boolean | null | undefined
}

// Props
interface Props {
  modelValue?: string | number | null
  options: OptionBase[]
  placeholder?: string
  valueKey?: string
  labelKey?: string
  searchable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'انتخاب کنید...',
  valueKey: 'value',
  labelKey: 'label',
  searchable: true,
})

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: string | number | null]
  change: [option: OptionBase | null]
}>()

// Refs
const isOpen = ref(false)
const inputValue = ref('')
const selectedIndex = ref(-1)
const selectContainer = ref<HTMLElement>()
const mainInput = ref<HTMLInputElement>()
const isTyping = ref(false)

// Computed
const filteredOptions = computed(() => {
  if (!props.searchable || !isTyping.value || !inputValue.value) {
    return props.options
  }

  const query = inputValue.value.toLowerCase()
  return props.options.filter((option) => getOptionLabel(option).toLowerCase().includes(query))
})

// Methods
const getOptionValue = (option: OptionBase): string | number => {
  const value = option[props.valueKey]
  if (typeof value === 'string' || typeof value === 'number') {
    return value
  }
  return String(value || '')
}

const getOptionLabel = (option: OptionBase): string => {
  const label = option[props.labelKey]
  if (typeof label === 'string') {
    return label
  }
  return String(label || '')
}

const openDropdown = (): void => {
  isOpen.value = true
  selectedIndex.value = -1
}

const closeDropdown = (): void => {
  isOpen.value = false
  isTyping.value = false
  updateInputValue()
}

const selectOption = (option: OptionBase): void => {
  const value = getOptionValue(option)
  emit('update:modelValue', value)
  emit('change', option)
  updateInputValue(option)
  closeDropdown()
}

const handleInput = (): void => {
  isTyping.value = true
  if (!isOpen.value) {
    openDropdown()
  }
  selectedIndex.value = -1
}

const handleKeydown = (event: KeyboardEvent): void => {
  switch (event.key) {
    case 'Escape':
      closeDropdown()
      break

    case 'Enter':
      event.preventDefault()
      if (
        isOpen.value &&
        selectedIndex.value >= 0 &&
        selectedIndex.value < filteredOptions.value.length
      ) {
        selectOption(filteredOptions.value[selectedIndex.value])
      } else if (!isOpen.value) {
        openDropdown()
      }
      break

    case 'ArrowDown':
      event.preventDefault()
      if (!isOpen.value) {
        openDropdown()
      } else {
        selectedIndex.value = Math.min(selectedIndex.value + 1, filteredOptions.value.length - 1)
      }
      break

    case 'ArrowUp':
      event.preventDefault()
      if (isOpen.value) {
        selectedIndex.value = Math.max(selectedIndex.value - 1, -1)
      }
      break

    case 'Tab':
      if (isOpen.value) {
        closeDropdown()
      }
      break
  }
}

const updateInputValue = (selectedOption?: OptionBase): void => {
  if (selectedOption) {
    inputValue.value = getOptionLabel(selectedOption)
    return
  }

  const option = props.options.find((opt) => getOptionValue(opt) === props.modelValue)
  inputValue.value = option ? getOptionLabel(option) : ''
}

// Watchers
watch(
  () => props.modelValue,
  () => {
    if (!isTyping.value) {
      updateInputValue()
    }
  },
  { immediate: true },
)

watch(
  () => props.options,
  () => {
    if (!isTyping.value) {
      updateInputValue()
    }
  },
)

// Lifecycle
onMounted(() => {
  updateInputValue()
})
</script>

<style scoped>
/* Custom scrollbar for dropdown */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Smooth transitions */
.transition-colors {
  transition:
    background-color 0.15s ease-in-out,
    color 0.15s ease-in-out;
}
</style>
