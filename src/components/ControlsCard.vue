<template>
  <div class="border p-4">
    <div class="form-group">
      <label for="cardSize" class="form-label">Size</label>
      <input
        type="range"
        min="50"
        max="300"
        id="cardSize"
        :value="styles.size"
        @input="updateStyle('size', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div class="form-group">
      <label for="cardRadius" class="form-label">Radius</label>
      <input
        type="range"
        min="0"
        max="200"
        id="cardRadius"
        :value="styles.radius"
        @input="updateStyle('radius', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div class="form-group">
      <label for="cardShadowColor" class="form-label">Shadow color</label>
      <input
        id="cardShadowColor"
        type="color"
        :value="styles.color"
        @input="updateStyle('color', ($event.target as HTMLInputElement).value)"
      />
      <input
        type="text"
        id="cardShadowColorText"
        :value="styles.color"
        @input="updateStyle('color', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div class="form-group">
      <label for="cardDistance" class="form-label">Distance</label>
      <input
        type="range"
        min="2"
        max="60"
        id="cardDistance"
        :value="styles.distance"
        @input="updateStyle('distance', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div class="form-group">
      <label for="cardBlur" class="form-label">Blur</label>
      <input
        type="range"
        min="0"
        max="100"
        id="cardBlur"
        :value="styles.blur"
        @input="updateStyle('blur', ($event.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { styles, updateStyle } from '@/states/styles'
</script>
