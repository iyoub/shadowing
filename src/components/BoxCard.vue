<template>
  <div class="p-6 flex items-center self-center mx-auto h-fit w-fit relative">
    <button
      class="absolute top-0 left-0 rotate-[140deg]"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('top-left')"
    >
      <IconBulb :fill="isAngleActive('top-left') ? 'yellow' : 'white'" />
    </button>
    <button
      class="absolute top-0 right-0 rotate-[220deg]"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('top-right')"
    >
      <IconBulb :fill="isAngleActive('top-right') ? 'yellow' : 'white'" />
    </button>
    <button
      class="absolute bottom-0 left-0 rotate-[40deg]"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('bottom-left')"
    >
      <IconBulb :fill="isAngleActive('bottom-left') ? 'yellow' : 'white'" />
    </button>
    <button
      class="absolute bottom-0 right-0 rotate-[320deg]"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('bottom-right')"
    >
      <IconBulb :fill="isAngleActive('bottom-right') ? 'yellow' : 'white'" />
    </button>

    <div class="card-preview flex items-center justify-center">
      <div class="form-label">Preview</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBulb from './IconBulb.vue'
import { activeAngle, updateActiveAngle } from '../states/styles'

const isAngleActive = (angle: string) => activeAngle.value === angle
</script>
