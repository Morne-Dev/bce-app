<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Offerings
        </h2>
      </div>

      <!-- Interactive Carousel -->
      <div
        ref="carousel"
        class="relative flex space-x-8 overflow-x-auto scroll-snap-x mandatory pb-8"
        @mousedown="startDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
        @mousemove="onDrag"
        style="perspective: 1000px;"
      >
        <div
          v-for="(card, idx) in cards"
          :key="idx"
          class="flex-shrink-0 w-[300px] scroll-snap-start"
          @mousemove="tilt($event, idx)"
          @mouseleave="resetTilt(idx)"
          :style="cardStyles[idx]"
        >
          <!-- Card Content -->
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl border border-[#1D4E4F33] p-6">
            <h3 class="text-2xl font-semibold text-[#1D4E4F] mb-2">{{ card.title }}</h3>
            <p class="text-neutral-700 text-sm leading-relaxed mb-4">{{ card.description }}</p>
            <ul class="text-[#144041] text-sm mb-4 list-disc list-inside space-y-1">
              <li v-for="(item,i) in card.features" :key="i">{{ item }}</li>
            </ul>
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-md p-3 border border-[#1D4E4F33] mb-4">
              <p class="text-[#144041] text-sm font-semibold">{{ card.pricing }}</p>
            </div>
            <transition name="fade">
              <div v-if="card.expanded" class="pt-2 border-t border-neutral-200 text-sm text-neutral-700 mb-4">
                <h4 class="font-semibold mb-1">Optional Add-Ons</h4>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(opt,i) in card.addOns" :key="i">{{ opt }}</li>
                </ul>
              </div>
            </transition>
            <button
              @click="card.expanded = !card.expanded"
              class="text-[#1D4E4F] underline text-sm mb-4"
            >
              {{ card.expanded ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
            </button>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white text-sm font-semibold py-2 rounded-full shadow-md">
              {{ card.cta }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const carousel = ref(null);
let isDown = false;
let startX;
let scrollLeft;

function startDrag(e) {
  isDown = true;
  startX = e.pageX - carousel.value.offsetLeft;
  scrollLeft = carousel.value.scrollLeft;
}
function endDrag() {
  isDown = false;
}
function onDrag(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.value.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.value.scrollLeft = scrollLeft - walk;
}

const cards = reactive([
  {
    title: 'Complete Care Package',
    description: "Ideal for property owners who want us to handle everything",  
    features: [
      'Booking & Inquiries Management',
      'Guest Welcome & Key Handover',
      'Property Inspection & Maintenance',
      'Basic Amenities & Stocking',
      'Basic Repairs & Support'
    ],
    pricing: 'Commission: 20% of booking fee',
    addOns: ['Special Occasion Setup (from R600)', 'Mid-Stay Cleaning (from R300)', 'Laundry Service'],
    cta: 'Get Started',
    expanded: false
  },
  {
    title: 'Premium Care Package',
    description: "Fully managed, seamless experience...",
    features: [
      'Full Booking & Inquiry Management',
      'Guest Welcome & VIP Check-in',
      'Professional Cleaning After Check-out',
      'Laundry Service',
      'High-End Amenities & Welcome Pack',
      'Basic & Minor Maintenance'
    ],
    pricing: 'Flat Fee: From R1200/mo + 25% commission',
    addOns: ['Special Occasion Setup (from R600)', 'Laundry Service', 'Mid-Stay Cleaning (from R300)'],
    cta: 'Get Started',
    expanded: false
  }
]);

const cardStyles = reactive(cards.map(() => ({ transform: 'rotateY(0deg) rotateX(0deg)' })));

function tilt(e, idx) {
  const card = carousel.value.children[idx];
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const midX = rect.width / 2;
  const midY = rect.height / 2;
  const rotateY = ((x - midX) / midX) * 10;
  const rotateX = ((midY - y) / midY) * 10;
  cardStyles[idx].transform = `perspective(600px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
}

function resetTilt(idx) {
  cardStyles[idx].transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
}

onMounted(() => {
  // Optional: initialize custom scroll-snap styles
});
</script>

<style scoped>
.scroll-snap-x {
  scroll-snap-type: x proximity;
}
.scroll-snap-start {
  scroll-snap-align: start;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
