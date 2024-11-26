<script setup lang="ts">
import { useRouter } from 'vue-router';
// import {adminRoutes} from '@/config/admin_routes.config';
import adminRoutes from '@/config/admin_routes.config';
import type { API_Response } from '@/types/API_Response';
import type { IProject } from '@/types/project';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axiosConfig from '@/config/axios.config';
import apiRoutes from '@/config/api_routes.config';
import Loading from '@/components/common/Loading.vue';
import { toast } from 'vue3-toastify';
const { params } = useRoute();
const router = useRouter();
const loading = ref<boolean>(true);
let projectInfo = ref({
	projectName: '',
	listOfTechUsed: [] as string[],
	startTime: '',
	endTime: '',
	projectDescription: ''
});
const inputValue = ref();
const handleAddTech = () => {
	if (!inputValue.value) return;
	if (projectInfo.value.listOfTechUsed.includes(inputValue.value)) {
		return console.log('Da ton tai trong tech list');
	}
	projectInfo.value.listOfTechUsed.push(inputValue.value);
	inputValue.value = '';
};
const handleEditProject = async () => {
	try {
		const res = await axiosConfig.put<API_Response<IProject>>(
			apiRoutes.project.edit(params.projectId as string),
			projectInfo.value
		);
		if (res.data.status === 'success') {
			router.push({ path: adminRoutes.project.root });
			toast.success('Cập nhật thành công');
		}
	} catch (error) {
		console.log(error);
	}
};
onMounted(() => {
	loading.value = true;
	const fetchData = async () => {
		loading.value = true;
		try {
			const res = await axiosConfig.get<API_Response<IProject>>(
				apiRoutes.project.getOne(params.projectId as string)
			);
			if (res.data.status === 'success') {
				const data = res.data.results;
				projectInfo.value.projectName = data.projectName;
				projectInfo.value.listOfTechUsed = data.listOfTechUsed;
				projectInfo.value.startTime = data.startTime;
				projectInfo.value.endTime = data.endTime;
				projectInfo.value.projectDescription = data.projectDescription;
				console.log(projectInfo);
			}
		} catch (error) {
			console.log(error);
		} finally {
			loading.value = false;
		}
	};
	fetchData();
});
const handleRemoveTech = (projectItem: string) => {
	projectInfo.value.listOfTechUsed = projectInfo.value.listOfTechUsed.filter(
		(item) => item !== projectItem
	);
};
watch(
	projectInfo,
	(newValue, oldValue) => {
		console.log('Dữ liệu projectInfo đã thay đổi:', newValue);
	},
	{ deep: true }
);
</script>
<template>
	<div class="flex justify-between my-4">
		<h1 class="uppercase text-4xl font-bold">Cập nhật project</h1>
		<button
			class="p-2 bg-blue-500 text-white text-sm rounded-xl"
			@click="router.push({ path: adminRoutes.project.root })"
		>
			Quay lại
		</button>
	</div>
	<div>
		<Loading v-show="loading" label="Đang tải dữ liệu" />
		<div class="flex flex-col gap-y-2">
			<div class="flex flex-col gap-y-2">
				<label for="">Tên dự án</label>
				<input
					class="border p-2 rounded-lg"
					placeholder="Nhập tên dự án"
					v-model="projectInfo.projectName"
				/>
			</div>
			<div class="flex gap-x-4 w-full">
				<div class="w-full">
					<label for="" class="block">Thời gian bat dau </label>
					<input
						v-model="projectInfo.startTime"
						type="datetime-local"
						class="border p-2 rounded-lg w-full"
					/>
				</div>
				<div class="w-full">
					<label for="" class="block">Thời gian kết thúc </label>
					<input
						type="datetime-local"
						class="border p-2 rounded-lg w-full"
						v-model="projectInfo.endTime"
					/>
				</div>
			</div>
			<div class="w-full flex flex-col gap-y-2">
				<label for="" class="block">Nhập mô tả </label>
				<textarea class="border rounded-lg py-2" v-model="projectInfo.projectDescription">
				</textarea>
			</div>
			<div class="w-full flex flex-col gap-y-2">
				<label for="" class="block">Chọn công nghệ :</label>
				<div class="">
					<div
						class="border py-2 mr-2 px-8 inline-block rounded-sm hover:cursor-pointer"
						v-for="(project, index) in projectInfo.listOfTechUsed"
						@click="handleRemoveTech(project)"
						:key="index"
						v-text="project"
					></div>
				</div>
				<div class="flex gap-x-4">
					<input
						placeholder="Nhập tên công nghệ"
						v-model="inputValue"
						class="p-2 border"
					/>
					<button
						class="p-2 border bg-blue-500 text-white"
						type="button"
						@click="handleAddTech"
					>
						Thêm công nghệ
					</button>
				</div>
			</div>
		</div>
		<button
			class="w-full py-2 bg-blue-500 mt-4 text-white rounded-lg"
			@click="handleEditProject"
		>
			Cập nhật
		</button>
	</div>
</template>

<style scoped></style>
