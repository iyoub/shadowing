<template>
  <div
    class="border h-8 w-8 rounded-full cursor-pointer hover:scale-[1.1] hover:shadow transition-all duration-100"
    :style="{ backgroundColor: props.color }"
    @click="emit('selectColor', props.color)"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['selectColor'])
</script>
