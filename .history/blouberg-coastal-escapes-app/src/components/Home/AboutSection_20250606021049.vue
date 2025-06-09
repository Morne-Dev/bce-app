<template>
  <section class="services-section">
    <div class="services-grid">
      <article class="service-card" v-for="service in services" :key="service.id">
        <h2 class="service-title">{{ service.title }}</h2>
        <p class="service-subtitle">{{ service.subtitle }}</p>
        <div class="price">${{ service.price }}</div>
        <ul class="features">
          <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
        </ul>
        <div class="addons" v-if="service.addons.length">
          <h4>Add-Ons:</h4>
          <label v-for="addon in service.addons" :key="addon.name" class="addon-toggle">
            <input type="checkbox" v-model="addon.selected" />
            {{ addon.name }} (+${{ addon.price }})
          </label>
        </div>
        <button class="select-btn">Select Plan</button>
      </article>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
const services = reactive([
  {
    id: 1,
    title: 'Basic Plan',
    subtitle: 'Essential features for personal use',
    price: 29,
    features: ['Feature A', 'Feature B', 'Feature C'],
    addons: [
      { name: 'Extra Storage', price: 5, selected: false },
      { name: 'Priority Support', price: 10, selected: false }
    ]
  },
  {
    id: 2,
    title: 'Standard Plan',
    subtitle: 'All essential features for small teams',
    price: 49,
    features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    addons: [
      { name: 'Extra Storage', price: 10, selected: false },
      { name: 'Priority Support', price: 15, selected: false }
    ]
  },
  {
    id: 3,
    title: 'Premium Plan',
    subtitle: 'Extended features for growing businesses',
    price: 99,
    features: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E'],
    addons: [
      { name: 'Extra Storage', price: 15, selected: false },
      { name: 'Priority Support', price: 20, selected: false }
    ]
  },
  {
    id: 4,
    title: 'Enterprise Plan',
    subtitle: 'All features plus enterprise support',
    price: 199,
    features: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E', 'Feature F'],
    addons: [
      { name: 'Extra Storage', price: 20, selected: false },
      { name: 'Priority Support', price: 30, selected: false }
    ]
  }
]);
</script>

<style scoped>
.services-section {
  padding: 2rem;
  /* Optional background to highlight glass effect */
  background: linear-gradient(135deg, #e0c3fc, #8ec5fc);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* Stagger effect: offset even cards downward */
.service-card:nth-child(even) {
  margin-top: 2rem;
}

/* Responsive: single column on small screens */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .service-card:nth-child(even) {
    margin-top: 0;
  }
}

.service-card {
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  backdrop-filter: blur(10px); /* frosted glass effect */ 
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Base shadow */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}
.service-card:hover {
  transform: translateY(-5px);
  /* Elevated shadow on hover */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

/* Title with gradient underline */
.service-title {
  position: relative;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.service-title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, #a855f7, #3b82f6);
  border-radius: 3px;
}

/* Subtitle styling */
.service-subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

/* Price styling */
.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin: 0.5rem 0 1rem;
}

/* Features list */
.features {
  flex: 1;
  margin-bottom: 1rem;
  padding-left: 1.2rem;
  color: #333;
}
.features li {
  margin-bottom: 0.5rem;
}

/* Add-Ons toggles */
.addons h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #444;
}
.addon-toggle {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #333;
}
.addon-toggle input[type="checkbox"] {
  margin-right: 0.5rem;
  accent-color: #a855f7;
  width: 1.2em;
  height: 1.2em;
}

/* Select button */
.select-btn {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}
.select-btn:hover {
  background: #2563eb;
}
</style>
