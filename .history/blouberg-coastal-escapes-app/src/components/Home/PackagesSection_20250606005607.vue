<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Offerings
        </h2>
      </div>

      <!-- Packages Grid with Circular Highlights & Stagger -->
      <div class="grid gap-12 md:grid-cols-2 mb-20">
        <!-- Complete Care Package Card -->
        <div class="relative">
          <!-- Circular backdrop -->
          <div class="absolute -top-10 -left-10 w-36 h-36 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
            <h3 class="text-3xl font-semibold text-[#1D4E4F]">Complete Care Package</h3>
            <!-- Content... -->
          </div>
        </div>

        <!-- Premium Care Package Card (staggered) -->
        <div class="relative md:mt-8">
          <div class="absolute -top-10 -right-10 w-36 h-36 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
            <h3 class="text-3xl font-semibold text-[#1D4E4F]">Premium Care Package</h3>
            <!-- Content... -->
          </div>
        </div>
      </div>

      <!-- Services Grid with Stagger -->
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Cleaning Services Card -->
        <div class="relative">
          <div class="absolute -top-8 -left-8 w-28 h-28 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">Cleaning Services</h4>
            <!-- Content... -->
          </div>
        </div>
        <!-- Maintenance Services Card (staggered) -->
        <div class="relative md:mt-8">
          <div class="absolute -top-8 -right-8 w-28 h-28 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500">
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">Maintenance Services</h4>
            <!-- Content... -->
          </div>
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
/* Fade transition */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
