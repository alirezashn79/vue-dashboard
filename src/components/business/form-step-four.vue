<script setup lang="ts">
import SearchableSelect from '@/components/ui/searchable-select.vue'
import { ref } from 'vue'
import TextInput from '../ui/text-input.vue'

interface CityOption {
  value: string
  label: string
}

const selectedCity = ref<string | null>(null)

const cityOptions = [
  { value: 'tehran', label: 'تهران' },
  { value: 'isfahan', label: 'اصفهان' },
  { value: 'shiraz', label: 'شیراز' },
  { value: 'mashhad', label: 'مشهد' },
  { value: 'tabriz', label: 'تبریز' },
]

const handleCityChange = (option: CityOption | null): void => {
  console.log('Selected city:', option)
}
</script>

<template>
  <form @submit.stop.prevent>
    <div class="grid grid-cols-2 gap-x-2.5 gap-y-6">
      <div class="flex flex-col w-full items-start">
        <label class="font-medium mb-0.5"> شهر </label>
        <SearchableSelect
          v-model="selectedCity"
          :options="cityOptions"
          placeholder="شهر خود را انتخاب کنید"
          @change="(option) => handleCityChange(option as CityOption | null)"
        />
      </div>

      <TextInput :required="false" label="کدپستی" />
      <div class="col-span-2">
        <TextInput :required="false" label="آدرس کامل" />
      </div>
      <TextInput :required="false" label="ایمیل" />
      <TextInput :required="false" label="وبسایت" />
    </div>
  </form>
</template>
