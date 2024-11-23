<script setup lang="ts">
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue';
import { RouterView } from 'vue-router';
import Dashboard from '@/views/admin/Dashboard.vue';
</script>

<template>
	<HeaderAdmin />
	<Dashboard />
	<RouterView />
</template>

<style scoped></style>
