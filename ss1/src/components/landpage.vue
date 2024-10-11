<template>
  <div class="container">
    <div class="row full-height">
      <div class="col donate-now full-height">
        <button class="btndonatenow full-width-btn" @click="navigateTodonatenow">Donate Now</button>
      </div>

      <div class="col admin-login full-height">
        <button class="btnadminlogin full-width-btn" @click="navigateToadminlogin">
          Admin Login
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col videoContainer">
        <video autoplay loop muted playsinline class="logoVideo">
          <source src="@/assets/videos/mental-health-logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div class="col contentContainer">
        <div class="row full-height">
          <div class="col-6 full-height">
            <div class="About full-height">
              <button class="btnaboutus full-width-btn" @click="navigateToaboutus">About Us</button>
            </div>
          </div>
          <div class="col-6 full-height">
            <div class="ourservices full-height">
              <button class="btnourservices full-width-btn" @click="navigateToourservices">
                Our Services
              </button>
            </div>
          </div>
        </div>

        <div class="row full-height">
          <div class="col-6 full-height">
            <div class="Login full-height">
              <button class="btnLogin full-width-btn" @click="navigateToSignupLogin">
                Professional LOGIN / SIGN-UP
              </button>
            </div>
          </div>
          <div class="col-6 full-height">
            <div class="Signup full-height">
              <button class="btnSignup full-width-btn" @click="navigateToSignupLogins">
                User SIGNUP / LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image rotation row -->
    <div class="image-slider">
      <div class="slider-wrapper">
        <div
          class="slide"
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: currentIndex === index }"
        >
          <img :src="image" alt="Image" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col d-flex justify-content-between">
        <div class="Contact flex-fill">
          <button class="btnacontactus full-width-btn" @click="navigateTocontactus">
            Contact Us
          </button>
        </div>

        <div class="feedback flex-fill">
          <button class="btnafeedback full-width-btn" @click="navigateTofeedback">Feedback</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Global styles */
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Arial', sans-serif;
  overflow-x: hidden;
  background-color: #f0f9f9; /* Light mint green for calmness */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.col {
  flex: 1;
  margin: 4px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #b0e0e6; /* Subtle light border */
  transition: box-shadow 0.3s ease; /* Add a subtle shadow effect */
}

.col:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Elevate on hover */
}

button {
  background-color: #3b82f6; /* Soft blue for trust */
  border: none; /* No border for buttons */
  color: white;
  padding: 12px 20px;
  margin: 10px 0; /* Added margin for spacing */
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease; /* Added transform for button scaling */
  font-size: 1.2rem;
}

button:hover {
  background-color: #2563eb; /* Darker blue for hover effect */
  transform: scale(1.05); /* Scale up on hover */
}

.videoContainer {
  flex: 1;
  max-width: 300px;
  border: 1px solid #b0e0e6; /* Subtle light border for video container */
  border-radius: 8px; /* Matching rounding for video container */
  background-color: cornsilk;
  overflow: hidden; /* Prevent overflow */
}

.logoVideo {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.contentContainer {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}

/* Image rotation styles */
.image-slider {
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  margin: 20px auto; /* Increased margin for better spacing */
  border: 1px solid #b0e0e6; /* Subtle light border for image slider */
  border-radius: 8px;
  position: relative; /* Required for absolute positioning of images */
}

.slider-wrapper {
  display: flex;
  width: 100%;
  position: relative;
  height: 300px; /* Set a fixed height for images */
}

.slide {
  min-width: 100%; /* Each image takes full width */
  transition: opacity 1s ease-in-out; /* Smooth fade effect */
  opacity: 0; /* Start hidden */
  position: absolute; /* Position slides absolutely within the .slider-wrapper */
  top: 0;
  left: 0;
}

.slide img {
  width: 100%; /* Ensure the image covers the slide */
  height: 100%; /* Ensure the image covers the slide */
  object-fit: cover; /* Covers the slide area, might crop some parts of the image */
}

.slide.active {
  opacity: 1; /* Show the active image */
  position: relative; /* Make the active slide relative so it's part of the document flow */
  z-index: 1; /* Ensures the active slide is above others */
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .col-6,
  .videoContainer,
  .contentContainer {
    width: 100%;
  }

  .half-height {
    height: auto;
    margin-bottom: 10px;
  }
}

.full-width-btn {
  width: 100%; /* Set buttons to cover full width of their parent */
}

.full-height {
  height: 100%; /* Ensure the element takes full height of its parent */
}

.row.full-height {
  height: 50%; /* Each row takes half of the contentContainer */
}
</style>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const images = ref([
  new URL('../assets/Images/image5.jpg', import.meta.url).href,
  new URL('../assets/Images/image6.jpg', import.meta.url).href
])

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length // Correct logic for rotation
}

onMounted(() => {
  setInterval(nextSlide, 5000) // Change image every 5 seconds
})

const router = useRouter()

const navigateToadminlogin = () => {
  router.push({ name: 'loginForAdminPage' }) // Navigate to loginforadmin.vue
}

const navigateTodonatenow = () => {
  router.push({ name: 'donatenowPage' })
}

const navigateToaboutus = () => {
  router.push({ name: 'aboutUs' })
}

const navigateToourservices = () => {
  router.push({ name: 'ourServices' })
}

const navigateTocontactus = () => {
  router.push({ name: 'contactUs' })
}

const navigateTofeedback = () => {
  router.push({ name: 'feedBack' })
}

const navigateToSignupLogin = () => {
  router.push({ name: 'loginSignupDoctor' })
}

const navigateToSignupLogins = () => {
  router.push({ name: 'loginSignupPatient' })
}
</script>
