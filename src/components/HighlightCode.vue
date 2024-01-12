<template>
  <div class="relative">
    <highlightjs
      :language="props.language"
      :code="props.code"
      class="text-sm !rounded-lg overflow-hidden shadow-lg"
    />
    <button
      title="Copy code"
      class="absolute top-2 -right-2 -translate-y-full btn-icon icon-copy"
      @click="copyCode($event)"
      aria-label="Copy code"
    ></button>
  </div>
</template>

<script setup lang="ts">
import 'highlight.js/styles/nord.min.css'
import 'highlight.js/lib/common'

const props = defineProps({
  language: {
    type: String,
    default: 'css'
  },
  code: {
    type: String,
    default: ''
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
</script>
