<template>
  <div class="p-6 flex items-center self-center mx-auto h-fit w-fit relative bg-white">
    <button
      class="absolute top-0 left-0 rotate-[140deg]"
      :class="{ 'bulb-shadow': isAngleActive('top-left') }"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('top-left')"
    >
      <IconBulb :fill="isAngleActive('top-left') ? '#ffeb3b' : '#FAFAFA'" />
    </button>
    <button
      class="absolute top-0 right-0 rotate-[220deg]"
      :class="{ 'bulb-shadow': isAngleActive('top-right') }"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('top-right')"
    >
      <IconBulb :fill="isAngleActive('top-right') ? '#ffeb3b' : '#FAFAFA'" />
    </button>
    <button
      class="absolute bottom-0 left-0 rotate-[40deg]"
      :class="{ 'bulb-shadow': isAngleActive('bottom-left') }"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('bottom-left')"
    >
      <IconBulb :fill="isAngleActive('bottom-left') ? '#ffeb3b' : '#FAFAFA'" />
    </button>
    <button
      class="absolute bottom-0 right-0 rotate-[320deg]"
      :class="{ 'bulb-shadow': isAngleActive('bottom-right') }"
      aria-label="Set active angle"
      title="Set active angle"
      @click="updateActiveAngle('bottom-right')"
    >
      <IconBulb :fill="isAngleActive('bottom-right') ? '#ffeb3b' : '#FAFAFA'" />
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
