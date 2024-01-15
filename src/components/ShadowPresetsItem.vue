<template>
  <TabPane :tabs="tabs">
    <template #preview>
      <div class="card-preset-preview">
        <div class="w-32 h-32 rounded-lg" :style="`box-shadow: ${props.preset.shadow};`"></div>
      </div>
    </template>
    <template #code>
      <div class="card-preset-preview">
        <HighlightCode :code="code" size="sm" />
      </div>
    </template>
  </TabPane>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HighlightCode from './HighlightCode.vue'
import TabPane from './TabPane.vue'

const props = defineProps({
  preset: {
    // object containing shadow key
    type: Object as () => { shadow: string },
    required: true
  }
})

const tabs = [
  {
    slot: 'preview',
    label: 'Preview'
  },
  {
    slot: 'code',
    label: 'Code'
  }
]

const code = computed(() => {
  return `box-shadow: ${props.preset.shadow};`
})
</script>

<style scoped>
.card-preset-preview {
  @apply bg-white rounded shadow p-6 min-h-60 flex items-center justify-center h-full;
}
</style>
