export interface SelectOption {
  value: string | number
  label: string
  [key: string]: string | number
}

export interface SearchableSelectEmits {
  'update:modelValue': [value: string | number | null]
  change: [option: SelectOption | null]
}

export interface SearchableSelectProps {
  modelValue?: string | number | null
  options: SelectOption[]
  placeholder?: string
  valueKey?: string
  labelKey?: string
  searchable?: boolean
}
