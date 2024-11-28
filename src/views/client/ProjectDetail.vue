<script setup lang="ts">
import Loading from '@/components/common/Loading.vue';
import apiRoutes from '@/config/api_routes.config';
import axiosConfig from '@/config/axios.config';
import type { API_Response } from '@/types/API_Response';
import type { IProject } from '@/types/project';
import { formatDate } from '@/utils/formatDate';
import { onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const { params } = useRoute();
const projectInfo = reactive<IProject>({} as IProject);
const loading = ref<boolean>(true);
onMounted(() => {
	loading.value = true;
	const fetchData = async () => {
		try {
			const res = await axiosConfig.get<API_Response<IProject>>(
				apiRoutes.project.getOne(params.projectId as string)
			);
			if (res.data.status === 'success') {
				const responseProject = res.data.results;
				projectInfo.id = responseProject.id;
				projectInfo.projectName = responseProject.projectName;
				projectInfo.startTime = responseProject.startTime;
				projectInfo.endTime = responseProject.endTime;
				projectInfo.listOfTechUsed = responseProject.listOfTechUsed;
				projectInfo.projectDescription = responseProject.projectDescription;
			}
		} catch (error) {
			console.log(error);
		} finally {
			loading.value = false;
		}
	};
	fetchData();
});
watch(projectInfo, () => {
	console.log('re');
});
</script>

<template>
	<Loading label="Đang tải dữ liệu" v-show="loading" />
	<div class="max-w-7xl mx-auto flex flex-col gap-y-8 mt-4">
		<img src="https://placehold.co/400" alt="" class="w-full h-96 object-cover rounded-sm" />
		<div class="flex flex-col gap-y-4">
			<span>Công nghệ sử dụng :</span>
			<div class="flex gap-x-2">
				<span
					class="inline-block p-2 border rounded-3xl max-w-24 w-full text-center"
					v-for="(tech, index) in projectInfo.listOfTechUsed"
					:key="index"
					v-text="tech"
				></span>
			</div>
		</div>
		<div class="flex flex-col gap-y-4">
			<span>Thời gian Thực hiện dự án :</span>
			<div class="flex gap-x-4 items-center">
				<p class="px-4 py-2 rounded-2xl border-green-300 text-green-300 border-2">
					{{ formatDate(projectInfo.startTime) }}
				</p>
				<span>đến</span>
				<button class="px-4 py-2 rounded-2xl border-red-300 text-red-300 border-2">
					{{ formatDate(projectInfo.endTime) }}
				</button>
			</div>
		</div>
		<div class="flex flex-col gap-y-4">
			<span>Mô tả về dự án : </span>
			<p class="italic text-gray-400 text-sm font-light">
				{{ projectInfo.projectDescription }}
			</p>
		</div>
		<hr class="mb-40" />
	</div>
</template>

<style scoped></style>
