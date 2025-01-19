<template>
    <footer class="text-center w-full py-4 bottom-0  text-gray-600 border-t border-gray-200 text-sm">
      <p>&copy; <span class="font-semibold">{{ currentYear }} KRM WEB-WORK'S</span>. All Rights Reserved.</p>
    </footer>
  </template>
  
  <script setup>
  const currentYear = new Date().getFullYear();
  </script>
  