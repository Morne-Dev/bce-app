<template>
  <div class="dashboard">
    <h1>Property Management</h1>
    <button @click="showAddForm = true">Add New Property</button>

    <!-- Add/Edit Form -->
    <div v-if="showAddForm" class="property-form">
      <input v-model="formData.title" placeholder="Property Title">
      <textarea v-model="formData.description" placeholder="Description"/>
      <input v-model="formData.pricePerNight" type="number" placeholder="Price/night">
      <button @click="saveProperty">Save</button>
    </div>

    <!-- Properties List -->
    <div v-for="property in properties" :key="property.id" class="property-item">
      <h3>{{ property.title }}</h3>
      <button @click="editProperty(property)">Edit</button>
      <button @click="deleteProperty(property.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../firebase'
import { collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'

const properties = ref([])
const showAddForm = ref(false)
const formData = ref({ title: '', description: '', pricePerNight: 0 })

// Real-time updates
onSnapshot(collection(db, 'properties'), (snapshot) => {
  properties.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})

const saveProperty = async () => {
  if (formData.value.id) {
    await updateDoc(doc(db, 'properties', formData.value.id), formData.value)
  } else {
    await addDoc(collection(db, 'properties'), formData.value)
  }
  resetForm()
}

const editProperty = (property) => {
  formData.value = { ...property }
  showAddForm.value = true
}

const deleteProperty = async (id) => {
  await deleteDoc(doc(db, 'properties', id))
}

const resetForm = () => {
  formData.value = { title: '', description: '', pricePerNight: 0 }
  showAddForm.value = false
}
</script>