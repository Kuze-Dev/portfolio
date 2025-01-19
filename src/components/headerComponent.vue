<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const isLoading = ref(true);
const isMenuOpen = ref(false);
const menuRef = ref(null);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);

  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};
</script>


<style scoped>
.menu-button {
  position: relative;
}

.menu-button a:hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black; /* Color of the underline */
}

.menu-button2 {
  position: relative;
}

.menu-button2 a:hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 25%;
  height: 2px;
  background-color: black; /* Color of the underline */
}
</style>


<template>
  <div class="flex flex-col " >
    <header>
      <nav>
        <nav class="block w-full px-4 py-2 mx-auto text-gray-500 bg-white border shadow-md  border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div class="container flex items-center justify-between mx-auto text-blue-gray-900 sm:w-full">
            <a  class="mr-4 lg:mx-10 xl:mx-10 py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased flex justify-center items-center">
              <img src="../assets/logo.png" class="h-12 w-12"/>
              <p class="mx-2"> WEB-WORK'S</p>
            </a>
            <div class="hidden lg:block  ml-[55px]">
              <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li class="menu-button flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                  <i class="fas fa-home"></i>
                  <RouterLink to="/" >Home</RouterLink>
                </li>
                <li class="menu-button flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                  <i class="fas fa-user"></i>
                  <RouterLink to="/about">About</RouterLink>
                </li>
                <li class="menu-button flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                  <i class="fas fa-folder"></i>
                  <RouterLink to="/project" >Project</RouterLink>
                </li>
                <li class="menu-button flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                  <i class="fas fa-envelope"></i> 
                  <RouterLink to="/contact" >Contact</RouterLink>
                </li>
              </ul>
            </div>
            <div class="flex sm:flex justify-start">
              <!-- Get Started Button
              <RouterLink to="/getStart" class=" lg:inline-block px-4 py-2 font-sans text-xs font-bold text-center text-gray-900  align-middle transition-all rounded-lg select-none active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:hidden">
  <span class="bg-black py-3 px-3 rounded-lg text-white">Get Started</span>
</RouterLink> -->


              <button @click="toggleMenu" class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-5" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
           <div class="lg:hidden" v-show="isMenuOpen" @click.self="closeMenu">
            <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bprder-b">
              <li class="menu-button2 flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <i class="fas fa-home"></i>
                <RouterLink to="/" >Home</RouterLink>
              </li>
              <li class="menu-button2 flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <i class="fas fa-user"></i>
                <RouterLink to="/about" >About</RouterLink>
              </li>
              <li class="menu-button2 flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <i class="fas fa-folder"></i>
                <RouterLink to="/project">Project</RouterLink>
              </li>
              <li class="menu-button2 flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
                <i class="fas fa-envelope"></i> 
                <RouterLink to="/contact">Contact</RouterLink>
              </li>
            </ul>
          </div>
        
        </nav>
        
      </nav>
    </header>
    <!-- <main class="flex-grow ">
      <Loader v-if="isLoading" />
      <RouterView/>
    </main> -->
    <!-- <footer class="bg-gray-100 text-center py-4">
      <p class="text-center text-gray-500">&copy;<span class="font-bold">2024 KRM Web Work's</span>. All Rights Reserved.</p>
    </footer> -->
    
  </div>
</template>