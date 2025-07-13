<template>
  <div class="layout">
    <!-- NAVBAR -->
    <header class="navbar">
      <h1 class="title font-mono text-3xl text-cyan-400">Portfolio</h1>
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/about" exact-active-class="active">About</router-link>
        <router-link to="/project" exact-active-class="active"
          >Resume</router-link
        >
        <router-link to="/experince" exact-active-class="active"
          >Experience</router-link
        >
        <router-link to="/contact" exact-active-class="active"
          >Contact</router-link
        >
      </nav>
    </header>

    <!-- PAGE CONTENT -->
    <main class="page">
      <router-view />
    </main>
  </div>
</template>

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
</style>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.4); /* Optional overlay effect */
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.7); /* semi-transparent navbar */
  color: white;
  position: relative;
}

/* Title */
.title {
  margin: 0;
  font-size: 1.5rem;
}

/* Centered Links */
.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
}

/* All Router Links */
.nav-links :deep(a) {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: font-weight 0.2s ease;
}

/* Hover Effect */
.nav-links :deep(a:hover) {
  font-weight: bold;
}

/* Active Route Link */
.nav-links :deep(.active) {
  font-weight: bold;
  text-decoration: none;
}

/* Page content */
.page {
  flex: 1;
  padding: 2rem;
  color: white; /* to be readable over dark background */
}
</style>
