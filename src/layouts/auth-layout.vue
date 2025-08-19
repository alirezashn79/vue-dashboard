<script setup lang="ts">
import LogoImage from '@/assets/images/Logo.png'
</script>

<template>
  <div class="flex items-center justify-center h-screen w-screen flex-col gap-6">
    <img height="68" width="201" :src="LogoImage" alt="Logo" />
    <div class="bg-white rounded-xl px-6 py-7 w-[418px]">
      <RouterView />
    </div>
  </div>
</template>
