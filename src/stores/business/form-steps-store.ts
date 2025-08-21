import FormStepFour from '@/components/business/form-step-four.vue'
import FormStepOne from '@/components/business/form-step-one.vue'
import FormStepThree from '@/components/business/form-step-three.vue'
import FormStepTwo from '@/components/business/form-step-two.vue'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useBusinessStep = defineStore('businessStep', () => {
  const currentStepNumber = ref(1)
  const completedSteps = ref<Set<number>>(new Set())

  const stepsConfig = [
    {
      step: 1,
      title: 'افزودن کسب و کار',
      component: FormStepOne,
      hasNext: true,
    },
    {
      step: 2,
      title: 'اقتصادی',
      component: FormStepTwo,
      hasNext: true,
    },
    {
      step: 3,
      title: 'سال مالی',
      component: FormStepThree,
      hasNext: true,
    },
    {
      step: 4,
      title: 'تماس',
      component: FormStepFour,
      hasNext: false,
    },
  ]

  const steps = computed(() =>
    stepsConfig.map((step) => ({
      ...step,
      isCurrent: step.step === currentStepNumber.value,
      isComplete: completedSteps.value.has(step.step),
    })),
  )

  const currentStep = computed(() => steps.value.find((step) => step.isCurrent))

  const isLastStep = computed(() => (currentStep.value ? !currentStep.value.hasNext : false))

  const isFirstStep = computed(() => currentStepNumber.value === 1)

  const nextStepNumber = computed(() => {
    const currentIndex = stepsConfig.findIndex((step) => step.step === currentStepNumber.value)
    return currentIndex < stepsConfig.length - 1 ? stepsConfig[currentIndex + 1].step : null
  })

  const previousStepNumber = computed(() => {
    const currentIndex = stepsConfig.findIndex((step) => step.step === currentStepNumber.value)
    return currentIndex > 0 ? stepsConfig[currentIndex - 1].step : null
  })

  const progressPercentage = computed(() =>
    Math.round((completedSteps.value.size / stepsConfig.length) * 100),
  )

  const setCurrentStep = (step: number) => {
    if (step >= 1 && step <= stepsConfig.length) {
      for (let i = 1; i < step; i++) {
        completedSteps.value.add(i)
      }
      completedSteps.value.delete(step)
      currentStepNumber.value = step
    }
  }

  const setCompleteSteps = (step: number) => {
    for (let i = 1; i <= step; i++) {
      completedSteps.value.add(i)
    }
    if (completedSteps.value.has(currentStepNumber.value) && nextStepNumber.value) {
      currentStepNumber.value = nextStepNumber.value
    }
  }

  const nextStep = () => {
    if (nextStepNumber.value) {
      completedSteps.value.add(currentStepNumber.value)
      currentStepNumber.value = nextStepNumber.value
    }
  }

  const previousStep = () => {
    if (previousStepNumber.value) {
      completedSteps.value.delete(currentStepNumber.value)
      completedSteps.value.delete(previousStepNumber.value)
      currentStepNumber.value = previousStepNumber.value
    }
  }

  const completeCurrentStep = () => {
    completedSteps.value.add(currentStepNumber.value)
    if (nextStepNumber.value) {
      currentStepNumber.value = nextStepNumber.value
    }
  }

  const resetSteps = () => {
    currentStepNumber.value = 1
    completedSteps.value.clear()
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  return {
    steps,
    currentStep,

    isLastStep,
    isFirstStep,
    progressPercentage,
    nextStepNumber,
    previousStepNumber,

    setCurrentStep,
    setCompleteSteps,
    nextStep,
    previousStep,
    completeCurrentStep,
    resetSteps,
    goToStep,
  }
})
