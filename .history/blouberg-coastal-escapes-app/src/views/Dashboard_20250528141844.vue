<template>
  <div class="dashboard">
    <h2>Admin Dashboard</h2>
    <button @click="logout">Logout</button>

    <form @submit.prevent="handleSubmit">
      <input v-model="form.title" placeholder="Title" required />
      <input v-model="form.pricePerNight" type="number" placeholder="Price per Night" required />
      <input v-model="form.bedrooms" type="number" placeholder="Bedrooms" required />
      <input type="file" @change="handleImageUpload" accept="image/*" ref="fileInput" multiple required />
      <textarea v-model="form.description" placeholder="Description" required></textarea>
      <button type="submit">{{ form.id ? 'Update' : 'Create' }} Property</button>
      <button v-if="form.id" @click.prevent="resetForm">Cancel Edit</button>
    </form>

    <hr />

    <div v-for="property in properties" :key="property.id" class="property-card">
      <h3>{{ property.title }}</h3>
      <p>{{ property.pricePerNight }} / night - {{ property.bedrooms }} bedrooms</p>
      <img 
        :src="property.mainImage" 
        alt="Image" 
        width="200"
      />
      <!-- Gallery Strip -->
      <div
        v-if="property.imageGallery && property.imageGallery.length > 1"
        class="carousel"
      >
        <img
          v-for="img in property.imageGallery"
          :key="img"
          :src="img"
          alt="Gallery Thumbnail"
          width="100"
        />
      </div>
      <p>{{ property.description }}</p>
      <button @click="editProperty(property)">Edit</button>
      <button @click="deleteProperty(property.id)">Delete</button>
    </div>
  </div>
</template>

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
  mainImage: '',
  imageGallery: []
});
const selectedImages = ref([]);
const fileInput = ref(null);

const handleImageUpload = (e) => {
  selectedImages.value = Array.from(e.target.files);
};

const uploadImagesToCloudinary = async () => {
  const uploadPromises = selectedImages.value.map(async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    const response = await axios.post(CLOUDINARY_URL, formData);
    return response.data.secure_url;
  });
  return await Promise.all(uploadPromises);
};

const fetchProperties = async () => {
  const querySnapshot = await getDocs(collection(db, 'properties'));
  properties.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};

const handleSubmit = async () => {
  // 1. Prepare gallery array
  let imageGallery = form.value.imageGallery || [];

  // 2. Upload new images if any selected
  if (selectedImages.value.length) {
    const uploadedUrls = await uploadImagesToCloudinary();
    if (!uploadedUrls.length) {
      alert('Image upload failed.');
      return;
    }
    imageGallery = uploadedUrls;
  }

  // 3. Build data object
  const propertyData = {
    title: form.value.title,
    pricePerNight: Number(form.value.pricePerNight),
    bedrooms: Number(form.value.bedrooms),
    description: form.value.description,
    mainImage: imageGallery[0] || form.value.mainImage,
    imageGallery,
    createdAt: new Date()
  };

  // 4. Create or update Firestore doc
  if (form.value.id) {
    const propertyRef = doc(db, 'properties', form.value.id);
    await updateDoc(propertyRef, propertyData);
  } else {
    await addDoc(collection(db, 'properties'), propertyData);
  }

  // 5. Reset form and reload list
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
    mainImage: '',
    imageGallery: []
  };
  selectedImages.value = [];
  if (fileInput.value) fileInput.value.value = '';
};

onMounted(fetchProperties);
</script>
