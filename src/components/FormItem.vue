<template>
  <div class="form-group">
    <div class="form-label !flex items-center flex-wrap gap-2">
      <label :for="props.value" v-if="props.label">{{ props.label }}</label>
      <slot name="label-content" />
    </div>

    <input
      :id="props.label ? formId : undefined"
      :value="props.value"
      :type="props.type"
      :min="props.min"
      :max="props.max"
      :class="formClass"
      :placeholder="props.placeholder"
      @input="emit('changeInput', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String
  },
  value: {
    type: String
  },
  placeholder: {
    type: String
  },
  type: {
    type: String,
    default: 'text' // text, color, range
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
})

const emit = defineEmits(['changeInput'])

const formId = computed(() => `form-${props.label?.toLowerCase()?.replace(' ', '-')}`)

const formClass = computed(() => [
  {
    'form-input-color': props.type === 'color',
    'form-input-range': props.type === 'range',
    'form-input-text': props.type === 'text'
  }
])
</script>
