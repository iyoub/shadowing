<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 36 36"
  >
    <path
      fill="#444444"
      d="M23.86 29.15H12.11a.8.8 0 1 0 0 1.6h11.75a.8.8 0 0 0 0-1.6"
      class="clr-i-solid clr-i-solid-path-1"
    />
    <path
      fill="#444444"
      stroke="#444444"
      stroke-width="2"
      d="M22 32.15h-8a.8.8 0 1 0 0 1.6h8a.8.8 0 1 0 0-1.6"
      class="clr-i-solid clr-i-solid-path-2"
    />
    <path
      :fill="props.fill"
      stroke="#444444"
      stroke-width="1"
      d="M18 2.25a11 11 0 0 0-11 11a10.68 10.68 0 0 0 1 4.63a16.36 16.36 0 0 0 1.12 1.78a17 17 0 0 1 2 3.47a16.19 16.19 0 0 1 .59 4h5.69v-5.52l-2.86-3.13l3-3a.8.8 0 0 1 1.13 1.13l-1.89 1.89L19 21v6.17h5.3a16.19 16.19 0 0 1 .59-4a17 17 0 0 1 2-3.47A16.31 16.31 0 0 0 28 17.86a10.68 10.68 0 0 0 1-4.63A11 11 0 0 0 18 2.25m.45 9.75l-2.73 2.73a.8.8 0 1 1-1.13-1.13l2.73-2.73A.8.8 0 1 1 18.45 12"
      class="clr-i-solid clr-i-solid-path-3"
    />
    <path fill="none" d="M0 0h36v36H0z" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '24'
  },
  height: {
    type: String,
    default: '24'
  },
  fill: {
    type: String,
    default: 'currentColor'
  }
})
</script>
