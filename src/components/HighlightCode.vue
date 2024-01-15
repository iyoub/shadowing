<template>
  <div class="relative">
    <highlightjs
      :language="props.language"
      :code="props.code"
      class="overflow-hidden shadow-lg"
      :class="getHighlightClass"
    />
    <button
      title="Copy code"
      class="absolute top-2 -right-2 -translate-y-full btn-icon icon-copy"
      :class="getButtonClass"
      @click="copyCode($event)"
      aria-label="Copy code"
    ></button>
  </div>
</template>

<script setup lang="ts">
import 'highlight.js/styles/nord.min.css'
import 'highlight.js/lib/common'
import { computed } from 'vue'

const props = defineProps({
  language: {
    type: String,
    default: 'css'
  },
  code: {
    type: String,
    default: ''
  },
  size: {
    // size is eihther 'sm', 'md', or 'lg'
    type: String,
    default: 'md'
  }
})

const copyCode = (e: MouseEvent) => {
  navigator.clipboard.writeText(props.code)
  const clicked = e.target as HTMLElement
  // adding a success class for 1s
  clicked.classList.add('success')
  setTimeout(() => {
    clicked.classList.remove('success')
  }, 1000)
}

const getHighlightClass = computed(() => {
  const size = props.size
  return {
    '!rounded-lg text-lg': size === 'lg',
    '!rounded-lg text-sm': size === 'md',
    '!rounded  text-xs': size === 'sm'
  }
})

const getButtonClass = computed(() => {
  const size = props.size
  return {
    '!text-[11px] !p-1': size === 'sm'
  }
})
</script>
