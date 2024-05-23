<!-- src/App.vue -->
<template>
  <v-app>
    <HeaderComponent v-if="$route.name !== 'login' && $route.name !== 'cadastro'"/>
    <v-main>
    <router-view></router-view>
  </v-main>
    <RodapeComponent v-if="$route.name !== 'login' && $route.name !== 'cadastro'"/>
  </v-app>
</template>
<script setup>

import HeaderComponent from '../src/components/HeaderComponent.vue';
import RodapeComponent from '../src/components/RodapeComponent.vue';


 </script>

<style scoped>

</style>
