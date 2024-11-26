<script setup lang="ts">
import apiRoutes from '@/config/api_routes.config';
import axiosConfig from '@/config/axios.config';
import type { API_Response } from '@/types/API_Response';
import isValidEmail from '@/utils/validEmail';
import { reactive } from 'vue';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';
import router from '@/router';
import clientRoutes from '@/config/client_routes.config';
const newUser = reactive({
	fullname: '',
	email: '',
	username: '',
	password: ''
});
const handleAccountRegister = async () => {
	console.log('new user', newUser);
	if ([newUser.email, newUser.username, newUser.password, newUser.fullname].includes('')) {
		return toast.warning('Vui lòng nhập đầy thông tin !');
	}
	if (!isValidEmail(newUser.email)) {
		return toast.error('Email không đúng định dạng');
	}
	try {
		const res = await axiosConfig.post<API_Response>(apiRoutes.auth.signUp, newUser);
		if (res.data.status === 'success') {
			router.push({ path: '/sign-in' });
			toast.success('Đăng kí tài khoản thành công');
		}
	} catch (error) {
		console.log(error);
	}
};
</script>

<template>
	<div class="border max-w-xl p-4 rounded-2xl flex flex-col gap-y-2 mt-24 mx-auto mb-96">
		<h1 class="text-3xl">Đăng kí tài khoản</h1>
		<div class="flex flex-col gap-y-2">
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập email</label>
				<input
					placeholder="Nhập email"
					v-model="newUser.email"
					class="block border p-2 w-full"
				/>
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập Họ và tên</label>
				<input
					placeholder="Nhập họ và tên"
					v-model="newUser.fullname"
					class="block border p-2 w-full"
				/>
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập username</label>
				<input
					v-model="newUser.username"
					placeholder="Nhập username"
					class="block border p-2 w-full"
				/>
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập mật khẩu</label>
				<input
					v-model="newUser.password"
					type="password"
					placeholder="Nhập password"
					class="block border p-2 w-full"
				/>
			</div>

			<button
				class="bg-blue-300 py-2 rounded-xl text-white w-full"
				@click="handleAccountRegister"
			>
				Đăng kí
			</button>
		</div>
	</div>
</template>

<style scoped></style>
