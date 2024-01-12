<template>
  <main class="min-h-screen bg-neutral-100/20 flex">
    <div class="container mx-auto px-6 flex flex-col">
      <NavBar />
      <div class="my-auto py-12">
        <div class="grid grid-cols-2 gap-12 mb-12">
          <BoxCard />
          <ControlsCard />
        </div>
        <div class="flex justify-center w-auto sticky bottom-0">
          <HighlightCode :code="code" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BoxCard from '@/components/BoxCard.vue'
import ControlsCard from '@/components/ControlsCard.vue'
import HighlightCode from './components/HighlightCode.vue'
import NavBar from './components/NavBar.vue'
import { code } from './states/styles'
</script>
