<template>
  <main class="min-h-screen bg-neutral-100/20 flex">
    <div class="container mx-auto px-6 flex flex-col">
      <NavBar />
      <div class="my-auto">
        <div class="grid grid-cols-2 gap-12 mb-6">
          <BoxCard />
          <ControlsCard />
        </div>
        <CodeCard />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BoxCard from '@/components/BoxCard.vue'
import ControlsCard from '@/components/ControlsCard.vue'
import CodeCard from './components/CodeCard.vue'
import NavBar from './components/NavBar.vue'
</script>
