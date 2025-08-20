<script setup lang="ts">
import AppHeader from '@/components/base/app-header.vue'
import AppSidebar from '@/components/base/app-sidebar.vue'
</script>

<template>
  <div class="flex overflow-hidden h-screen">
    <AppSidebar />
    <main class="w-full">
      <AppHeader />
      <div class="size-full overflow-y-auto thin-scrollbar px-6 py-4 pb-[86px]">
        <RouterView />
      </div>
    </main>
  </div>
</template>
