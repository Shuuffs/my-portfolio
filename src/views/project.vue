<template>
  <div>
    <section class="education-section fade-in-bottom">
      <h2 class="section-title">Education</h2>
      <div v-if="loadingEducation" class="loading">Loading...</div>
      <div v-else class="education-row">
        <div
          v-for="edu in education"
          :key="edu.id"
          class="education-card"
        >
          <img :src="'/' + edu.logo_filename" :alt="edu.institution" />
          <div class="education-details">
            <h3>{{ edu.period }}</h3>
            <p v-for="(detail, i) in edu.details" :key="i">
              <em v-if="i === edu.details.length - 1">{{ detail }}</em>
              <span v-else>{{ detail }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-section fade-in-bottom">
      <h2 class="section-title">Projects</h2>
      <div v-if="loadingProjects" class="loading">Loading...</div>
      <div v-else class="projects-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card"
          :class="project.id % 2 === 1 ? 'fade-in-left' : 'fade-in-right'"
        >
          <img
            :src="project.image_url"
            :alt="project.title"
            class="project-img"
            @click="openModal(project.image_url, project.title)"
          />
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <span class="tech-used">{{ project.tech_stack }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal/Lightbox -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <img :src="modalImage" :alt="modalAlt" class="modal-image" />
        <p class="modal-caption">{{ modalAlt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';

const loadingEducation = ref(true);
const loadingProjects = ref(true);
const education = ref([]);
const projects = ref([]);

const isModalOpen = ref(false);
const modalImage = ref('');
const modalAlt = ref('');

onMounted(async () => {
  const [eduRes, projRes] = await Promise.all([
    supabase.from('education').select('*').order('display_order'),
    supabase.from('projects').select('*').order('id'),
  ]);

  education.value = eduRes.data || [];
  loadingEducation.value = false;

  projects.value = projRes.data || [];
  loadingProjects.value = false;
});

function openModal(imageSrc, imageAlt) {
  modalImage.value = imageSrc;
  modalAlt.value = imageAlt;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  isModalOpen.value = false;
  document.body.style.overflow = '';
}
</script>

<style>
.loading {
  text-align: center;
  color: #aaa;
  font-size: 1rem;
  padding: 1rem;
}

.education-section {
  padding: 1.5rem 1rem;
  color: white;
}

@media (min-width: 768px) {
  .education-section {
    padding: 3rem 2rem;
  }
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

.education-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .education-row {
    gap: 2rem;
  }
}

.education-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #444;
  border-radius: 12px;
  padding: 1.25rem;
  width: 100%;
  max-width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (min-width: 540px) {
  .education-card {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    max-width: 450px;
  }
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.education-card img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
  background-color: white;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .education-card img {
    width: 80px;
    height: 80px;
  }
}

.education-details {
  text-align: center;
}

@media (min-width: 540px) {
  .education-details {
    text-align: left;
  }
}

.education-details h3 {
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

@media (min-width: 768px) {
  .education-details h3 {
    font-size: 1.2rem;
  }
}

.education-details p {
  margin: 0.3rem 0;
  color: #ddd;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .education-details p {
    font-size: 1rem;
  }
}

.projects-section {
  padding: 1.5rem 1rem;
  text-align: center;
}

@media (min-width: 768px) {
  .projects-section {
    padding: 2rem;
  }
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .projects-grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
}

.project-card {
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #444;
  padding: 1.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  min-height: 400px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .project-card {
    padding: 1.5rem;
    width: calc(50% - 1rem);
    max-width: 450px;
    min-height: 480px;
  }
}

@media (min-width: 1024px) {
  .project-card {
    max-width: 500px;
    min-height: 500px;
  }
}

.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
}

.project-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.project-img:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

@media (min-width: 768px) {
  .project-img {
    height: 220px;
  }
}

.project-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: white;
}

@media (min-width: 768px) {
  .project-card h3 {
    font-size: 1.5rem;
  }
}

.project-card p {
  font-size: 0.9rem;
  color: #ccc;
  flex: 1;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  .project-card p {
    font-size: 1rem;
  }
}

.tech-used {
  display: inline-block;
  margin-top: auto;
  padding-top: 0.5rem;
  font-size: 0.8rem;
  color: #aaa;
  align-self: flex-start;
}

@media (min-width: 768px) {
  .tech-used {
    font-size: 0.875rem;
  }
}

.project-card > div {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
}

/* Animations */
.fade-in-left { animation: fadeInLeft 1s ease forwards; }
.fade-in-right { animation: fadeInRight 1s ease forwards; }
.fade-in-bottom {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInBottom 0.8s ease-out forwards;
}

@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInBottom {
  to { opacity: 1; transform: translateY(0); }
}

/* Modal/Lightbox Styles */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 1rem;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: zoomIn 0.3s ease;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.modal-caption {
  color: white;
  font-size: 1.2rem;
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
}

.modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  transform: scale(1.2) rotate(90deg);
  color: #60a5fa;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}
</style>
