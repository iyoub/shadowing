<template>
  <div>
    <nav class="text-sm font-semibold text-center text-gray-700">
      <ul class="flex flex-wrap gap-1 -mb-px">
        <li v-for="(tab, index) in props.tabs" :key="index">
          <a
            href="#!"
            class="inline-block px-4 py-2 border border-gray-200 !border-b-0 rounded-t-lg"
            aria-current="page"
            :class="activeTab === index ? 'bg-white border-b-white' : 'bg-gray-100/80'"
            @click.prevent="changeTab(index)"
          >
            {{ tab.label }}
          </a>
        </li>
      </ul>
    </nav>
    <div class="pt-2">
      <slot :name="activeTabSlot" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'

type Tab = {
  label: string
  slot?: string
  disabled?: boolean
}

const props = defineProps({
  tabs: {
    type: Array as () => Tab[],
    required: true
  }
})

const activeTab = ref(0)
const activeTabSlot = computed(() => props.tabs[activeTab.value].slot)

const changeTab = (index: number) => {
  if (props.tabs[index].disabled) return
  activeTab.value = index
}
</script>
