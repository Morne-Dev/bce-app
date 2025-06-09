<script setup>
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Complete Care Package",
    features: [
      "Booking & Inquiries Management",
      "Guest Welcome & Key Handover",
      "Property Inspection & Regular Maintenance Checks",
      "Basic Amenities",
      "Basic Maintenance",
    ],
    pricingLine1: "Commission: 20% of the booking fee",
    pricingLine2: "(Commission incentivises high-quality service)",
    addonsTitle: "Optional Add-Ons:",
    addons: [
      "Special Occasion Packages – from R600",
      "Mid-Stay Cleaning – from R300 per cleaning",
      "Laundry Service",
    ],
    buttonText: "Enquire Now",
  },
  {
    title: "Premium Care Package",
    features: [
      "Full Booking & Inquiry Management",
      "Guest Welcome & VIP Check-in",
      "Professional Cleaning After Check-out",
      "Laundry Service",
      "High-End Amenities",
      "Basic & Minor Maintenance",
      "Property Inspection & Regular Maintenance Checks",
      "Guest Experience Welcome Pack",
    ],
    pricingLine1: "Flat Fee: From R1200 per month",
    pricingLine2: "Commission: 25% of the booking fee",
    addonsTitle: "Optional Add-Ons:",
    addons: [
      "Special Occasion Packages – from R600",
      "Laundry Service",
      "Mid-Stay Cleaning – from R300 per cleaning",
    ],
    buttonText: "Sign Up Now",
  },
  {
    title: "Cleaning Services",
    features: [
      "Living, dining, kitchen, patio cleaned",
      "Includes all cleaning supplies",
    ],
    pricingLine1: "Standard Cleaning – From R460",
    pricingLine2: "",
    addonsTitle: "Add-Ons:",
    addons: [
      "Fridge Defrosting and Cleaning",
      "Essential Items Restocking",
      "Personalized Guest Setup",
      "Hot Tub Cleaning – From R150",
    ],
    footer: "Why use this service? Hassle-free, professional, ideal for frequent guest turnover.",
    buttonText: "Book Cleaning",
  },
  {
    title: "Maintenance Services",
    features: [
      "Basic Maintenance – From R350",
      "Emergency Maintenance – From R600",
      "Maintenance Package – From R1,000/mo",
    ],
    pricingLine1: "",
    pricingLine2: "",
    addonsTitle: "Service Includes:",
    addons: [
      "Minor plumbing, electrical & appliance fixes",
      "Door, window, cupboard repairs",
      "Urgent callouts (safety issues, bursts, etc.)",
      "Monthly checkups + priority response",
    ],
    footer: "Why choose us? Ensure safety, comfort, and fewer repairs over time.",
    buttonText: "",
  },
];
</script>

<template>
  <section
    class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#e1f3f3] overflow-hidden"
  >
    <!-- Decorative blobs -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto columns-1 md:columns-2 gap-6 [column-fill:_balance] z-10">
      <Card
        v-for="(card, index) in cards"
        :key="card.title"
        class="break-inside-avoid rounded-2xl shadow-md mb-6 animate-fade-in"
        :class="`delay-${index * 100}`"
        :style="{ marginTop: index % 2 === 1 ? '2rem' : undefined }"
      >
        <CardContent class="p-4">
          <h2 class="text-xl font-bold mb-2">{{ card.title }}</h2>

          <!-- Features List -->
          <ul class="list-disc list-inside space-y-1 text-sm mb-4">
            <li v-for="item in card.features" :key="item">{{ item }}</li>
          </ul>

          <!-- Pricing -->
          <p v-if="card.pricingLine1" class="text-sm font-medium">{{ card.pricingLine1 }}</p>
          <p v-if="card.pricingLine2" class="text-xs mb-2">{{ card.pricingLine2 }}</p>

          <!-- Add-Ons -->
          <h3 class="text-sm font-semibold mt-2">{{ card.addonsTitle }}</h3>
          <ul class="list-disc list-inside space-y-1 text-sm mb-4">
            <li v-for="addon in card.addons" :key="addon">{{ addon }}</li>
          </ul>

          <!-- Footer (if present) -->
          <p v-if="card.footer" class="text-sm mt-2">{{ card.footer }}</p>

          <!-- Button -->
          <Button v-if="card.buttonText" class="w-full mt-4">
            {{ card.buttonText }}
          </Button>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.6s ease forwards;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-0 {
  animation-delay: 0s;
}
/* break-inside-avoid for stagger */
.break-inside-avoid {
  break-inside: avoid;
}
</style>
