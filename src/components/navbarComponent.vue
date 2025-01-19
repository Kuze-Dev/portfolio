<template>
  <nav class="flex justify-around items-center bg-gray-800 text-white py-4">
    <router-link 
      v-for="item in menuItems" 
      :key="item.name" 
      :to="item.route" 
      class="flex flex-col items-center"
    >
      <item.icon class="w-6 h-6" />
      <span class="text-sm mt-1">{{ item.name }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { defineComponent } from 'vue';
import { HomeIcon, UserIcon, BriefcaseIcon, PhoneIcon } from '@heroicons/vue/solid';

// Menu items with routes and icons
const menuItems = [
  { name: 'Home', route: '/', icon: HomeIcon },
  { name: 'About', route: '/about', icon: UserIcon },
  { name: 'Projects', route: '/projects', icon: BriefcaseIcon },
  { name: 'Contact', route: '/contact', icon: PhoneIcon },
];
</script>

<style scoped>
/* Scoped styles if needed */
</style>
