<script setup lang="ts">
import { useRouter } from 'vue-router';
import adminRoutes from '@/config/admin_routes.config';
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';
import apiRoutes from '@/config/api_routes.config';
import type { API_Response } from '@/types/API_Response';
import type { IProject } from '@/types/project';
import { formatDate } from '@/utils/formatDate';
import Loading from '@/components/common/Loading.vue';
import axiosConfig from '@/config/axios.config';
import { toast } from 'vue3-toastify';
const router = useRouter();
const loading = ref<boolean>(true);
const projectsList = ref<IProject[]>([]);
const projectsListCopy = ref<IProject[]>([]);
const inputSearch = ref('');
const checkSearch = ref(false);
const handleDeleteProject = async (projectId: string) => {
	try {
		const res = await axiosConfig.delete<API_Response<IProject>>(
			apiRoutes.project.delete(projectId)
		);
		if (res.data.status === 'success') {
			projectsList.value = projectsList.value.filter((project) => project.id !== projectId);
			toast.success('Xóa Thành công');
		}
	} catch (err) {
		console.log(err);
	}
};
const fetchData = async () => {
	loading.value = true;
	try {
		const res = await axiosConfig.get<API_Response<IProject[]>>(apiRoutes.project.getAll);
		if (res.data.status === 'success') {
			projectsList.value = res.data.results;
			projectsListCopy.value = res.data.results;
		} else {
			console.log(res);
		}
	} catch (error) {
		console.log(error);
	} finally {
		loading.value = false;
	}
};
const resetSearch = () => {
	checkSearch.value = false;
	projectsList.value = projectsListCopy.value;
};
const handleSearchProject = () => {
	console.log(inputSearch.value);
	const filtered = projectsList.value.filter(
		(project) => project.projectName === inputSearch.value.trim()
	);

	projectsList.value = filtered;
	checkSearch.value = true;
	inputSearch.value = '';
};
onMounted(() => {
	fetchData();
});
</script>
<template>
	<div>
		<div class="flex justify-between my-4">
			<h1 class="uppercase text-4xl font-bold">quản lí dự án</h1>
			<div>
				<input type="text" class="p-1 border rounded-md mr-2" v-model="inputSearch" />
				<button
					class="p-2 bg-blue-400 text-white text-sm rounded-xl mr-2"
					@click="handleSearchProject"
				>
					Tìm kiếm
				</button>
				<button
					class="p-2 bg-blue-400 text-white text-sm rounded-xl mr-2"
					v-show="checkSearch"
					@click="resetSearch"
				>
					Làm mới
				</button>
				<button
					class="p-2 bg-blue-500 text-white text-sm rounded-xl"
					@click="router.push({ path: adminRoutes.project.create })"
				>
					Thêm dự án mới
				</button>
			</div>
		</div>

		<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
			<Loading label="Đang tải dữ liệu" v-show="loading" />
			<table class="w-full text-sm text-left rtl:text-right">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3">Tên dự án</th>
						<th scope="col" class="px-6 py-3">Thời gian bắt đầu</th>
						<th scope="col" class="px-6 py-3">Thời gian kết thúc</th>
						<th scope="col" class="px-6 py-3">Mô tả</th>
						<th scope="col" class="px-6 py-3">hành động</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(project, index) in projectsList" :key="index">
						<td class="px-6 py-4" v-text="project.projectName"></td>
						<td class="px-6 py-4" v-text="formatDate(project.startTime)"></td>
						<td class="px-6 py-4" v-text="formatDate(project.endTime)"></td>
						<td class="px-6 py-4" v-text="project.projectDescription"></td>
						<td class="px-6 py-4 flex gap-x-2">
							<button
								class="p-2 rounded-xl bg-red-400 text-white"
								@click="handleDeleteProject(project.id)"
							>
								Xóa
							</button>
							<button
								class="p-2 rounded-xl bg-yellow-300 text-white"
								@click="router.push({ path: adminRoutes.project.edit(project.id) })"
							>
								Sửa
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped></style>
