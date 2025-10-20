<template>
  <div>
    <section class="education-section fade-in-bottom">
      <h2 class="section-title">Education</h2>

      <div class="education-row">
        <!-- A-Level -->
        <div class="education-card">
          <img src="@/assets/md.jfif" alt="A-Level" />
          <div class="education-details">
            <h3>February 2018 – November 2019</h3>
            <p>Maktab Duli Pengiran Muda Al-Muhtadee Billah, My Subject are:</p>
            <p>Chemistry, Mathematics, Physics</p>
          </div>
        </div>

        <!-- UTB -->
        <div class="education-card">
          <img src="@/assets/utb.png" alt="UTB" />
          <div class="education-details">
            <h3>August 2020 – August 2024</h3>
            <p>Universiti Teknologi Brunei</p>
            <p>Bachelor of Science in Computing</p>
            <p><em>Major in Software Development</em></p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-section fade-in-bottom">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        <!-- AI Todolist Project -->
        <div class="project-card fade-in-left">
          <img
            src="@/assets/ai.jpg"
            alt="AI Todolist"
            class="project-img"
            @click="openModal('@/assets/ai.jpg', 'AI Todolist')"
          />
          <div>
            <h3>AI Todolist</h3>
            <p>
              An intelligent to-do list application with a functional chatbot powered by Google's Gemini AI (free tier). 
              Users can manage tasks through natural conversation, with the AI understanding context and helping organize 
              daily activities efficiently.
            </p>
            <span class="tech-used">React • Gemini AI • JavaScript • CSS</span>
          </div>
        </div>

        <!-- MSME Management System -->
        <div class="project-card fade-in-right">
          <img
            src="@/assets/msme.png"
            alt="MSME Management System"
            class="project-img"
            @click="openModal('@/assets/msme.png', 'MSME Management System')"
          />
          <div>
            <h3>MSME Management System</h3>
            <p>
              A comprehensive management system designed for small businesses and grocery stores. 
              Features include inventory tracking, sales management, revenue analytics, and business insights 
              to help micro, small, and medium enterprises streamline their operations.
            </p>
            <span class="tech-used">React • Node.js • MongoDB • Chart.js</span>
          </div>
        </div>

        <!-- Laravel Project -->
        <div class="project-card fade-in-left">
          <img
            src="@/assets/csa.png"
            alt="Contractor Scoring System"
            class="project-img"
            @click="openModal('@/assets/csa.png', 'Contractor Scoring System')"
          />
          <div>
            <h3>Contractor Scoring System</h3>
            <p>
              Built with Laravel, this web system evaluates contractor
              performance by scoring their completed work. High-scoring
              contractors are marked as excellent, while poorly rated ones are
              blacklisted for accountability.
            </p>
            <span class="tech-used">Laravel • PHP • MySQL</span>
          </div>
        </div>

        <!-- Flutter Project -->
        <div class="project-card fade-in-right">
          <img
            src="@/assets/wts.png"
            alt="Water Taxi Tracking App"
            class="project-img"
            @click="openModal('@/assets/wts.png', 'Water Taxi Tracking App')"
          />
          <div>
            <h3>Water Taxi Tracking App</h3>
            <p>
              A Flutter-based mobile app developed with Android Studio that
              helps Kampung Ayer residents and tourists book water taxis like
              Uber. It features real-time tracking, tidal predictions, and
              hotspot customer locations.
            </p>
            <span class="tech-used">Flutter • Android Studio • Firebase</span>
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
import { ref } from 'vue';

const isModalOpen = ref(false);
const modalImage = ref('');
const modalAlt = ref('');

function openModal(imageSrc, imageAlt) {
  // Convert the @/assets path to actual import
  const imageUrl = new URL(`../assets/${imageSrc.split('/').pop()}`, import.meta.url).href;
  modalImage.value = imageUrl;
  modalAlt.value = imageAlt;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // Restore scrolling
}
</script>

<style>
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
  transition: transform 0.3s ease;
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
  transform: translateY(-4px);
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

.education-details p,
.education-details ul {
  margin: 0.3rem 0;
  color: #ddd;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .education-details p,
  .education-details ul {
    font-size: 1rem;
  }
}

.education-details ul {
  list-style-type: disc;
  padding-left: 1.2rem;
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

/* Animation */
.fade-in-top {
  animation: fadeInTop 1s ease forwards;
}
.fade-in-left {
  animation: fadeInLeft 1s ease forwards;
}
.fade-in-right {
  animation: fadeInRight 1s ease forwards;
}
.fade-in-bottom {
  animation: fadeInBottom 1s ease forwards;
}

@keyframes fadeInTop {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-bottom {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInBottom 0.8s ease-out forwards;
}

@keyframes fadeInBottom {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modal/Lightbox Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
