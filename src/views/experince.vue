<template>
  <div class="experience-wrapper">
    <h2 class="main-title">My Experiences</h2>
    
    <!-- Company Buttons Grid -->
    <div class="buttons-container">
      <!-- Imagine Sdn Bhd Button -->
      <div class="company-button" @click="openModal('imagine')">
        <img src="@/assets/imagine.png" alt="Imagine Sdn Bhd" />
        <p class="company-name">Imagine Sdn Bhd</p>
      </div>

      <!-- Coding BN Button -->
      <div class="company-button" @click="openModal('codingbn')">
        <img src="@/assets/cbn.png" alt="Coding BN Program" />
        <p class="company-name">Coding BN Program for AITI</p>
      </div>

      <!-- ABCI Button -->
      <div class="company-button" @click="openModal('abci')">
        <img src="@/assets/abci.png" alt="ABCI" />
        <p class="company-name">ABCI (Authority on Building Control and Construction Industry)</p>
      </div>
    </div>

    <!-- Modal Popup -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-card" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        
        <img :src="currentCompany.logo" :alt="currentCompany.name" class="modal-logo" />
        
        <h3 class="modal-title">{{ currentCompany.name }}</h3>
        <span class="modal-duration">{{ currentCompany.duration }}</span>
        
        <p class="modal-role">{{ currentCompany.role }}</p>
        
        <div class="modal-highlights">
          <h4>Highlights:</h4>
          <ul>
            <li v-for="(highlight, index) in currentCompany.highlights" :key="index">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isModalOpen = ref(false);
const selectedCompany = ref('');

// Company data
const companies = {
  imagine: {
    name: 'Imagine Sdn Bhd – Internship',
    duration: '3 months',
    role: 'Intern – Real-World Web Development Projects',
    logo: new URL('@/assets/imagine.png', import.meta.url).href,
    highlights: [
      'Started building real-world websites addressing practical problems.',
      'Learned to work on end-to-end web development projects, integrating frontend and backend.',
      'Applied AI and ML knowledge to support project objectives.'
    ]
  },
  codingbn: {
    name: 'Coding BN Program – AI & ML Internship',
    duration: '6 months',
    role: 'Intern – Web Development, AI & ML',
    logo: new URL('@/assets/cbn.png', import.meta.url).href,
    highlights: [
      'Learned basics of web app development and Python programming.',
      'Gained foundational knowledge in Artificial Intelligence (AI) and Machine Learning (ML).',
      'Hands-on practice through mini-projects and exercises in AI/ML concepts.'
    ]
  },
  abci: {
    name: 'ABCI – Authority on Building Control and Construction Industry',
    duration: '8 months',
    role: 'Intern / Student Attachment',
    logo: new URL('@/assets/abci.png', import.meta.url).href,
    highlights: [
      'Developed a Contractor Scoring System to replace the existing system with a standardized solution.',
      'Improved efficiency in contractor evaluation and data management.',
      'Gained experience in system analysis, design, and implementation.'
    ]
  }
};

const currentCompany = computed(() => companies[selectedCompany.value]);

function openModal(companyKey) {
  selectedCompany.value = companyKey;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  isModalOpen.value = false;
  document.body.style.overflow = '';
}
</script>

<style scoped>
.experience-wrapper {
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem;
  color: white;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 768px) {
  .experience-wrapper {
    margin: 2rem auto;
    padding: 2rem;
  }
}

.main-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  color: white;
}

@media (min-width: 768px) {
  .main-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
}

/* Company Buttons Container */
.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .buttons-container {
    flex-direction: row;
    gap: 3rem;
  }
}

/* Company Button Card */
.company-button {
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #444;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .company-button {
    max-width: 300px;
  }
}

.company-button:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
}

.company-button img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .company-button img {
    width: 180px;
    height: 180px;
  }
}

.company-button:hover img {
  transform: scale(1.1);
}

.company-name {
  font-size: 1rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin: 0;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .company-name {
    font-size: 1.125rem;
  }
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Modal Card */
.modal-card {
  background-color: rgba(0, 0, 0, 0.95);
  border: 2px solid white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: scaleUp 0.3s ease;
  box-shadow: 0 10px 50px rgba(255, 255, 255, 0.1);
}

@keyframes scaleUp {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (min-width: 768px) {
  .modal-card {
    padding: 2.5rem;
  }
}

/* Modal Close Button */
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: rotate(90deg);
}

/* Modal Logo */
.modal-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  display: block;
  margin: 0 auto 1.5rem;
}

@media (min-width: 768px) {
  .modal-logo {
    width: 150px;
    height: 150px;
  }
}

/* Modal Title */
.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0 0 1rem 0;
}

@media (min-width: 768px) {
  .modal-title {
    font-size: 1.75rem;
  }
}

/* Modal Duration */
.modal-duration {
  display: block;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0 auto 1.5rem;
  width: fit-content;
}

@media (min-width: 768px) {
  .modal-duration {
    font-size: 1rem;
  }
}

/* Modal Role */
.modal-role {
  font-size: 1rem;
  color: #ddd;
  text-align: center;
  margin: 0 0 1.5rem 0;
  font-style: italic;
}

@media (min-width: 768px) {
  .modal-role {
    font-size: 1.125rem;
  }
}

/* Modal Highlights */
.modal-highlights {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid white;
}

.modal-highlights h4 {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
}

@media (min-width: 768px) {
  .modal-highlights h4 {
    font-size: 1.375rem;
  }
}

.modal-highlights ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.modal-highlights li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.875rem;
  color: #ddd;
  line-height: 1.6;
  font-size: 1rem;
}

@media (min-width: 768px) {
  .modal-highlights li {
    font-size: 1.0625rem;
  }
}

.modal-highlights li:before {
  content: "▹";
  position: absolute;
  left: 0;
  color: white;
  font-size: 1.5rem;
  line-height: 1;
}
</style>

