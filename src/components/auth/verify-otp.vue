<script setup lang="ts">
import { MoveLeft } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'
import VOtpInput from 'vue3-otp-input'

const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null)
const bindModal = ref('')
const seconds = ref(60)
const intervalId = ref<number | null>(null)

const startTimer = () => {
  seconds.value = 60
  intervalId.value = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
    } else {
      clearInterval(intervalId.value!)
    }
  }, 1000)
}

const resendCode = () => {
  if (seconds.value === 0) {
    // کد بازفرستادن را اینجا پیاده‌سازی کنید
    console.log('Resending code...')
    startTimer()
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
})

const handleOnComplete = (value: string) => {
  console.log('OTP completed: ', value)
}

const handleOnChange = (value: string) => {
  console.log('OTP changed: ', value)
}
</script>

<template>
  <div>
    <div class="flex items-start w-full justify-between">
      <h1 class="font-bold text-[20px] leading-none mb-6">دریافت کد</h1>
      <RouterLink
        to="/auth/signup"
        class="text-danger text-xs flex items-center gap-1 group leading-none"
      >
        <span> مرحله قبل </span>
        <MoveLeft :stroke-width="1" class="group-hover:-translate-x-1 transition-transform" />
      </RouterLink>
    </div>

    <p class="text-dark font-light mt-6">
      کد 5 رقمی به شماره موبایل شما (۰۹۱۵۵۵۱۲۶۲۰) ارسال گردید...
    </p>

    <div class="flex items-center justify-center mt-6">
      <v-otp-input
        dir="ltr"
        ref="otpInput"
        input-classes="otp-input"
        separator=" "
        inputType="letter-numeric"
        :num-inputs="5"
        v-model:value="bindModal"
        :should-auto-focus="true"
        :should-focus-order="true"
        @on-change="handleOnChange"
        @on-complete="handleOnComplete"
        :placeholder="['_', '_', '_', '_', '_']"
      />
    </div>

    <p class="font-light mt-6">
      <span v-if="seconds > 0"
        >ارسال مجدد کد : <span class="font-bold">{{ seconds }} ثانیه</span></span
      >
      <button v-else @click="resendCode" class="text-primary font-bold">ارسال مجدد کد</button>
    </p>

    <div class="mt-6">
      <button type="submit" class="btn btn-primary w-full">ورود به حساب کاربری</button>
    </div>
  </div>
</template>

<style>
.otp-input-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.otp-input {
  width: 62px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #f5f6fa;
  text-align: center;
  background-color: #f5f6fa;
  outline: none;
}
.otp-input::placeholder {
  color: #bababa;
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.otp-input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
  color: #243a73;
}
</style>
