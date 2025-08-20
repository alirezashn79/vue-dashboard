<script setup lang="ts">
import LogoImage from '@/assets/images/Logo.png'
import { useSidebarStore } from '@/stores/sidebar'
import { Banknote, CalendarCheck, CalendarRange, Grid2x2, Home, ListChecks } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
const sidebarStore = useSidebarStore()

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <aside
    class="h-screen overflow-hidden bg-white transition-all shadow"
    :class="sidebarStore.isOpen ? 'w-60' : 'w-16'"
  >
    <div class="overflow-y-auto flex flex-col h-full px-3">
      <div class="mt-3">
        <img :src="LogoImage" alt="logo" class="h-14 mx-auto" />
      </div>

      <ul class="mt-5 space-y-3">
        <li>
          <RouterLink to="/" class="link" :class="{ active: isActive('/') }">
            <Home />

            <span :class="!sidebarStore.isOpen && 'hidden'"> داشبورد </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/businesses" class="link" :class="{ active: isActive('/businesses') }">
            <ListChecks />
            <span :class="!sidebarStore.isOpen && 'hidden'"> کسب و کار ها </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="link">
            <Grid2x2 />

            <span :class="!sidebarStore.isOpen && 'hidden'"> کالاها و خدمات </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="link">
            <CalendarRange />

            <span :class="!sidebarStore.isOpen && 'hidden'"> گزارشات </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="link">
            <Banknote />

            <span :class="!sidebarStore.isOpen && 'hidden'"> حسابداری </span>
          </RouterLink>
        </li>
      </ul>
      <button
        class="mb-4 flex items-center gap-3 mt-auto btn btn-primary-opacity font-medium rounded-[5px] ps-5 py-2.5"
        :class="!sidebarStore.isOpen && 'hidden'"
      >
        <CalendarCheck class="size-5 shrink-0" />
        <span class="">امروز : {{ new Date().toLocaleDateString('fa-IR') }}</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  padding: 6px 10px;
  white-space: nowrap;
}
.link > svg {
  height: 20px;
  width: 20px;
  flex-shrink: 0;
}
.link.active {
  background-color: #243a73;
  padding: 10px;
  color: white;
  border-radius: 15px;
}
</style>
