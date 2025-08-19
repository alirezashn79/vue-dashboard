<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { ChevronDown, LogOut, Menu, Search, User2 } from 'lucide-vue-next'
import AppDrawer from '../shared/app-drawer.vue'
import { ref } from 'vue'

const sidebarStore = useSidebarStore()
const isOpenNotif = ref(false)
const openNotif = () => (isOpenNotif.value = true)
const closeNotif = () => (isOpenNotif.value = false)
</script>

<template>
  <header class="h-[70px] border-b border-b-primary/30 bg-white w-full p-4">
    <div class="flex items-center justify-between h-full">
      <div class="flex items-center gap-4">
        <button @click="sidebarStore.toggle" class="cursor-pointer size-6">
          <Menu />
        </button>

        <div class="relative">
          <input
            type="search"
            class="input h-10 rounded-3xl text-xs ps-12 w-72 outline-0"
            placeholder="جستجو بر اساس..."
          />
          <div class="absolute start-4 bottom-1/2 translate-y-1/2">
            <Search class="text-dark/50 size-5" />
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3.5">
        <button @click="openNotif" class="btn p-0 relative bell">
          <img src="../../assets/images/alert-icon.png" alt="alert" class="size-5" />
          <div
            class="absolute -top-2 -start-2 size-4 rounded-full bg-warning text-xs text-white font-sans flex items-center justify-center"
          >
            3
          </div>
        </button>

        <button class="relative min-w-28 group">
          <div
            class="btn btn-primary z-10 rounded-[22px] hover:bg-primary hover:text-white py-2.5 px-3 w-full text-[13px] font-normal flex items-center gap-1"
          >
            <User2 class="size-5" />
            <span> علیرضا شریفی نسب </span>

            <ChevronDown class="size-4 group-hover:rotate-180 transition-all" />
          </div>

          <div
            class="absolute w-full delay-100 -translate-y-4 text-start rounded-b-[22px] transition-all group-hover:pt-5 group-hover:pb-4 group-hover:px-3 bg-primary text-white text-xs font-medium h-0 overflow-hidden group-hover:h-16"
          >
            <RouterLink to="/auth/signin" class="py-2 flex items-center gap-2">
              <LogOut class="size-4" />
              <span>خروج</span>
            </RouterLink>
          </div>
        </button>
      </div>
    </div>

    <AppDrawer :is-open="isOpenNotif" v-on:close="closeNotif" />
  </header>
</template>

<style scoped>
.bell {
  display: inline-block;
  animation: bell-ring 4s ease-in-out infinite;
}
@keyframes bell-ring {
  0% {
    transform: rotate(0);
  }
  2% {
    transform: rotate(12deg);
  }
  4% {
    transform: rotate(-10deg);
  }
  6% {
    transform: rotate(8deg);
  }
  8% {
    transform: rotate(-6deg);
  }
  10% {
    transform: rotate(3deg);
  }
  12% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bell {
    animation: none;
  }
}
</style>
