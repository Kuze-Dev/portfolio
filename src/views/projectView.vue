<template>

    <section class="relative  mt-10 text-gray-800  ">

      <div class="absolute inset-0 pointer-events-none">
        <svg
          class="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#4f46e5"
            fill-opacity="0.5"
            d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,112C672,107,768,181,864,218.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
  
      <div class="container mx-auto">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Project Portfolio
          </h2>
          <div class="lg:w-[50%] xl:w-[50%] px-5 mx-auto" >
          <p class="text-base md:text-lg lg:text-xl text-justify  xl:text-xl text-[14px] ">
            My portfolio reflects my commitment to continuous learning and growth in Web Development. Each project is an opportunity for me to showcase my skills and expertise.
          </p>
        </div>
        </div>
  
       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 mt-12">
        <div v-for="(item, index) in blogItems" :key="index">
          <a
            :href="item.githubLink"
            target="_blank"
            class="block border border-gray-200 dark:border-dark-3 rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 bg-white shadow-lg"
          >
            <div class="overflow-hidden">
              <img :src="item.image" alt="image" class="w-full h-full object-cover object-center" />
            </div>
            <div class="p-6">
              <span class="block mb-2 text-xs font-semibold uppercase">{{ item.date }}</span>
              <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-justify">{{ item.details }}</p>
              <p class="text-base mt-2">{{ item.tools }}</p>
            </div>
          </a>
        </div>
          </div>
        </div>
      <footerComponent class="mt-8"/>
    </section>
    <!-- ====== Blog Section End -->
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import footerComponent from '@/components/footerComponent.vue';
  
  const blogItems = ref([
   
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mcm-chuch.appspot.com/o/warsmows.png?alt=media&token=d658fdc9-a236-43ea-9f2c-02056fee2dcc', 
      title: 'Water Refilling Sales Monitoring Web System (Dynamic Web System)',
      details: 'The Water Refilling Sales Monitoring Web System helps manage sales, inventory, and customer transactions in a water refilling business. It provides real-time updates, tracks stock levels, and generates sales reports automatically. This system makes operations more efficient and ensures accurate monitoring of daily business activities.',
      tools:'Tech Stack Used: HTML,CSS,TAILWIND CSS,VUE.JS,NODE,EXPRESS & MYSQL',
      // buttonText: 'View Details',
      // buttonLink: '#',
      // date: 'Mar 15, 2023'
      githubLink: 'https://github.com/Kuze-Dev/WARSMOWS',
    },
   
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mcm-chuch.appspot.com/o/Static%20Website.png?alt=media&token=13cade2e-1c3d-4a50-9e69-32514755af99', 
      title: 'Static Website',
      details: 'Static Website is a development project showcasing a clean and responsive design, built with HTML and CSS. By leveraging CSS Media Queries, I ensured the website adapts beautifully to different screen sizes and devices. This project highlights my ability to create functional and visually appealing static websites with a focus on responsiveness.',
      // buttonText: 'View Details',
      // buttonLink: '#',
      // date: 'Mar 21, 2024'
      githubLink: 'https://github.com/Kuze-Dev/Static-Website',

    },
    {
  image: 'https://firebasestorage.googleapis.com/v0/b/mcm-chuch.appspot.com/o/portfolio1.png?alt=media&token=edaa8096-9426-4d08-abd4-e451a47f01fe', // Adjust the path to the actual image location
  title: 'Portfolio-Vue.js',
  details: 'Portfolio-Vue.js is a project I developed using Vue.js, showcasing my skills in building responsive and dynamic web applications. Designed with responsive design principles, it ensures seamless usability and aesthetics across all devices. This portfolio highlights my expertise in modern web development, with clean layouts and efficient functionality.',
   githubLink: 'https://mahumotkevinreyportfolio.netlify.app/',
   
},

    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mcm-chuch.appspot.com/o/jjkspotify%20(1).jpg?alt=media&token=921eaee8-a2c6-473b-ae33-6fb4c2fd2456', 
      title: 'Mini JJK Spotify',
      details: 'Mini JJK Spotify is a simple music app where users can explore playlists, play songs, and enjoy a smooth interface. It’s built with Vue.js and hosted on Netlify for fast performance and easy access.',
       githubLink: 'https://jjkspotify.netlify.app/',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mcm-chuch.appspot.com/o/minireminderscheduler%20(1).jpg?alt=media&token=a854d823-f5ec-48a1-befb-dbd66701e60b', 
      title: 'Mini Reminder Scheduler (Still Working)',
      details: 'Mini Reminder Scheduler is a simple app that helps you set reminders and alarms. It’s easy to use, built for scheduling tasks or events, and ensures you never miss anything important.',
      githubLink: 'https://github.com/Kuze-Dev/Mini-Reminder-Scheduler',

    },
   
    
  ])
  </script>
  
  <style scoped>
  .transition-transform {
    transition-property: transform;
  }
  
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  </style>