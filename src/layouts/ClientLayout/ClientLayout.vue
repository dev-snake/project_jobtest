<script setup lang="ts">
import {RouterView} from "vue-router"
import HeaderVue from "@/components/client/Header.vue";
import Footer from "@/components/client/Footer.vue";
</script>

<template>
  <HeaderVue/>
  <RouterView/>
  <Footer/>
</template>

<style scoped>

</style>