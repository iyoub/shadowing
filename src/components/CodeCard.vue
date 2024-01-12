<template>
  <div class="flex text-xs card justify-center">
    <pre>
      box-shadow: {{ boxShadowBase }}
      </pre
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// using javascript to get the css styles of .box-shadow-base class
const boxShadowBase = computed(() => {
  const element = document.querySelector('.box-shadow-base') as HTMLElement
  if (!element) return ''
  return window.getComputedStyle(element).boxShadow
})
</script>
