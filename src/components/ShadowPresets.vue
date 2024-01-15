<template>
  <h2 class="title">Presets</h2>
  <p class="subtitle mb-6">Collection of smooth shadows that you can use for your next project.</p>

  <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="preset in SHADOW_PRESETS" :key="preset.shadow">
      <ShadowPresetsItem :preset="preset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SHADOW_PRESETS } from '@/globals'
import ShadowPresetsItem from './ShadowPresetsItem.vue'
</script>
