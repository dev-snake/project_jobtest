<script setup lang="ts">
import Banner from '@/components/client/Banner.vue';
import ProjectItem from '@/components/client/ProjectItem.vue';
import Loading from '@/components/common/Loading.vue';
import apiRoutes from '@/config/api_routes.config';
import axiosConfig from '@/config/axios.config';
import clientRoutes from '@/config/client_routes.config';
import type { API_Response } from '@/types/API_Response';
import type { IProject } from '@/types/project';
import { onMounted, ref } from 'vue';
const productsList = ref<IProject[]>([]);
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
const router = useRouter();
const loading = ref<boolean>(true);
const accessToken = ref(localStorage.getItem('accessToken'));
const handleLogout = async () => {
	try {
		const res = await axiosConfig.post<API_Response>(apiRoutes.auth.logOut);
		if (res.data.status === 'success') {
			toast.success('Đăng xuất thành công .');
			accessToken.value = null;
			localStorage.removeItem('accessToken');
		}
	} catch (error) {
		console.log(error);
	}
};

onMounted(() => {
	loading.value = true;
	const fetchData = async () => {
		try {
			const res = await axiosConfig.get<API_Response<IProject[]>>(apiRoutes.project.getAll);
			console.log(res);
			if (res.data.status === 'success') {
				productsList.value = res.data.results;
			}
		} catch (error) {
			console.log(error);
		} finally {
			loading.value = false;
		}
	};
	if (accessToken.value) {
		fetchData();
	}
});
</script>

<template>
	<div class="max-w-7xl mx-auto">
		<div class="mb-36">
			<div class="mt-10 h-full">
				<div class="flex flex-col gap-y-2">
					<p class="italic text-center">Chào mừng đến trang quản li du án</p>
					<div class="grid justify-center gap-y-2">
						<h1 class="text-6xl italic font-bold">🚀 Dang Van Hau 🚀</h1>
					</div>
					<h1 class="font-bold text-3xl italic text-center mt-20">
						Đăng Nhập để vào trang quản lí
					</h1>
					<div class="flex gap-x-2 justify-center mt-20">
						<button
							class="border p-2"
							@click="router.push({ path: clientRoutes.auth.signUp })"
						>
							Đăng ký
						</button>
						<button
							class="p-2 bg-blue-400 text-white"
							@click="router.push({ path: clientRoutes.auth.signIn })"
							v-show="!accessToken"
						>
							Đăng nhập
						</button>
						<button
							class="p-2 bg-red-500 text-white"
							@click="handleLogout"
							v-if="accessToken"
						>
							Đăng xuất
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<Loading label="Đang tải dữ liệu " v-show="loading && accessToken" />
	<div class="grid grid-cols-3 gap-2" v-show="accessToken">
		<div
			class="p-4 border rounded-xl"
			v-for="(project, index) in productsList"
			:project="project"
			:key="index"
		>
			<h5 v-text="project.projectName"></h5>
			<p
				class="text-sm italic text-gray-400 truncate py-2"
				v-text="project.projectDescription"
			></p>
			<img src="https://placehold.co/400" class="mx-auto rounded-lg hover:cursor-pointer" />
			<div class="flex justify-end mt-2">
				<button
					class="border py-2 px-4 rounded-xl text-sm bg-[#006FEE] text-white"
					@click="router.push({ path: clientRoutes.project.details(project.id) })"
				>
					Xem chi tiết
				</button>
			</div>
		</div>
	</div>
</template>
