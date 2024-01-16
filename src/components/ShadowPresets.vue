<template>
  <h2 class="title">Shadow Presets</h2>
  <p class="subtitle mb-6">Choose from a list of pre-defined shadows</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="preset in SHADOW_PRESETS" :key="preset.shadow">
      <ShadowPresetsItem :preset="preset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SHADOW_PRESETS } from '@/globals'
import ShadowPresetsItem from './ShadowPresetsItem.vue'
</script>
