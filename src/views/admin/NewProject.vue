<script setup lang="ts">
import { useRouter } from 'vue-router';
import adminRoutes from '@/config/admin_routes.config';
import { ref, reactive, watch } from 'vue';
import type { IProject } from '@/types/project';
import axiosConfig from '@/config/axios.config';
import apiRoutes from '@/config/api_routes.config';
import type { API_Response } from '@/types/API_Response';
import { toast } from 'vue3-toastify';

const router = useRouter();

const inputValue = ref();
const newProject = reactive({
	projectName: '',
	listOfTechUsed: [] as string[],
	startTime: '',
	endTime: '',
	projectDescription: ''
});
const handleAddTech = () => {
	if (!inputValue.value) return;
	if (newProject.listOfTechUsed.includes(inputValue.value)) {
		return toast.error('Đã tồn tại trong danh sách');
	}
	newProject.listOfTechUsed.push(inputValue.value);
	inputValue.value = '';
};

const handleCreateNewProject = async (e: Event) => {
	e.preventDefault();
	try {
		const res = await axiosConfig.post<API_Response<IProject>>(
			apiRoutes.project.create,
			newProject
		);
		if (res.data.status === 'success') {
			toast.success('Thêm Thành công !');
			router.push({ path: adminRoutes.project.root });
		}
	} catch (error) {
		console.log(error);
	}
};
const handleRemoveTech = (projectItem: string) => {
	newProject.listOfTechUsed = newProject.listOfTechUsed.filter((item) => item !== projectItem);
};
watch(newProject, () => {
	console.log(newProject);
});
</script>

<template>
	<div class="flex justify-between my-4">
		<h1 class="uppercase text-4xl font-bold">thêm project</h1>
		<button
			class="p-2 bg-blue-500 text-white text-sm rounded-xl"
			@click="router.push({ path: adminRoutes.project.root })"
		>
			Quay lại
		</button>
	</div>
	<div>
		<form class="flex flex-col gap-y-2" enctype="multipart/form-data">
			<div class="flex flex-col gap-y-2">
				<label for="">Tên dự án</label>
				<input
					class="border p-2 rounded-lg"
					placeholder="Nhập tên dự án"
					v-model="newProject.projectName"
				/>
			</div>
			<div class="flex gap-x-4 w-full">
				<div class="w-full">
					<label for="" class="block">Thời gian bat dau </label>
					<input
						type="datetime-local"
						class="border p-2 rounded-lg w-full"
						name=""
						id=""
						v-model="newProject.startTime"
					/>
				</div>
				<div class="w-full">
					<label for="" class="block">Thời gian kết thúc </label>
					<input
						type="datetime-local"
						class="border p-2 rounded-lg w-full"
						name=""
						id=""
						v-model="newProject.endTime"
					/>
				</div>
			</div>
			<div class="w-full flex flex-col gap-y-2">
				<label for="" class="block">Nhập mô tả </label>
				<textarea class="border rounded-lg py-2" v-model="newProject.projectDescription">
				</textarea>
			</div>

			<div class="w-full flex flex-col gap-y-2">
				<label for="" class="block">Chọn công nghệ :</label>
				<div class="">
					<div
						class="border uppercase py-2 mr-2 px-8 inline-block rounded-sm hover:cursor-pointer"
						v-for="(project, index) in newProject.listOfTechUsed"
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
			<button
				class="w-full py-2 bg-blue-500 mt-4 text-white rounded-lg"
				type="submit"
				@click="handleCreateNewProject"
			>
				Thêm project mới
			</button>
		</form>
	</div>
</template>

<style scoped></style>
