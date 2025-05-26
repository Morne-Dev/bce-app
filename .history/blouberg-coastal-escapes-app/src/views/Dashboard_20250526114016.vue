<template>
    <div>
      <h1>Welcome Admin</h1>
      <button @click="logout">Logout</button>
      <!-- Later here is where we’ll add: CRUD for listings -->
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { signOut } from 'firebase/auth'
  import { auth } from '../firebase'
  
  const router = useRouter()
  
  const logout = async () => {
    await signOut(auth)
    router.push('/login')
  }
  </script>
  