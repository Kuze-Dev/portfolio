<script setup>
import headerComponent from '@/components/headerComponent.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <headerComponent />
    <RouterView />
  </div>
</template>
