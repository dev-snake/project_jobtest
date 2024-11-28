<script setup lang="ts">
import { reactive, ref } from 'vue';
import { toast } from 'vue3-toastify';
import isValidEmail from '@/utils/validEmail';
import type { API_Response } from '@/types/API_Response';
import apiRoutes from '@/config/api_routes.config';
import { useRouter } from 'vue-router';
import adminRoutes from '@/config/admin_routes.config';
import axiosConfig from '@/config/axios.config';
const loginForm = reactive({
	email: '',
	password: ''
});
const router = useRouter();
const handleLogin = async () => {
	if ([loginForm.email, loginForm.password].includes('')) {
		return toast.warning('Vui lòng nhập đầy đủ!');
	}
	if (!isValidEmail(loginForm.email)) {
		return toast.error('Email không hợp lệ !');
	}
	try {
		const res = await axiosConfig.post<API_Response>(apiRoutes.auth.signIn, loginForm);
		if (res.data.status === 'success') {
			toast.success('Đăng nhập thành công');
			// console.log(res.data.data.accessToken);
			router.push({ name: 'admin-project' });
			localStorage.setItem('accessToken', res.data.data.accessToken);
		} else {
			toast.error('Đăng nhập thất bại');
		}
	} catch (error) {
		console.log(error);
	}
};
</script>

<template>
	<div class="border max-w-xl p-4 rounded-2xl flex flex-col gap-y-2 mt-24 mx-auto mb-96">
		<h1 class="text-3xl">Đăng Nhập vào Admin</h1>
		<div class="flex flex-col gap-y-2">
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập Email</label>
				<input
					placeholder="Nhập Email"
					v-model="loginForm.email"
					class="block border p-2 w-full"
				/>
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập mật kẩu</label>
				<input
					type="password"
					placeholder="Nhập password"
					v-model="loginForm.password"
					class="block border p-2 w-full"
				/>
			</div>
			<button class="bg-blue-300 py-2 rounded-xl text-white w-full" @click="handleLogin">
				Đăng nhập
			</button>
		</div>
	</div>
</template>

<style scoped></style>
