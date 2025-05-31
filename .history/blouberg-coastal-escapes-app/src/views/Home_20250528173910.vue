<template>
  <div>
    <section class="hero">
    <div class="overlay">
      <h1>Helping you find the right fit, every time</h1>
    </div>
  </section>

    <div class="property-list">
      <div v-for="property in properties" :key="property.id" class="property-card">
        <img :src="property.mainImage" alt="Property image">
        <h3>{{ property.title }}</h3>
        <p>{{ property.pricePerNight }} / night</p>
        <router-link :to="{ name: 'PropertyDetails', params: { id: property.id }}">
          View Details
        </router-link>
      </div>
    </div>
  </div>
    
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { db } from '../firebase'
  import { collection, getDocs } from 'firebase/firestore'
  
  const properties = ref([])
  
  const fetchProperties = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'properties'))
      properties.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (error) {
      console.error('Error fetching properties:', error)
    }
  }
  
  onMounted(() => {
    fetchProperties()
  })
  </script>
  