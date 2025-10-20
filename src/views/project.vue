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
        <!-- Laravel Project -->
        <div class="project-card fade-in-left">
          <img
            src="@/assets/csa.png"
            alt="Contractor Scoring System"
            class="project-img"
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
  </div>
</template>

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
  align-items: center;
  width: 100%;
  max-width: 500px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .project-card {
    padding: 1.5rem;
  }
}

.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
}

.project-img {
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
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
}

@media (min-width: 768px) {
  .project-card p {
    font-size: 1rem;
  }
}

.tech-used {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #aaa;
}

@media (min-width: 768px) {
  .tech-used {
    font-size: 0.875rem;
  }
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
</style>
