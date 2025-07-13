<template>
  <section class="contact-wrapper">
    <div class="contact-grid">
      <!-- LEFT: Contact Info -->
      <div class="contact-info fade-on-left">
        <h2>Contact Info</h2>
        <ul>
          <li>
            <strong>Address:</strong>
            <a
              href="https://www.google.com/maps/place/23+Jalan+Teknologi,+Kg+Anggerek+Desa,+BB3713,+Bandar+Seri+Begawan,+Brunei+Darussalam"
              target="_blank"
              ><br />
              23 Jalan Teknologi, <br />Kg Anggerek Desa BB3713<br />
              Bandar Seri Begawan <br />
              Brunei Darussalam<br />
            </a>
          </li>

          <li>
            <strong>Telephone:</strong>
            <a number="+673 1234567">+673 1234567</a>
          </li>
          <li>
            <strong>Email:</strong>
            <a href="Syufiq1507@gmail.com">syufiq1507@gmail.com</a>
          </li>
          <li>
            <strong>Github:</strong>
            <a href="https://github.com/Shuuffs" target="_blank"
              >https://github.com/Shuuffs</a
            >
          </li>
        </ul>
      </div>

      <!-- RIGHT: Contact Form -->
      <div class="contact-form fade-on-right">
        <h2>Contact Us</h2>
        <form @submit.prevent="submitForm">
          <input
            type="email"
            v-model="email"
            placeholder="Your Email"
            required
          />
          <textarea
            v-model="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    <!-- BELOW: Social Links -->
    <div class="contact-social fade-on-up">
      <h2>Find Me Online</h2>
      <div class="social-icons">
        <!-- Instagram -->
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>

        <!-- Facebook -->
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>

        <!-- Gmail (using envelope icon) -->
        <a href="mailto:syufiq@example.com" target="_blank" aria-label="Gmail">
          <i class="fas fa-envelope"></i>
        </a>

        <!-- TikTok -->
        <a
          href="https://www.tiktok.com/@yourusername"
          target="_blank"
          aria-label="TikTok"
        >
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const email = ref("");
const message = ref("");

function submitForm() {
  alert(`Message sent!\nFrom: ${email.value}\nMessage: ${message.value}`);
  email.value = "";
  message.value = "";
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-on-left")) {
            entry.target.classList.add("fade-in-left");
          } else if (entry.target.classList.contains("fade-on-right")) {
            entry.target.classList.add("fade-in-right");
          } else if (entry.target.classList.contains("fade-on-up")) {
            entry.target.classList.add("fade-in-up");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".fade-on-left, .fade-on-right, .fade-on-up")
    .forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.link-style {
  text-decoration: underline;
  cursor: pointer;
}

.contact-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Grid for left/right layout */
.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .contact-grid {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.contact-info {
  flex: 1;
  font-size: 1.25rem;
}
.contact-form {
  flex: 1;
  font-size: 1rem;
}

.contact-info h2 {
  font-size: 2em;
  margin-bottom: 1rem;
}
.contact-form h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin-right: 2rem;
}
.contact-info ul li {
  margin-bottom: 0.75rem;
  font-size: 1.125rem; /* Make list items bigger */
}

.contact-info a {
  color: #60a5fa;
  text-decoration: none;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  color: black;
}

.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

.contact-form button {
  padding: 0.6rem;
  font-size: 1rem;
  background-color: #2563eb;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #1e40af;
}

/* Social section below */
.contact-social {
  text-align: center;
  margin-top: 1rem;
}

.contact-social h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.contact-social .social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.contact-social img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
}

.contact-social img:hover {
  transform: scale(1.15);
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-left {
  opacity: 0;
  animation: fadeInLeft 1s ease-out forwards;
}

.fade-in-right {
  opacity: 0;
  animation: fadeInRight 1s ease-out forwards;
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
}
</style>
