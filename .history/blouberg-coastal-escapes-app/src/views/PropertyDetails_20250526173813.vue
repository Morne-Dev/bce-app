<template>
    <div v-if="property">
      <h2>{{ property.title }}</h2>
      <img :src="property.mainImage" alt="Main Image" width="400" />
      <p><strong>Price:</strong> R{{ property.pricePerNight }} / night</p>
      <p><strong>Bedrooms:</strong> {{ property.bedrooms }}</p>
      <p><strong>Description:</strong> {{ property.description }}</p>
    </div>
  
    <div v-else>
      <p>Loading property...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { doc, getDoc } from 'firebase/firestore'
  import { db } from '../firebase'
  
  const property = ref(null)
  const route = useRoute()
  
  const fetchProperty = async () => {
    const docRef = doc(db, 'properties', route.params.id)
    const docSnap = await getDoc(docRef)
  
    if (docSnap.exists()) {
      property.value = { id: docSnap.id, ...docSnap.data() }
    } else {
      property.value = null
    }
  }
  
  onMounted(fetchProperty)
  </script>
  