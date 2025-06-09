<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto relative">
      <!-- Section Title -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Offerings
        </h2>
      </div>

      <!-- Connector Lines SVG -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none">
        <!-- Horizontal connector between the two package cards -->
        <path d="M 20% 30% C 40% 30%, 60% 30%, 80% 30%"
              stroke="#6BD4D4" stroke-width="2" stroke-dasharray="6 6" fill="none" opacity="0.3" />
        <!-- Vertical connector from packages down to services -->
        <path d="M 50% 40% L 50% 60%"
              stroke="#6BD4D4" stroke-width="2" stroke-dasharray="6 6" fill="none" opacity="0.3" />
      </svg>

      <!-- Packages Grid -->
      <div class="grid gap-12 md:grid-cols-2 mb-20 relative">
        <!-- Complete Care Package Card -->
        <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
          <!-- content omitted for brevity -->
        </div>

        <!-- Premium Care Package Card -->
        <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
          <!-- content omitted for brevity -->
        </div>
      </div>

      <!-- Services Grid -->
      <div class="mb-12 text-center relative">
        <h3 class="text-3xl font-semibold text-[#1D4E4F]">Additional á la Carte Services</h3>
      </div>
      <div class="grid gap-12 md:grid-cols-2 relative">
        <!-- Cleaning Services Card -->
        <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
          <!-- content omitted for brevity -->
        </div>

        <!-- Maintenance Services Card -->
        <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
          <!-- content omitted for brevity -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const expandedA = ref(false);
const expandedB = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
