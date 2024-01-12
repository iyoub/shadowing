<template>
  <highlightjs
    :language="props.language"
    :code="props.code"
    class="text-sm !rounded-lg overflow-hidden shadow-lg"
  />
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
</script>
