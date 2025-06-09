<template>
  <!-- Add overflow-hidden to prevent scrollbars -->
  <div id="app" class="h-full w-full overflow-hidden">
    <Navbar />

    <router-view class="h-full w-full" />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>