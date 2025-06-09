<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Package Card -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="p-8 md:p-10">
          <!-- Package Title -->
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Complete Care Package</h2>
          
          <!-- Description -->
          <p class="text-gray-600 mb-6 leading-relaxed">
            This package is ideal for property owners who want us to handle everything from bookings
            and inquiries to basic maintenance while still focusing on essential services such as guest
            welcome, cleaning, and stocking amenities.
          </p>
          
          <!-- Included Features -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Complete Care Package Includes:</h3>
            <ul class="space-y-3">
              <li v-for="feature in features" :key="feature" class="flex items-start">
                <svg class="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Pricing -->
          <div class="border-t border-gray-200 pt-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Pricing for Complete Care Package:</h3>
            <p class="text-gray-900 font-medium">Commission: 20% of the booking fee</p>
            <p class="text-gray-500 text-sm mt-2">
              (you will still pay a commission on each booking to incentivise Blouberg Coast
              Escapes to drive bookings and provide high-quality service)
            </p>
          </div>
          
          <!-- CTA Button -->
          <button class="mt-8 w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300">
            Let's Chat!
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  "Booking & Inquiries Management",
  "Guest Welcome & Key Handover",
  "Property Inspection & Regular Maintenance Checks",
  "Basic Amenities",
  "Basic Maintenance"
];
</script>