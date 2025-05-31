<template>
  <div>

    <!-- 🏠 Hero Section -->
    <section class="hero">
      <div class="overlay">
        <h1>Helping you find the right fit, every time</h1>
      </div>
    </section>

    <!-- 🧾 Introduction Section -->
    <section class="introduction">
      <h2>Professional Holiday Property Management in Cape Town’s Coastal Hub Bloubergstrand</h2>
      <p>
        Owning a property is a valuable investment, but managing it can be challenging without the right support...
      </p>
    </section>

    <!-- 🧩 Services Section -->
    <section class="services">
      <div class="service">
        <h3>Holiday Property Management</h3>
        <p>Experience seamless rental operations with our holiday property management services...</p>
      </div>
      <div class="service">
        <h3>Cleaning Services</h3>
        <p>Maintain a pristine environment with our specialized cleaning services...</p>
      </div>
      <div class="service">
        <h3>Maintenance Services</h3>
        <p>Ensure the longevity and optimal performance of your property through our comprehensive maintenance solutions...</p>
      </div>
    </section>

    <!-- 📦 Complete Care Package -->
    <section class="care-package">
      <h2>Complete Care Package</h2>
      <p>
        This package is ideal for property owners who want us to handle everything from bookings and inquiries to basic maintenance...
      </p>
    </section>

  </div>
</template>

<style scoped>
/* 🏠 Hero Section */
.hero {
  background-image: url('@/assets/Blouberg_coastal_escapes_600x1066_fill_edited.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero h1 {
  color: white;
  font-size: 2.5rem;
  text-align: center;
}

/* 🧾 Introduction Section */
.introduction {
  padding: 2rem;
  text-align: center;
}
.introduction h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.introduction p {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* 🧩 Services Section */
.services {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
}
.service {
  width: 30%;
  min-width: 250px;
  text-align: center;
  margin-bottom: 1.5rem;
}
.service h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.service p {
  font-size: 1rem;
}

/* 📦 Complete Care Package */
.care-package {
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
}
.care-package h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.care-package p {
  font-size: 1.2rem;
}
</style>
