<template>
  <div class="card box-shadow-base">
    <FormItem
      label="Size"
      :value="styles.size"
      :min="size.min"
      :max="size.max"
      type="range"
      @changeInput="updateStyle('size', $event)"
    >
      <template #label-content>
        <span class="badge">{{ styles.size }}px</span>
      </template>
    </FormItem>

    <FormItem
      label="Radius"
      :value="styles.radius"
      :min="radius.min"
      :max="radius.max"
      type="range"
      @changeInput="updateStyle('radius', $event)"
    >
      <template #label-content>
        <span class="badge">{{ styles.radius }}px</span>
      </template>
    </FormItem>

    <label class="form-label">Shadow Color</label>
    <div class="flex items-end gap-3">
      <FormItem :value="styles.color" type="color" @changeInput="updateStyle('color', $event)" />
      <FormItem
        :value="styles.color"
        placeholder="#eeeeee"
        type="text"
        @changeInput="updateStyle('color', $event)"
      />
    </div>

    <details class="group mb-4 border px-4 py-2 rounded">
      <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
        <span class="form-label">Recommended Colors</span>
        <span class="transition group-open:rotate-180">
          <svg
            fill="none"
            width="20"
            height="20"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <div class="flex flex-wrap gap-2 mt-3 group-open:animate-fadeIn">
        <ColorBoxItem
          v-for="color in DEFAULT_COLORS"
          :key="color"
          :color="color"
          @selectColor="updateStyle('color', color)"
        />
      </div>
    </details>

    <FormItem
      label="Distance"
      :value="styles.distance"
      :min="distance.min"
      :max="distance.max"
      type="range"
      @changeInput="updateStyle('distance', $event)"
    >
      <template #label-content>
        <span class="badge">{{ styles.distance }}px</span>
      </template>
    </FormItem>

    <FormItem
      label="Blur"
      :value="styles.blur"
      :min="blur.min"
      :max="blur.max"
      type="range"
      @changeInput="updateStyle('blur', $event)"
    >
      <template #label-content>
        <span class="badge">{{ styles.blur }}px</span>
      </template>
    </FormItem>
  </div>
</template>

<script setup lang="ts">
import { styles, updateStyle } from '@/states/styles'
import FormItem from './FormItem.vue'
import ColorBoxItem from './ColorBoxItem.vue'
import { RANGE_VALUES, DEFAULT_COLORS } from '@/globals'

const { blur, distance, radius, size } = RANGE_VALUES
</script>
