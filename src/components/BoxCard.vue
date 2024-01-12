<template>
  <div class="p-5 flex items-center self-center mx-auto h-fit w-fit relative">
    <button class="absolute top-0 left-0">
      <IconBulb />
    </button>
    <button class="absolute top-0 right-0">
      <IconBulb />
    </button>
    <button class="absolute bottom-0 left-0">
      <IconBulb />
    </button>
    <button class="absolute bottom-0 right-0">
      <IconBulb />
    </button>
    <div class="card-preview flex items-center justify-center">
      <div class="form-label">Preview</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBulb from './IconBulb.vue'
</script>
