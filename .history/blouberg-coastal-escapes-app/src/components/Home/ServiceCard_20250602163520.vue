<template>
  <article
    ref="cardRef"
    class="service-card bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl
           border border-gray-100 text-center transition-all duration-500
           opacity-0 scale-95 flex flex-col justify-between"
  >
    <div>
      <div class="flex justify-center mb-6">
        <img
          :src="image"
          alt=""
          class="w-20 h-20 object-cover rounded-full border-4 border-blue-200 shadow-lg"
          loading="lazy"
        />
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-1">{{ title }}</h3>
      <div class="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
      <p class="text-gray-600 text-sm leading-relaxed">{{ description }}</p>
    </div>

    <!-- Learn More Link -->
    <a
      href="#"
      class="mt-6 inline-block text-indigo-600 hover:underline font-medium"
    >
      Learn More →
    </a>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  image: String,
  title: String,
  description: String
})

const cardRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'scale-100')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1 }
  )
  if (cardRef.value) observer.observe(cardRef.value)
})
</script>

<style scoped>
.service-card {
  min-height: 24rem; /* enforce equal heights */
}
</style>
