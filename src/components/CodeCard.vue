<template>
  <div class="border text-xs p-2">
    <pre>
.card-preview {
  border-radius: {{ styles.radius }}px;
}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { styles } from '@/states/styles'
</script>
