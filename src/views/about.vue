<template>
  <div class="card">
    <section class="about-section">
      <!-- Image on the LEFT -->
      <div class="image-block2 animate-fade-in-left">
        <img src="@/assets/pic.png" alt="Syufiq" />
      </div>

      <!-- Text on the RIGHT -->
      <div class="text-block animate-fade-in-up">
        <h2>About Me</h2>

        <p class="description">
          Hi! I'm Syufiq, a Software Development major. Since I hadn’t practiced
          coding in a while, I joined Coding.bn to relearn and improve my
          skills. In our first assessment, we built a dynamic list using the
          Spaceflight News API with React all from scratch and without an API
          key. It was tough at first, but with help from mentors and teammates,
          we got it working. It really helped refresh my React knowledge and
          boost my confidence.
        </p>

        <p class="description">
          For the second project, we created a personal portfolio using Vite and
          Vue.js. I also used Tailwind CSS to make the design look cleaner and
          work well on different screen sizes. This task helped me understand
          how Vue components, routing, and reactivity work. I also learned how
          tools like Vite and Tailwind can make front-end development faster and
          easier. Overall, it was a great experience that helped me use what
          I’ve learned in a real project and improve as a developer.
        </p>
      </div>
    </section>

    <section class="skills-section fade-in-bottom">
      <h1>Skills</h1>
      <div class="skills-grid">
        <div class="skill-item" v-for="skill in skills" :key="skill.name">
          <img :src="skill.logo" :alt="skill.name" />
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function goToContact() {
  router.push("/contact");
}

const skills = [
  {
    name: "VueJS",
    logo: new URL("@/assets/vue.svg", import.meta.url).href,
  },
  {
    name: "ReactJS",
    logo: new URL("@/assets/react.svg", import.meta.url).href,
  },
  {
    name: "React Native",
    logo: new URL("@/assets/react.svg", import.meta.url).href,
  },
  {
    name: "Expo",
    logo: new URL("@/assets/expo.svg", import.meta.url).href,
  },
  {
    name: "Supabase",
    logo: new URL("@/assets/supabase.svg", import.meta.url).href,
  },
  {
    name: "VS Code",
    logo: new URL("@/assets/vsc.png", import.meta.url).href,
  },
  {
    name: "Tailwind CSS",
    logo: new URL("@/assets/tailwind.png", import.meta.url).href,
  },
  {
    name: "NodeJS",
    logo: new URL("@/assets/node.svg", import.meta.url).href,
  },
  {
    name: "Flutter",
    logo: new URL("@/assets/flutter.svg", import.meta.url).href,
  },
];
</script>

<style>
.skills-section {
  text-align: center;
  color: white;
  padding: 1.5rem;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .skills-section {
    padding: 2rem;
    font-size: 1.8rem;
  }
}

.skills-section h2 {
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .skills-grid {
    gap: 1.5rem;
  }
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem;
  border: 1px solid #555;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  width: 100%;
  max-width: 140px;
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .skill-item {
    gap: 1rem;
    padding: 1rem;
    max-width: 180px;
  }
}

@media (min-width: 1024px) {
  .skill-item {
    max-width: 220px;
  }
}

.skill-item:hover {
  transform: scale(1.05);
  border-color: #60a5fa;
}

.skill-item img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

@media (min-width: 768px) {
  .skill-item img {
    width: 36px;
    height: 36px;
  }
}

.skill-item span {
  font-size: 0.875rem;
  font-weight: 500;
  color: #eee;
}

@media (min-width: 768px) {
  .skill-item span {
    font-size: 1rem;
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: relative;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 100%;
  min-height: 250px;
  margin: 1rem;
}

@media (min-width: 768px) {
  .card {
    padding: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
  }
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: white;
}

@media (min-width: 768px) {
  .about-section {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
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
  font-size: 0.95rem;
  margin-bottom: 0.875rem;
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

.btn-contact:hover {
  background-color: #1e40af;
}

.image-block2 {
  width: 100%;
  max-width: 200px;
  height: auto;
  aspect-ratio: 3/4;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .image-block2 {
    max-width: 250px;
    margin-left: 2rem;
  }
}

@media (min-width: 1024px) {
  .image-block2 {
    max-width: 300px;
    margin-left: 3rem;
  }
}

.image-block2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Animations */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 1s ease-out forwards;
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-bottom {
  opacity: 0;
  animation: fadeInBottom 1s ease-out forwards;
}
</style>
