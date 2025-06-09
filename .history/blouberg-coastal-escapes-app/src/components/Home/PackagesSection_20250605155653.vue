<template>
  <section
    class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden"
  >
    <div
      class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative"
    >
      <!-- Left Column: Content -->
      <div class="space-y-10 z-20 relative">
        <!-- Title with underline effect -->
        <div>
          <h2
            class="text-5xl sm:text-6xl font-bold font-serif text-[#1D4E4F] leading-tight relative inline-block"
          >
            Complete Care Package
            <span
              aria-hidden="true"
              class="absolute left-0 bottom-0 w-full h-3 bg-gradient-to-r from-[#6BD4D4] via-[#1D4E4F]/50 to-[#6BD4D4] rounded-full blur-[12px] opacity-70 -z-10"
            ></span>
          </h2>
          <p
            class="mt-6 text-lg text-neutral-700 max-w-lg font-medium tracking-wide"
          >
            Perfect for property owners who want full-service holiday rental
            management—booking, cleaning, maintenance, and more.
          </p>
        </div>

        <!-- Feature Card with glassmorphism and floating effect -->
        <div
          class="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-10 space-y-8 relative hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500"
          role="region"
          aria-label="Complete Care Package Details"
        >
          <!-- Description -->
          <p
            class="text-neutral-700 font-semibold tracking-wide leading-relaxed"
          >
            Ideal for owners who want us to handle everything—from bookings and
            guest management to basic maintenance—while providing a
            consistently exceptional guest experience.
          </p>

          <!-- Included Features with custom icons and subtle animation -->
          <div>
            <h3
              class="text-2xl font-semibold text-[#1D4E4F] mb-5 tracking-tight"
            >
              What’s Included
            </h3>
            <ul
              class="space-y-4 list-none"
              role="list"
              aria-label="Features included in the Complete Care Package"
            >
              <li
                class="flex items-center gap-4 text-[#144041] font-semibold text-lg"
              >
                <svg
                  class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Booking & Inquiries Management
              </li>
              <li
                class="flex items-center gap-4 text-[#144041] font-semibold text-lg"
              >
                <svg
                  class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-75"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Guest Welcome & Key Handover
              </li>
              <li
                class="flex items-center gap-4 text-[#144041] font-semibold text-lg"
              >
                <svg
                  class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-150"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Property Inspection & Maintenance
              </li>
              <li
                class="flex items-center gap-4 text-[#144041] font-semibold text-lg"
              >
                <svg
                  class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-200"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic Amenities & Stocking
              </li>
              <li
                class="flex items-center gap-4 text-[#144041] font-semibold text-lg"
              >
                <svg
                  class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-300"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic Repairs & Support
              </li>
            </ul>
          </div>

          <!-- Pricing with subtle gradient background -->
          <div
            class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F33]"
          >
            <h3
              class="text-2xl font-semibold text-[#1D4E4F] mb-3 tracking-wide"
            >
              Pricing
            </h3>
            <p class="text-[#144041] leading-relaxed font-semibold text-lg">
              <strong>Commission:</strong> 20% of the booking fee
              <br />
              <small
                class="text-sm text-[#144041aa] tracking-wide font-normal"
              >
                This commission keeps us focused on getting you the best bookings
                and maintaining the highest standards.
              </small>
            </p>
          </div>

          <!-- Why Choose This with icon and gentle pulse -->
          <div
            class="bg-[#f5fdfd] border border-dashed border-[#B2DCDC] p-6 rounded-xl flex items-start gap-5 shadow-[0_0_15px_#B2DCDC88] animate-pulse-slow"
            aria-label="Reasons to choose this package"
          >
            <svg
              class="w-10 h-10 text-[#1D4E4F]"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4"
              />
              <circle cx="12" cy="12" r="9" stroke="none" />
            </svg>
            <div>
              <h4 class="font-semibold mb-2 text-[#1D4E4F] text-xl">
                Why Choose This?
              </h4>
              <p class="text-neutral-600 text-base tracking-wide leading-relaxed">
                Everything handled for you. All guests treated like VIPs.
                Stress-free ownership with better reviews and more repeat
                bookings.
              </p>
            </div>
          </div>

          <!-- Optional Add-ons with 3D button and smooth fade -->
          <div>
            <transition name="fade">
              <div
                v-if="expanded"
                class="pt-6 space-y-6 border-t border-neutral-200 max-w-md mx-auto"
              >
                <h3
                  class="text-xl font-semibold text-[#1D4E4F] mb-4 tracking-wide"
                >
                  Optional Add-Ons
                </h3>
                <ul class="text-neutral-700 space-y-4 font-medium">
                  <li>
                    <strong>🎁 Special Occasion Setup:</strong> Flowers, wine,
                    treats <em>(from R600)</em>
                  </li>
                  <li>
                    <strong>🧹 Mid-Stay Cleaning:</strong> Extra cleaning for
                    longer bookings <em>(from R300)</em>
                  </li>
                  <li><strong>👕 Laundry Services:</strong> Guest laundry on request</li>
                </ul>
              </div>
            </transition>

            <div class="pt-6 text-center">
              <button
                @click="expanded = !expanded"
                class="relative inline-block bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6BD4D4]/60 active:scale-95"
                aria-expanded="expanded"
                :aria-label="expanded ? 'Hide add-ons' : 'Read more about add-ons'"
              >
                {{ expanded ? "Hide Add-Ons" : "Read More About Add-Ons" }}
                <span
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
                  aria-hidden="true"
                  >{{ expanded ? "−" : "+" }}</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Image with layered effects -->
      <div
        class="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(29,78,79,0.25)] rotate-[-1.5deg] max-w-[600px] mx-auto md:mx-0"
        aria-hidden="true"
      >
        <!-- Background colored layers -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-[#6BD4D4] to-[#1D4E4F] opacity-20 rounded-3xl filter blur-xl -z-10"
        ></div>
        <div
          class="absolute top-10 left-10 w-48 h-48 bg-[#6BD4D4]/30 rounded-full -z-10 filter blur-3xl"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-64 h-64 bg-[#1D4E4F]/25 rounded-full -z-10 filter blur-2xl"
        ></div>

        <!-- Main image with subtle shadow -->
        <img
          src="/images/complete-care-package.jpg"
          alt="Vacation rental property with happy guests"
          class="rounded-3xl object-cover w-full h-full shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref(false);
</script>

<style scoped>
/* Slow bounce animation for icons */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

/* Slow pulse animation for why choose box */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 15px #b2dcdc88;
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 25px #b2dcdcbb;
  }
}
.animate-pulse-slow {
  animation: pulse-slow 5s ease-in-out infinite;
}

/* Fade transition for add-ons */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
