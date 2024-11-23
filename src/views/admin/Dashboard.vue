<script setup lang="ts">
import {useRouter} from 'vue-router';
import adminRoutes from '@/config/admin_routes.config';

const router = useRouter();
</script>
<template>
  <div class="mt-4">
    <button class="border p-2" @click="router.push({ path: adminRoutes.project.root })">
      Projects
    </button>
    <button class="border p-2">Tài khoản</button>
    <!--    <button class="border p-2">Skills</button>-->
  </div>
</template>

<style scoped></style>
