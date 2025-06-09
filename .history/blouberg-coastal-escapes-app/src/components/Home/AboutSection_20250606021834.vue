<template>
  <section class="relative bg-gradient-to-br from-white to-blue-50 py-28 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-blue-50 transform skew-x-12 z-0"></div>
    <div class="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-blue-100 opacity-70 z-0"></div>
    <div class="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-yellow-100 z-0"></div>
    
    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      <!-- Section header -->
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="text-blue-600 font-semibold tracking-wider">OUR JOURNEY</span>
          <div class="h-1 w-16 bg-blue-500 mx-auto mt-2"></div>
        </div>
        <h2 class="text-4xl md:text-5xl font-serif font-light text-gray-800">
          Crafting <span class="italic font-normal">Exceptional</span> Experiences
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Story Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div class="flex items-center mb-6">
            <div class="text-blue-600 bg-blue-50 p-3 rounded-lg mr-4">
              <MapPinIcon class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wider text-gray-800">OUR STORY</h3>
          </div>
          <p class="text-gray-600 leading-relaxed mb-4">
            Originally from Johannesburg, now based in beautiful Bloubergstrand.
          </p>
          <p class="text-gray-600 leading-relaxed">
            With years of experience in maintenance and medical reception, coupled with practice management expertise, we combined our skills to launch a property management and holiday hosting business 4 years ago, driven by a desire for a simpler, more fulfilling lifestyle.
          </p>
        </div>

        <!-- Skills Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div class="flex items-center mb-6">
            <div class="text-blue-600 bg-blue-50 p-3 rounded-lg mr-4">
              <BriefcaseIcon class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wider text-gray-800">SKILLS & EXPERIENCE</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            For four years, we have managed holiday apartments with a focus on exceptional service and memorable stays. Backed by over 20 years of experience in maintenance, carpentry, and management, we ensure every property is maintained to the highest standards.
          </p>
          <div class="mt-6 grid grid-cols-2 gap-2">
            <span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm text-center">Property Management</span>
            <span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm text-center">Maintenance</span>
            <span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm text-center">Guest Relations</span>
            <span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm text-center">Operations</span>
          </div>
        </div>

        <!-- Personal Touch Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <div class="flex items-center mb-6">
            <div class="text-blue-600 bg-blue-50 p-3 rounded-lg mr-4">
              <HeartIcon class="h-8 w-8" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wider text-gray-800">PERSONAL TOUCH</h3>
          </div>
          <p class="text-gray-600 leading-relaxed mb-4">
            Our passion lies in connecting with people and sharing the unique charm of our region.
          </p>
          <p class="text-gray-600 leading-relaxed">
            We take pride in showcasing Cape Town's beauty and continuously seek innovative ways to enhance guest experiences through authentic local connections and personalized service.
          </p>
          <div class="mt-6 flex items-center">
            <div class="flex -space-x-2">
              <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Team member">
              <img class="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="Team member">
            </div>
            <span class="ml-3 text-gray-500 text-sm">Meet our team</span>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-24 text-center">
        <div class="inline-block bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-1 shadow-lg">
          <button class="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full text-lg hover:bg-transparent hover:text-white transition-all duration-300">
            Discover Our Properties
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { MapPinIcon, BriefcaseIcon, HeartIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    MapPinIcon,
    BriefcaseIcon,
    HeartIcon
  }
}
</script>