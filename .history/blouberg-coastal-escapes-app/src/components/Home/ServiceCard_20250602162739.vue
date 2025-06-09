<template>
  <article
    ref="cardRef"
    :class="[
      'service-card opacity-0 scale-95 transition-all duration-600 ease-out',
      isVisible ? 'visible' : '',
      'bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 text-center',
      'min-h-[360px] flex flex-col justify-between'
    ]"
  >
    <div>
      <div class="flex justify-center mb-6">
        <img
          :src="image"
          :alt="title"
          class="w-20 h-20 object-cover rounded-full border-4 border-blue-200 shadow-lg"
          loading="lazy"
        />
      </div>

      <h3 class="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
        {{ title }}
      </h3>
      <div
        class="w-12 h-1"
        :style="{ backgroundColor: 'var(--brand-blue)' }"
        class="mx-auto mb-4 rounded-full"
      ></div>

      <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>

    <a
      href="#"
      class="mt-6 inline-block font-medium"
      :class="['text-[var(--brand-blue)] hover:underline']"
    >
      Learn More →
    </a>
  </article>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const isVisible = ref(false);
const cardRef = ref(null);
let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(cardRef.value);
        }
      });
    },
    { threshold: 0.1 }
  );
  if (cardRef.value) observer.observe(cardRef.value);
});

onBeforeUnmount(() => {
  if (observer && cardRef.value) observer.unobserve(cardRef.value);
});
</script>

<style scoped>
.service-card.visible {
  opacity: 1 !important;
  transform: scale(1) !important;
}
</style>
