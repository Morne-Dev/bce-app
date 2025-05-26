<template>
  <div class="dashboard">
    <h2>Admin Dashboard</h2>
    <button @click="logout">Logout</button>

    <form @submit.prevent="handleSubmit">
      <input v-model="form.title" placeholder="Title" required />
      <input v-model="form.pricePerNight" type="number" placeholder="Price per Night" required />
      <input v-model="form.bedrooms" type="number" placeholder="Bedrooms" required />
      <input v-model="form.mainImage" placeholder="Image URL" required />
      <textarea v-model="form.description" placeholder="Description" required></textarea>
      <button type="submit">{{ form.id ? 'Update' : 'Create' }} Property</button>
      <button v-if="form.id" @click.prevent="resetForm">Cancel Edit</button>
    </form>

    <hr />

    <div v-for="property in properties" :key="property.id" class="property-card">
      <h3>{{ property.title }}</h3>
      <p>{{ property.pricePerNight }} / night - {{ property.bedrooms }} bedrooms</p>
      <img :src="property.mainImage" alt="Image" width="200" />
      <p>{{ property.description }}</p>
      <button @click="editProperty(property)">Edit</button>
      <button @click="deleteProperty(property.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '../firebase'
import {
  collection, addDoc, getDocs,
  updateDoc, deleteDoc, doc
} from 'firebase/firestore'

const properties = ref([])
const form = ref({
  id: null,
  title: '',
  pricePerNight: '',
  bedrooms: '',
  description: '',
  mainImage: ''
})

// Load properties from Firestore
const fetchProperties = async () => {
  const querySnapshot = await getDocs(collection(db, 'properties'))
  properties.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

// Create or update property
const handleSubmit = async () => {
  if (form.value.id) {
    // Update existing
    const propertyRef = doc(db, 'properties', form.value.id)
    await updateDoc(propertyRef, {
      title: form.value.title,
      pricePerNight: Number(form.value.pricePerNight),
      bedrooms: Number(form.value.bedrooms),
      description: form.value.description,
      mainImage: form.value.mainImage
    })
  } else {
    // Create new
    await addDoc(collection(db, 'properties'), {
      title: form.value.title,
      pricePerNight: Number(form.value.pricePerNight),
      bedrooms: Number(form.value.bedrooms),
      description: form.value.description,
      mainImage: form.value.mainImage,
      createdAt: new Date()
    })
  }

  resetForm()
  fetchProperties()
}

// Delete property
const deleteProperty = async (id) => {
  await deleteDoc(doc(db, 'properties', id))
  fetchProperties()
}

// Load property into form for editing
const editProperty = (property) => {
  form.value = { ...property }
}

// Reset form
const resetForm = () => {
  form.value = {
    id: null,
    title: '',
    pricePerNight: '',
    bedrooms: '',
    description: '',
    mainImage: ''
  }
}

// Load data on mount
onMounted(fetchProperties)
</script>

<style scoped>
.property-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

input, textarea {
  padding: 0.5rem;
}

</style>