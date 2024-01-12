<template>
  <div class="card box-shadow-base">
    <FormItem
      label="Size"
      :value="styles.size"
      :min="50"
      :max="300"
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
      :min="0"
      :max="200"
      type="range"
      @changeInput="updateStyle('radius', $event)"
    >
      <template #label-content>
        <span class="badge">{{ styles.radius }}px</span>
      </template>
    </FormItem>

    <div class="flex items-end gap-3">
      <FormItem
        label="Color"
        :value="styles.color"
        type="color"
        @changeInput="updateStyle('color', $event)"
      />
      <FormItem
        :value="styles.color"
        placeholder="#eeeeee"
        type="text"
        @changeInput="updateStyle('color', $event)"
      />
    </div>

    <FormItem
      label="Distance"
      :value="styles.distance"
      :min="-50"
      :max="50"
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
      :min="0"
      :max="100"
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
</script>
