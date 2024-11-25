<script setup lang="ts">
const { msg } = defineProps({
	msg: String
});
</script>
<template>
	<div class="flex items-center gap-x-4 w-full justify-center py-4">
		<div
			class="size-6 border-l-4 border-r-4 border-r-red-500 border-l-yellow-300 shadow-sm rounded-full animate-spin"
		></div>
		<span class="italic font-light" v-text="msg + '...'"></span>
	</div>
</template>

<style scoped></style>
