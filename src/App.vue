<!-- src/App.vue -->
<template>
  <v-app>
    <v-main>
      <HeaderComponent/>
      <router-view></router-view>
      <RodapeComponent/>
    </v-main>
  </v-app>
</template>

<script setup>

import HeaderComponent from '../src/components/HeaderComponent.vue';
import RodapeComponent from '../src/components/RodapeComponent.vue';

</script>
