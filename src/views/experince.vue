<template>
  <div class="experience-wrapper">
    <!--  Experience List -->
    <div class="experience-list fade-in">
      <h3>My Experiences</h3>
      <div v-if="experiences.length === 0">No experiences added yet.</div>
      <div v-else>
        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="experience-item"
        >
          <h4>{{ exp.title }}</h4>
          <p>
            <strong>{{ exp.dates }}</strong> at {{ exp.place }}
          </p>
          <p>{{ exp.description }}</p>

          <!-- 📄 Show file if uploaded -->
          <div v-if="exp.file">
            <a :href="exp.file" target="_blank" class="file-link"
              >View Attached File</a
            >
          </div>

          <button @click="deleteExperience(index)" class="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>

    <h2>Add Experience</h2>

    <div class="experience-content">
      <!-- 📋 Form Section -->
      <form @submit.prevent="handleSubmit" class="experience-form fade-in">
        <input
          v-model="title"
          type="text"
          placeholder="Title (e.g. Intern, Teacher)"
          required
        />
        <input
          v-model="dates"
          type="text"
          placeholder="Dates (e.g. Jan 2020 - Dec 2020)"
          required
        />
        <input
          v-model="place"
          type="text"
          placeholder="Company/School Name"
          required
        />
        <textarea
          v-model="description"
          placeholder="Description"
          rows="3"
          required
        ></textarea>

        <!-- 📎 File Upload -->
        <input
          type="file"
          @change="handleFileUpload"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
        />

        <button type="submit">Add Experience</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const title = ref("");
const dates = ref("");
const place = ref("");
const description = ref("");
const file = ref(null); // Store file as base64
const experiences = ref([]);

// Load from localStorage
onMounted(() => {
  const stored = localStorage.getItem("experiences");
  if (stored) experiences.value = JSON.parse(stored);
});

// Handle File Upload
function handleFileUpload(e) {
  const uploadedFile = e.target.files[0];
  if (!uploadedFile) return;

  const reader = new FileReader();
  reader.onload = () => {
    file.value = reader.result;
  };
  reader.readAsDataURL(uploadedFile);
}

// Submit Form
function handleSubmit() {
  const newExperience = {
    title: title.value,
    dates: dates.value,
    place: place.value,
    description: description.value,
    file: file.value || null,
  };

  experiences.value.push(newExperience);
  localStorage.setItem("experiences", JSON.stringify(experiences.value));

  // Clear form
  title.value = "";
  dates.value = "";
  place.value = "";
  description.value = "";
  file.value = null;
}

// Delete Experience
function deleteExperience(index) {
  experiences.value.splice(index, 1);
  localStorage.setItem("experiences", JSON.stringify(experiences.value));
}
</script>

<style scoped>
.experience-wrapper {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1.5rem;
  color: white;
}

.experience-content {
  display: flex;
  flex-direction: column; /* 👈 Stack vertically */
}

@media (max-width: 768px) {
  .experience-content {
    flex-direction: column;
  }
}

.experience-form {
  flex: 5;
  width: 100%;
}
.experience-list {
  flex: 2;
  min-width: 300px;
}

.experience-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-form input,
.experience-form textarea {
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: white;
  color: black;
}

.experience-form button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.experience-form button:hover {
  background-color: #1e40af;
}

.experience-list h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.experience-item {
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #444;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.delete-btn {
  margin-top: 0.5rem;
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.875rem;
}

.delete-btn:hover {
  background-color: #b91c1c;
}

.file-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #38bdf8;
  text-decoration: underline;
  font-size: 0.95rem;
}

.file-link:hover {
  color: #0ea5e9;
}

/* ✨ Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}
</style>
