<template>
  <div
    class="border ring-0 h-8 w-8 rounded-full cursor-pointer hover:scale-[1.1] transition-all duration-100"
    :class="{ '!ring-2 ring-slate-500': isColorSelected }"
    :style="{ backgroundColor: props.color }"
    @click="emit('selectColor', props.color)"
  />
</template>

<script setup lang="ts">
import { styles } from '@/states/styles'
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['selectColor'])

const isColorSelected = computed(() => styles.value.color === props.color)
</script>
