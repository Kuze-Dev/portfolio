<template>
  <main class="mx-2 mt-5 ">
    <!-- Hero Container -->
    <div class="mx-auto w-full max-w-7xl px-2 md:px-10 md:py-24 lg:py-0 ">
      <!-- Component -->
      <div class="grid items-center justify-items-start gap-4 sm:gap-5 lg:grid-cols-2">
        <!-- Hero Content -->
        <div class="flex flex-col">
          <!-- Hero Title with typewriter effect -->
          <h1 class="mb-4 text-4xl font-bold md:text-6xl" id="typewriter"></h1>
          <p class="mb-6 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-10 lg:mb-12">
            I'm a web developer dedicated to crafting engaging and intuitive web solutions that leave a lasting impression
          </p>
          <!-- Hero Button -->
          <div class="flex items-center">
            <RouterLink
              to="/contact"
              class="mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8"
            >
              <i class="fas fa-comments px-3 "></i>Let's Talk
            </RouterLink>
            <RouterLink
  to="/project"
  class="flex max-w-full items-center font-semibold border text-white border-indigo-600 bg-indigo-600 hover:bg-transparent hover:text-black active:bg-gray-900/20 rounded-lg py-3 px-3"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    class="mr-2 inline-block max-h-4 w-5 transition-colors"
  >
    <path d="M17 7l-5 5h4v6h-6v-4l-5 5L3 12l10-10 10 10-6 6z" />
  </svg>
  <p>View Project</p>
</RouterLink>


          </div>
        </div>
        <!-- Hero Image with slime-like wave border -->
        <div
          class="relative mx-auto lg:h-[500px] xl:h-[500px] lg:w-[500px] xl:w-[500px]">
          <!-- Slime Border Container -->
          <div
            class="absolute inset-0 "
          ></div>
          <!-- Image -->
          <img
            src="../assets/profile1.jpg"
            alt="Profile Picture"
            class="relative h-full w-full animate-slime-border border rounded-[69%_31%_70%_30%/50%_68%_32%_50%] object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
    <aboutView/>
    <projectView/>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import aboutView from '@/views/aboutView.vue';
import projectView from '@/views/projectView.vue';

const typewriterText = ref("Welcome To My Portfolio!, I'm a Web Developer.");
let intervalId;
let isTypingCompleted = false;

// Function to create typewriter effect
const typeWriter = () => {
  const speed = 100; // Typing speed in milliseconds
  const typeWriterElement = document.getElementById("typewriter");
  if (typeWriterElement && typeWriterElement.textContent !== typewriterText.value) {
    typeWriterElement.textContent = ''; // Clear existing content
    let i = 0;
    const textLength = typewriterText.value.length;
    const typeWriterAnimation = () => {
      if (i < textLength) {
        typeWriterElement.textContent += typewriterText.value.charAt(i);
        i++;
        intervalId = setTimeout(typeWriterAnimation, speed);
      } else {
        isTypingCompleted = true;
      }
    };
    typeWriterAnimation();
  }
};

// Call the typewriter function when the component is mounted
onMounted(() => {
  typeWriter();
});

// Clear interval when leaving the current route
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Slime-like animation for the border radius */
@keyframes slime-border {
  0% {
    border-radius: 69% 31% 70% 30% / 50% 68% 32% 50%;
  }
  25% {
    border-radius: 65% 35% 60% 40% / 45% 70% 30% 55%;
  }
  50% {
    border-radius: 70% 30% 65% 35% / 55% 65% 35% 45%;
  }
  75% {
    border-radius: 68% 32% 72% 28% / 48% 67% 33% 52%;
  }
  100% {
    border-radius: 69% 31% 70% 30% / 50% 68% 32% 50%;
  }
}

.animate-slime-border {
  animation: slime-border 6s ease-in-out infinite;
  background-size: 200% 200%;
}
</style>
