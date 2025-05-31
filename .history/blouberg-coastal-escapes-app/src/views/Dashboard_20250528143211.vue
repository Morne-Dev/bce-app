<template>
  <div class="dashboard">
    <h2>Admin Dashboard</h2>
    <button @click="logout">Logout</button>

    <form @submit.prevent="handleSubmit">
      <input v-model="form.title" placeholder="Title" required />
      <input v-model="form.pricePerNight" type="number" placeholder="Price per Night" required />
      <input v-model="form.bedrooms" type="number" placeholder="Bedrooms" required />

      <!-- Hero Image Upload -->
      <label>Hero Image</label>
      <input type="file" @change="handleHeroUpload" accept="image/*" required />
      <div v-if="form.mainImage" class="image-preview">
        <img :src="form.mainImage" width="150" />
        <button type="button" @click="removeHero">🗑️</button>
        <button type="button" @click="replaceHero">🔄</button>
      </div>

      <!-- Gallery Images Upload -->
      <label>Gallery Images</label>
      <input type="file" @change="handleGalleryUpload" accept="image/*" multiple />
      <div v-if="form.imageGallery.length" class="gallery-strip">
        <div v-for="(img, idx) in form.imageGallery" :key="idx" class="thumb">
          <img :src="img" width="100" />
          <button type="button" @click="removeGallery(idx)">🗑️</button>
          <button type="button" @click="replaceGallery(idx)">🔄</button>
        </div>
      </div>

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

// Auth + fetch
const logout = async () => { /* unchanged */ };
const fetchProperties = async () => { /* unchanged */ };

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

const pendingHeroFile = ref(null);
const pendingGalleryFiles = ref([]);

// Hero handlers
const handleHeroUpload = e => {
  pendingHeroFile.value = e.target.files[0];
};
const removeHero = () => {
  form.value.mainImage = '';
};
const replaceHero = () => {
  handleHeroUpload({ target: { files: [pendingHeroFile.value] } });
};

// Gallery handlers
const handleGalleryUpload = e => {
  pendingGalleryFiles.value = Array.from(e.target.files);
};
const removeGallery = idx => {
  form.value.imageGallery.splice(idx, 1);
};
const replaceGallery = async idx => {
  // upload single replacement
  const file = pendingGalleryFiles.value.shift();
  const url = await uploadSingle(file);
  form.value.imageGallery.splice(idx, 1, url);
};

// Upload utils
const uploadSingle = async file => {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  const res = await axios.post(CLOUDINARY_URL, fd);
  return res.data.secure_url;
};
const uploadImagesToCloudinary = async () => {
  const urls = [];
  if (pendingHeroFile.value) {
    const heroUrl = await uploadSingle(pendingHeroFile.value);
    urls.push({ type: 'hero', url: heroUrl });
  }
  for (const file of pendingGalleryFiles.value) {
    const url = await uploadSingle(file);
    urls.push({ type: 'gallery', url });
  }
  return urls;
};

// Submit
const handleSubmit = async () => {
  // upload
  const uploads = await uploadImagesToCloudinary();
  uploads.forEach(u => {
    if (u.type === 'hero') form.value.mainImage = u.url;
    else form.value.imageGallery.push(u.url);
  });

  // build payload
  const data = {
    title: form.value.title,
    pricePerNight: +form.value.pricePerNight,
    bedrooms: +form.value.bedrooms,
    description: form.value.description,
    mainImage: form.value.mainImage,
    imageGallery: form.value.imageGallery,
    createdAt: new Date()
  };

  // save
  if (form.value.id) {
    await updateDoc(doc(db, 'properties', form.value.id), data);
  } else {
    await addDoc(collection(db, 'properties'), data);
  }

  resetForm();
  fetchProperties();
};

// Reset
const resetForm = () => {
  form.value = {
    id: null, title: '', pricePerNight: '', bedrooms: '',
    description: '', mainImage: '', imageGallery: []
  };
  pendingHeroFile.value = null;
  pendingGalleryFiles.value = [];
};

const deleteProperty = async id => { /* unchanged */ };
const editProperty = property => {
  form.value = { ...property };
};

onMounted(fetchProperties);
</script>
