<script setup>
</script>

<template>
  <main>
    <section class="flex justify-center px-4  h-full">
      <div class="w-full lg:flex xl:flex justify-center lg:mt-12 xl:mt-12 mt-4 lg:h-[490px] xl:h-[490px]">
        <div class="lg:w-[40%] xl:w-[40%] flex justify-center ">
          <img
            class="px-5 mt-5 rounded-full lg:block xl:block hidden lg:h-[475px] lg:w-[500px] xl:h-[475px] xl:w-[500px]"     
            alt=""
            src="../assets/profile2.jpg"
          />
        </div>
        <div class="lg:w-4/5 xl:w-1/2 w-full lg:px-12 py-3">
          <h2 class="text-2xl font-bold sm:text-3xl">About Me</h2>
          <p class="mt-4 text-gray-600 text-justify">
            My name is Kevin Rey P. Mahumot, and I specialize in crafting engaging web solutions. With a strong background in Vue.js for frontend development, I create dynamic user interfaces that captivate audiences. Leveraging Express for backend solutions, I ensure efficient server-side functionality. My expertise extends to MySQL for database management, where I optimize data handling to deliver seamless experiences.
            <br />
            <br />
            Driven by a passion for innovation, I focus on user-centric designs and optimizing performance. By combining creativity with technical skills, I deliver solutions that exceed user expectations. I stay updated with the latest technologies, ensuring my work is at the forefront of the digital landscape.
          </p>
          <div class="block xl:flex lg:flex items-center mt-8">
            <a
              href="https://github.com/Kevin-Mahumot"
              class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              <i class="fas fa-download px-2"></i>
              Download CV
            </a>
            <ul class="flex lg:flex px-0 lg:px-4 xl:px-4 xl:ml-4 lg:ml-4 mt-5 xl:mt-0 lg:mt-0">
              <li class="mr-2">
                <a
                  href="https://www.facebook.com/kevinrey.mahumot.12"
                  class="bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center w-9 h-9"
                >
                  <i class="fab fa-facebook-f text-2xl"></i>
                </a>
              </li>
              <!-- <li class="mr-2">
                <a
                  href="https://www.instagram.com/sterx_23/"
                  class="bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center w-9 h-9"
                >
                  <i class="fab fa-instagram text-2xl"></i>
                </a>
              </li> -->
              <li>
                <a
                  href="https://github.com/Kuze-Dev"
                  class="bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center w-9 h-9"
                >
                  <i class="fab fa-github text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  </main>
</template>
