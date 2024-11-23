<script setup lang="ts"></script>

<template>
	<div class="border max-w-xl p-4 rounded-2xl flex flex-col gap-y-2 mt-24 mx-auto mb-96">
		<h1 class="text-3xl">Đăng kí tài khoản</h1>
		<form class="flex flex-col gap-y-2">
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập email</label>
				<input placeholder="Nhập email" class="block border p-2 w-full" />
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập username</label>
				<input placeholder="Nhập username" class="block border p-2 w-full" />
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập mật khẩu</label>
				<input placeholder="Nhập password" class="block border p-2 w-full" />
			</div>
			<div class="flex flex-col gap-y-2">
				<label for="">Nhập lại mật kẩu</label>
				<input placeholder="Nhập password" class="block border p-2 w-full" />
			</div>
			<button class="bg-blue-300 py-2 rounded-xl text-white w-full">Đăng kí</button>
		</form>
	</div>
</template>

<style scoped></style>
