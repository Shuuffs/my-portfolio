<template>
  <div class="card">
    <section class="about-section">
      <!-- Image on the LEFT -->
      <div class="image-block2 animate-fade-in-left">
        <img src="@/assets/pic.png" alt="Syufiq" />
      </div>

      <div class="text-block animate-fade-in-up">
        <h2>About Me</h2>
        <div v-if="loadingAbout" class="loading">Loading...</div>
        <template v-else>
          <p class="description">{{ aboutContent }}</p>
        </template>
      </div>
    </section>

    <section class="skills-section fade-in-bottom">
      <h1>Skills</h1>
      <div v-if="loadingSkills" class="loading">Loading...</div>
      <div v-else class="skills-grid">
        <div class="skill-item" v-for="skill in skills" :key="skill.id">
          <img :src="skill.icon_url" :alt="skill.name" />
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';

const loadingAbout = ref(true);
const loadingSkills = ref(true);
const aboutContent = ref('');
const skills = ref([]);

onMounted(async () => {
  const [aboutRes, skillsRes] = await Promise.all([
    supabase.from('about').select('content').single(),
    supabase.from('skills').select('id, name, icon_url').order('id'),
  ]);

  aboutContent.value = aboutRes.data?.content || '';
  loadingAbout.value = false;

  skills.value = (skillsRes.data || []).filter(s => s.icon_url);
  loadingSkills.value = false;
});
</script>

<style>
.loading {
  text-align: center;
  color: #aaa;
  font-size: 1rem;
  padding: 1rem;
}

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
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in-left {
  animation: fade-in-left 1s ease-out forwards;
}

@keyframes fadeInBottom {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in-bottom {
  opacity: 0;
  animation: fadeInBottom 1s ease-out forwards;
}
</style>
