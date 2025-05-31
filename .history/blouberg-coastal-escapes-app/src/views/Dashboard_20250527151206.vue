<template>
  <div class="dashboard">
    <h2>Admin Dashboard</h2>
    <button @click="logout">Logout</button>

    <form @submit.prevent="handleSubmit">
      <input v-model="form.title" placeholder="Title" required />
      <input v-model="form.pricePerNight" type="number" placeholder="Price per Night" required />
      <input v-model="form.bedrooms" type="number" placeholder="Bedrooms" required />
      <input type="file" @change="handleImageUpload" accept="image/*" required />
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
import { getAuth, signOut } from 'firebase/auth'

const logout = async () => {
  const auth = getAuth()
  await signOut(auth)
  window.location.href = '/login'
}

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

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const logout = async () => {
  const auth = getAuth();
  await signOut(auth);
  window.location.href = '/login';
};

const properties = ref([]);
const form = ref({
  id: null,
  title: '',
  pricePerNight: '',
  bedrooms: '',
  description: '',
  mainImage: ''
});
const selectedImage = ref(null);

const handleImageUpload = (e) => {
  selectedImage.value = e.target.files[0];
};

const uploadImageToCloudinary = async () => {
  const formData = new FormData();
  formData.append('file', selectedImage.value);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await axios.post(CLOUDINARY_URL, formData);
    return response.data.secure_url;
  } catch (error) {
    console.error('Image upload failed:', error);
    return null;
  }
};

const fetchProperties = async () => {
  const querySnapshot = await getDocs(collection(db, 'properties'));
  properties.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};

const handleSubmit = async () => {
  let imageUrl = form.value.mainImage;

  if (selectedImage.value) {
    const uploadedUrl = await uploadImageToCloudinary();
    if (uploadedUrl) {
      imageUrl = uploadedUrl;
    } else {
      alert('Image upload failed. Please try again.');
      return;
    }
  }

  const propertyData = {
    title: form.value.title,
    pricePerNight: Number(form.value.pricePerNight),
    bedrooms: Number(form.value.bedrooms),
    description: form.value.description,
    mainImage: imageUrl,
    createdAt: new Date()
  };

  if (form.value.id) {
    const propertyRef = doc(db, 'properties', form.value.id);
    await updateDoc(propertyRef, propertyData);
  } else {
    await addDoc(collection(db, 'properties'), propertyData);
  }

  resetForm();
  fetchProperties();
};

const deleteProperty = async (id) => {
  await deleteDoc(doc(db, 'properties', id));
  fetchProperties();
};

const editProperty = (property) => {
  form.value = { ...property };
};

const resetForm = () => {
  form.value = {
    id: null,
    title: '',
    pricePerNight: '',
    bedrooms: '',
    description: '',
    mainImage: ''
  };
  selectedImage.value = null;
};

onMounted(fetchProperties);

</script>