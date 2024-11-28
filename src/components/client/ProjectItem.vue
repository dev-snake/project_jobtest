<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { IProject } from '@/types/project';
const project = defineProps<IProject>();
const navigate = () => {};
console.log(project.projectName);
</script>

<template>
	<div class="p-4 border rounded-xl">
		<h5 v-text="project.projectName"></h5>
		<p
			class="text-sm italic text-gray-400 truncate py-2"
			v-text="project.projectDescription"
		></p>
		<img src="https://placehold.co/400" class="mx-auto rounded-lg hover:cursor-pointer" />
		<div class="flex justify-end mt-2">
			<button class="border py-2 px-4 rounded-xl text-sm bg-[#006FEE] text-white" onCl>
				Xem chi tiết
			</button>
		</div>
	</div>
</template>

<style scoped></style>
