<template>
  <div>
    <button
      @click="openModal"
      class="btn btn-success py-2 px-3 flex gap-1 items-center font-medium text-xs"
    >
      <Plus class="size-3.5" />
      افزودن کسب و کار
    </button>

    <AppModal v-model:modal-value="isModalOpen" title="افزودن کسب و کار جدید">
      <div>
        <div class="step__container">
          <template v-for="(step, index) in businessStep.steps" :key="step.step">
            <div
              class="step"
              :class="{
                step__current: step.isCurrent,
                step__complete: step.isComplete,
              }"
            >
              <div class="step__icon">
                <div class="step__icon__center"></div>
                <div class="step__icon_check">
                  <Check stroke-width="4" class="size-6" />
                </div>
              </div>
              <span class="step__title">{{ step.title }}</span>
            </div>

            <div
              v-if="index < businessStep.steps.length - 1"
              class="step__line"
              :class="{ 'step__line--active': step.isComplete }"
            ></div>
          </template>
        </div>

        <div class="mt-8">
          <component v-if="businessStep.currentStep" :is="businessStep.currentStep.component" />
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-8 flex items-center">
          <button
            v-if="!businessStep.isFirstStep"
            class="btn btn-primary-opacity me-auto h-12 font-semibold"
            @click="businessStep.previousStep"
          >
            مرحله قبل
          </button>

          <button
            v-if="!businessStep.isLastStep"
            class="btn btn-primary ms-auto h-12 flex items-center gap-1 font-semibold"
            @click="businessStep.nextStep"
          >
            ثبت و مرحله بعدی
            <MoveLeft class="w-4" />
          </button>

          <button
            v-else
            class="btn btn-success ms-auto h-12 flex items-center gap-1 font-semibold"
            @click="handleFinalSubmit"
          >
            <CheckCircle2 class="size -5" />
            ثبت و تایید اطلاعات
          </button>
        </div>
      </div>
    </AppModal>
  </div>
</template>

<script setup lang="ts">
import { useBusinessStep } from '@/stores/business/form-steps-store'
import { Check, CheckCircle2, MoveLeft, Plus } from 'lucide-vue-next'
import { ref } from 'vue'
import AppModal from '../shared/app-modal.vue'

const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

const businessStep = useBusinessStep()

function handleFinalSubmit() {
  businessStep.setCompleteSteps(businessStep.currentStep!.step)

  console.log('تمام مراحل تکمیل شد!')

  isModalOpen.value = false
}
</script>

<style scoped>
.step__container {
  width: 100%;
  margin: auto;
  max-width: 600px;
  padding-inline: 60px;
  display: flex;
  justify-content: space-between;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;
  width: 42px;
  flex-shrink: 0;
}

.step__icon {
  height: 42px;
  width: 42px;
  border-radius: 100%;
  border: 1px solid #243a73;
  background-color: color-mix(in oklab, #243a73 10%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid transparent;
  box-sizing: border-box;
  position: relative;
}

.step .step__icon_check {
  display: none;
}

.step__current .step__icon_check {
  display: none;
}

.step__complete .step__icon_check {
  display: block;
  color: white;
}

.step__icon__center {
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background-color: transparent;
}

.step__title {
  font-size: 13px;
  font-weight: 600;
  color: color-mix(in oklab, #000000 70%, transparent);
  white-space: nowrap;
  text-align: center;
}

.step__line {
  height: 1px;
  background-color: color-mix(in oklab, #000000 15%, transparent);
  flex-grow: 1;
  margin-top: 21px;
  border-radius: 1px;
}

.step__line--active {
  background-color: #243a73;
  height: 3px;
}

.step__current .step__icon {
  border: 5px solid #243a73;
  background-color: transparent;
}

.step__current .step__title {
  color: #000000;
}

.step__current .step__icon__center {
  background-color: #243a73;
}

.step__complete .step__icon {
  border-color: transparent;
  background-color: #243a73;
}

.step__complete .step__icon__center {
  display: none;
}

.step__complete .step__title {
  color: #243a73;
}
</style>
