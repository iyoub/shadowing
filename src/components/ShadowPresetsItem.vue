<template>
  <TabPane :tabs="tabs">
    <template #preview>
      <div class="card-preset-preview">
        <div
          class="w-32 h-32 rounded-lg flex items-center justify-center cursor-pointer transition duration-200 ease-in-out scale-100 hover:scale-95"
          :style="`box-shadow: ${props.preset.shadow};`"
          @click="copyCode"
        >
          <span class="text-[11px] text-neutral-400 text-center leading-tight" v-html="boxText">
          </span>
        </div>
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
import { computed, ref } from 'vue'
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

const boxText = ref<string>('Click to<br />Copy')
const code = computed(() => {
  return `box-shadow: ${props.preset.shadow};`
})

const copyCode = () => {
  navigator.clipboard.writeText(code.value)
  boxText.value = 'Copied ✅'
  setTimeout(() => {
    boxText.value = 'Click to<br />Copy'
  }, 1000)
}
</script>
