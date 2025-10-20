<template>
  <div class="layout">
    <!-- NAVBAR -->
    <header class="navbar">
      <h1 class="title font-mono text-3xl text-cyan-400">Portfolio</h1>
      
      <!-- Hamburger Menu Button (Mobile Only) -->
      <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation Links -->
      <nav class="nav-links" :class="{ open: isMenuOpen }">
        <router-link to="/" exact-active-class="active" @click="closeMenu">Home</router-link>
        <router-link to="/about" exact-active-class="active" @click="closeMenu">About</router-link>
        <router-link to="/project" exact-active-class="active" @click="closeMenu">Resume</router-link>
        <router-link to="/experince" exact-active-class="active" @click="closeMenu">Experience</router-link>
        <router-link to="/contact" exact-active-class="active" @click="closeMenu">Contact</router-link>
      </nav>
    </header>

    <!-- PAGE CONTENT -->
    <main class="page">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  font-family: sans-serif;

  /* ✅ Use relative path and Vite's alias (@) */
  background-image: url("@/assets/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  html,
  body {
    background-attachment: scroll;
  }
}
</style>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); /* Optional overlay effect */
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7); /* semi-transparent navbar */
  color: white;
  position: relative;
}

@media (min-width: 768px) {
  .navbar {
    padding: 1rem 2rem;
  }
}

/* Title */
.title {
  margin: 0;
  font-size: 1.25rem;
  z-index: 1001;
}

@media (min-width: 768px) {
  .title {
    font-size: 1.5rem;
  }
}

/* Hamburger Menu Button */
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  transition: transform 0.3s ease;
}

.hamburger:hover {
  transform: scale(1.1);
}

.hamburger span {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Hamburger Animation when active */
.hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Hide hamburger on desktop */
@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}

/* Navigation Links */
.nav-links {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 80px 2rem 2rem;
  gap: 2rem;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
}

/* Show menu when open */
.nav-links.open {
  right: 0;
}

/* Desktop Navigation */
@media (min-width: 768px) {
  .nav-links {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    width: auto;
    max-width: none;
    height: auto;
    background: transparent;
    padding: 0;
    gap: 2rem;
    box-shadow: none;
    top: auto;
    right: auto;
  }

  .nav-links.open {
    right: auto;
  }
}

/* All Router Links */
.nav-links :deep(a) {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  .nav-links :deep(a) {
    font-size: 1rem;
    padding: 0;
    border-bottom: none;
  }
}

/* Hover Effect */
.nav-links :deep(a:hover) {
  font-weight: bold;
  color: #60a5fa;
}

/* Active Route Link */
.nav-links :deep(.active) {
  font-weight: bold;
  color: #60a5fa;
  text-decoration: none;
}

@media (min-width: 768px) {
  .nav-links :deep(.active) {
    color: white;
  }
}

/* Page content */
.page {
  flex: 1;
  padding: 1rem;
  color: white; /* to be readable over dark background */
}

@media (min-width: 768px) {
  .page {
    padding: 2rem;
  }
}

/* Prevent scroll when menu is open on mobile */
@media (max-width: 767px) {
  .layout:has(.nav-links.open) {
    overflow: hidden;
  }
}

</style>
