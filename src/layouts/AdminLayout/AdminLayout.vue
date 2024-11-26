<script setup lang="ts">
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue';
import { RouterView } from 'vue-router';
import Dashboard from '@/views/admin/Dashboard.vue';
import { ref } from 'vue';
</script>

<template>
	<HeaderAdmin title="Admin" />
	<Dashboard />
	<RouterView />
</template>

<style scoped></style>
