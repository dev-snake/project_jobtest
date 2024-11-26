<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
	<header class="border-b-2">
		<nav class="flex justify-between items-center py-4 max-w-7xl mx-auto">
			<img src="../../../favicon.ico" alt="" />
			<ul class="flex gap-6">
				<RouterLink to="/">Trang chủ</RouterLink>
			</ul>
		</nav>
	</header>
</template>

<style scoped></style>
