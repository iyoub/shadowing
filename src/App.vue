<template>
  <main class="min-h-screen bg-neutral-100/10 flex flex-col">
    <NavBar />
    <div class="page-container flex flex-col">
      <section class="my-12" id="create">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-12 mb-12">
          <BoxCard />
          <ControlsCard />
        </div>
        <div class="flex justify-center w-auto sticky bottom-2">
          <HighlightCode :code="code" />
        </div>
      </section>

      <section class="my-12" id="presets">
        <ShadowPresets />
      </section>
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import BoxCard from '@/components/BoxCard.vue'
import ControlsCard from '@/components/ControlsCard.vue'
import HighlightCode from './components/HighlightCode.vue'
import NavBar from './components/NavBar.vue'
import { code } from './states/styles'
import ShadowPresets from './components/ShadowPresets.vue'
import Footer from './components/Footer.vue'
</script>
