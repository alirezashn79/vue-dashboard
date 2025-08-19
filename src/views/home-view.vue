<script setup lang="ts">
import CostCard from '@/components/home/cost-card.vue'
import IncomeCard from '@/components/home/income-card.vue'
import ProductServicesCard from '@/components/home/product-services-card.vue'
import ProfitLossCard from '@/components/home/profit-loss-card.vue'
import PurchaseCard from '@/components/home/purchase-card.vue'
import SalesCard from '@/components/home/sales-card.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <PurchaseCard />
    <SalesCard />
    <CostCard />
    <IncomeCard />
    <ProductServicesCard />
    <ProfitLossCard />
  </div>
</template>
