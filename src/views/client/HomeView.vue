<script setup lang="ts">
import type { IProjectItem } from '@/types/projectItem';
import { ref } from 'vue';
import Banner from '@/components/client/Banner.vue';

const numberOne = ref<number>(0);
const projectItems = ref<IProjectItem[]>([
	{
		_id: '1',
		projectName: 'Make things float in air',
		description: 'Hover over this card to unleash the power of CSS perspective',
		imageUrl: 'https://placehold.co/400'
	},
	{
		_id: '1',
		projectName: 'Make things float in air',
		description: 'Hover over this card to unleash the power of CSS perspective',
		imageUrl: 'https://placehold.co/400'
	},
	{
		_id: '1',
		projectName: 'Make things float in air',
		description: 'Hover over this card to unleash the power of CSS perspective',
		imageUrl: 'https://placehold.co/400'
	}
]);
const handleNavigation = (projectId: string) => {
	console.log(projectId);
};
</script>

<template>
	<Banner />
	<h1 class="uppercase font-bold text-3xl italic w-full text-center">Dự án của tôi</h1>
	<div class="grid grid-cols-3 mx-auto gap-4 rounded-2xl p-4 max-w-7xl w-full">
		<div class="p-4 border rounded-xl" v-for="(item, index) in projectItems" :key="index">
			<h5 v-text="item.projectName"></h5>
			<p class="text-sm italic text-gray-400 truncate py-2">{{ item.description }}</p>
			<img :src="item.imageUrl" class="mx-auto rounded-lg hover:cursor-pointer" />
			<div class="flex justify-end mt-2">
				<button
					class="border py-2 px-4 rounded-xl text-sm bg-[#006FEE] text-white"
					@click="handleNavigation(item._id)"
				>
					Xem chi tiết
				</button>
			</div>
		</div>
	</div>
</template>
