<template>
  <section class="home-section">
    <!-- Text on the LEFT -->
    <div class="text-block animate-fade-in-up">
      <p>Hello World, I'm</p>
      <h2>Muhammad Syufiq</h2>
      <p class="description">
        <span>{{ typedText }}</span>
      </p>
      <p>
        <strong>Welcome to my personal website</strong>
      </p>

      <button class="btn-contact" @click="goToContact">Contact Me</button>
    </div>

    <!-- Image on the RIGHT -->
    <div class="image-block animate-fade-in-right">
      <img src="@/assets/pic.png" alt="Syufiq" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const fullText = "Front-End Developer Majoring in Vue.js";
const typedText = ref("");
let index = 0;

onMounted(() => {
  const typingInterval = setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index];
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 60); // speed: 60ms per character
});

function goToContact() {
  router.push("/contact");
}
</script>

<style>
.home-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .home-section {
    flex-direction: row;
    align-items: flex-start;
  }
}

.text-block {
  flex: 1;
  text-align: center;
}

@media (min-width: 768px) {
  .text-block {
    text-align: left;
  }
}

.text-block h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.text-block p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: #ddd;
}

.description {
  color: #bbb;
}

.btn-contact {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background-color: #2563eb;
  margin-left: 50vh;

  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-contact:hover {
  background-color: #1e40af;
}

.image-block {
  width: 50vh;
  height: 60vh;
  border-radius: 0.5rem;
  margin-right: 50vh;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.image-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}

.description span::after {
  content: "|";
  animation: blink 0.8s step-end infinite;
  margin-left: 4px;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
