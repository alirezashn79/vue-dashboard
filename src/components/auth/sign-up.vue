<script setup lang="ts">
import { Eye, EyeOff, RotateCcw } from 'lucide-vue-next'
import { ref } from 'vue'

const togglePassword = ref(false)
const toggleConfirmPassword = ref(false)
</script>

<template>
  <div>
    <h1 class="font-bold text-[20px] mb-6">ورود به حساب کاربری</h1>
    <form @submit.prevent.stop="">
      <div class="flex flex-col gap-3">
        <div class="flex gap-2">
          <input type="text" class="input basis-1/2" placeholder="نام" />
          <input type="text" class="input basis-1/2" placeholder="نام خانوادگی" />
        </div>
        <input type="text" class="input" placeholder="شماره تلفن همراه" />
        <input type="email" class="input" placeholder="آدرس ایمیل" />
        <div class="relative w-full">
          <input
            :type="togglePassword ? 'text' : 'password'"
            class="input w-full"
            placeholder="رمز عبور"
          />
          <button
            type="button"
            @click="togglePassword = !togglePassword"
            class="absolute end-2.5 bottom-1/2 translate-y-1/2 cursor-pointer text-primary"
          >
            <EyeOff v-if="togglePassword" class="h-4" />
            <Eye v-else class="h-4" />
          </button>
        </div>
        <div class="relative w-full">
          <input
            :type="toggleConfirmPassword ? 'text' : 'password'"
            class="input w-full"
            placeholder="تکرار رمز عبور"
          />
          <button
            type="button"
            @click="toggleConfirmPassword = !toggleConfirmPassword"
            class="absolute end-2.5 bottom-1/2 translate-y-1/2 cursor-pointer text-primary"
          >
            <EyeOff v-if="toggleConfirmPassword" class="h-4" />
            <Eye v-else class="h-4" />
          </button>
        </div>

        <div class="mt-3 flex items-center gap-2 w-full">
          <input type="text" class="input basis-3/5" placeholder="کد امنیتی" />
          <div class="input basis-2/5 flex items-center gap-3 justify-center">
            <button
              type="button"
              class="bg-primary rounded-md size-5 text-white cursor-pointer flex items-center justify-center"
            >
              <RotateCcw :size="10" />
            </button>
            <code class="font-bold">1 B 3 C F</code>
          </div>
        </div>

        <div class="mt-6">
          <button type="submit" class="btn btn-primary w-full">ثبت نام کاربر جدید</button>
        </div>
      </div>
    </form>
    <div class="mt-3 flex items-center justify-center gap-1.5">
      <span>حساب کاربری دارید؟</span>
      <RouterLink to="/auth/signin" class="font-bold">ورود به حساب کاربری</RouterLink>
    </div>
  </div>
</template>
