<template>
  <nav class="backdrop-blur-lg bg-slate-100/20 sticky top-0 z-50">
    <div class="page-container">
      <div class="flex justify-between items-center py-4">
        <div>
          <h1 class="animate-text text-xl font-bold text-slate-600 mb-0">Shadowing Your CSS</h1>
          <p class="text-xs text-gray-500">Create beautiful CSS shadows in no time</p>
        </div>

        <ul class="flex gap-2">
          <li>
            <a href="#create" class="nav-item"> Create </a>
          </li>
          <li>
            <a href="#presets" class="nav-item"> Presets </a>
          </li>
          <li>
            <a href="https://github.com/iyoub/shadowing" target="_blank" class="nav-item">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-item {
  @apply font-bold text-slate-600 hover:bg-slate-100 px-4 py-2 rounded;
}
</style>
