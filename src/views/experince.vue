<template>
  <div class="experience-wrapper">
    <h2 class="main-title">My Experiences</h2>
    
    <div class="experiences-container">
      <!-- Imagine Sdn Bhd -->
      <div class="experience-card fade-in-left">
        <div class="experience-header">
          <h3>Imagine Sdn Bhd – Internship</h3>
          <span class="duration">3 months</span>
        </div>
        <p class="role">Intern – Real-World Web Development Projects</p>
        <div class="highlights">
          <h4>Highlights:</h4>
          <ul>
            <li>Started building real-world websites addressing practical problems.</li>
            <li>Learned to work on end-to-end web development projects, integrating frontend and backend.</li>
            <li>Applied AI and ML knowledge to support project objectives.</li>
          </ul>
        </div>
      </div>

      <!-- Coding BN Program -->
      <div class="experience-card fade-in-right">
        <div class="experience-header">
          <h3>Coding BN Program – AI & ML Internship</h3>
          <span class="duration">6 months</span>
        </div>
        <p class="role">Intern – Web Development, AI & ML</p>
        <div class="highlights">
          <h4>Highlights:</h4>
          <ul>
            <li>Learned basics of web app development and Python programming.</li>
            <li>Gained foundational knowledge in Artificial Intelligence (AI) and Machine Learning (ML).</li>
            <li>Hands-on practice through mini-projects and exercises in AI/ML concepts.</li>
          </ul>
        </div>
      </div>

      <!-- ABCI -->
      <div class="experience-card fade-in-left">
        <div class="experience-header">
          <h3>ABCI – Authority on Building Control and Construction Industry</h3>
          <span class="duration">8 months</span>
        </div>
        <p class="role">Intern / Student Attachment</p>
        <div class="highlights">
          <h4>Highlights:</h4>
          <ul>
            <li>Developed a Contractor Scoring System to replace the existing system with a standardized solution.</li>
            <li>Improved efficiency in contractor evaluation and data management.</li>
            <li>Gained experience in system analysis, design, and implementation.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.experience-wrapper {
  max-width: 1200px;
  margin: 1rem auto;
  padding: 1rem;
  color: white;
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

.experiences-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-card {
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #444;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .experience-card {
    padding: 2rem;
  }
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.experience-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid white;
}

@media (min-width: 768px) {
  .experience-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.experience-header h3 {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin: 0;
}

@media (min-width: 768px) {
  .experience-header h3 {
    font-size: 1.5rem;
  }
}

.duration {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  align-self: flex-start;
}

@media (min-width: 768px) {
  .duration {
    font-size: 1rem;
  }
}

.role {
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 1rem;
  font-style: italic;
}

@media (min-width: 768px) {
  .role {
    font-size: 1.125rem;
  }
}

.highlights {
  margin-top: 1rem;
}

.highlights h4 {
  font-size: 1.125rem;
  color: white;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

@media (min-width: 768px) {
  .highlights h4 {
    font-size: 1.25rem;
  }
}

.highlights ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.highlights li {
  position: relative;
  padding-left: 1.75rem;
  margin-bottom: 0.75rem;
  color: #ccc;
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  .highlights li {
    font-size: 1rem;
  }
}

.highlights li:before {
  content: "▹";
  position: absolute;
  left: 0;
  color: white;
  font-size: 1.5rem;
  line-height: 1;
}

/* Animations */
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

.fade-in-left {
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out forwards;
}

.fade-in-right {
  opacity: 0;
  animation: fadeInRight 0.8s ease-out forwards;
}

/* Stagger animation delays */
.experience-card:nth-child(1) {
  animation-delay: 0.1s;
}

.experience-card:nth-child(2) {
  animation-delay: 0.3s;
}

.experience-card:nth-child(3) {
  animation-delay: 0.5s;
}
</style>

