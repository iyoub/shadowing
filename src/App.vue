<template>
  <div class="grid grid-cols-2">
    <BoxCard />
    <ControlsCard />
  </div>
  <CodeCard />
</template>

<script setup lang="ts">
import BoxCard from '@/components/BoxCard.vue'
import ControlsCard from '@/components/ControlsCard.vue'
import CodeCard from './components/CodeCard.vue'
</script>
