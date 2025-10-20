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

const fullText = "A passionate software developer with experience working on multiple real-world projects.";
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
  padding: 1rem;
  color: white;
  min-height: 100vh;
}

@media (min-width: 768px) {
  .home-section {
    flex-direction: row;
    align-items: center;
    padding: 2rem;
    gap: 3rem;
  }
}

@media (min-width: 1024px) {
  .home-section {
    gap: 4rem;
  }
}

.text-block {
  flex: 1;
  text-align: center;
  max-width: 100%;
}

@media (min-width: 768px) {
  .text-block {
    text-align: left;
    max-width: 50%;
  }
}

.text-block h2 {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

@media (min-width: 768px) {
  .text-block h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
}

.text-block p {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: #ddd;
}

@media (min-width: 768px) {
  .text-block p {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
}

.description {
  color: #bbb;
  min-height: 1.5rem;
}

.btn-contact {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

@media (min-width: 768px) {
  .btn-contact {
    margin-left: 0;
  }
}

.btn-contact:hover {
  background-color: #1e40af;
}

.image-block {
  width: 100%;
  max-width: 280px;
  height: auto;
  aspect-ratio: 5/6;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .image-block {
    max-width: 350px;
  }
}

@media (min-width: 1024px) {
  .image-block {
    max-width: 400px;
  }
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
