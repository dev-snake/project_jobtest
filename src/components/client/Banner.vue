<script setup lang="ts">
import clientRoutes from '@/config/client_routes.config';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import axiosConfig from '@/config/axios.config';
import apiRoutes from '@/config/api_routes.config';
import type { API_Response } from '@/types/API_Response';
import { toast } from 'vue3-toastify';
const router = useRouter();
const checkLogin = ref<string | null>(localStorage.getItem('accessToken'));
const handleLogout = async () => {
	try {
		const res = await axiosConfig.post<API_Response>(apiRoutes.auth.logOut);
		if (res.data.status === 'success') {
			toast.success('Đăng xuất thành công .');
			checkLogin.value = null;
			localStorage.removeItem('accessToken');
		}
	} catch (error) {
		console.log(error);
	}
};

watch(checkLogin, () => {
	console.log('re render');
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
							v-show="!checkLogin"
						>
							Đăng nhập
						</button>
						<button
							class="p-2 bg-red-500 text-white"
							@click="handleLogout"
							v-if="checkLogin"
						>
							Đăng xuất
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
