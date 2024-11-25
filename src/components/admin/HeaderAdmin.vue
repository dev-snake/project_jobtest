<script setup lang="ts">
const { title } = defineProps({
	title: String
});
console.log('Props', title);
</script>

<template>
	<header class="border-b-2">
		<nav class="flex flex-col justify-center items-center p-2 max-w-7xl mx-auto">
			<img src="../../../public/favicon.ico" alt="" class="block hover:cursor-pointer" />
			<p class="font-bold" v-text="title"></p>
		</nav>
	</header>
</template>

<style scoped></style>
