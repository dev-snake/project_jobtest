<script setup lang="ts">
import {useRouter} from "vue-router";
import adminRoutes from "@/config/admin_routes.config";

const router = useRouter()
</script>
<template>
  <div>
    <div class="flex justify-between my-4">
      <h1 class=" uppercase text-4xl  font-bold ">quản lí projects</h1>
      <button class="p-2 bg-blue-500 text-white text-sm rounded-xl"
              @click="router.push({path : adminRoutes.project.create})"
      >Thêm dự án mới
      </button>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">
            Tên dự án
          </th>
          <th scope="col" class="px-6 py-3">
            Thời gian bắt đầu
          </th>
          <th scope="col" class="px-6 py-3">
            Thời gian kết thúc
          </th>
          <th scope="col" class="px-6 py-3">
            Price
          </th>
          <th scope="col" class="px-6 py-3">
            hành động
          </th>
        </tr>
        </thead>
        <tbody>

        <tr>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Apple Watch 5
          </th>
          <td class="px-6 py-4">
            Red
          </td>
          <td class="px-6 py-4">
            Wearables
          </td>
          <td class="px-6 py-4">
            $999
          </td>
          <td class="px-6 py-4 flex gap-x-2">
            <button class="p-2  rounded-xl bg-red-400 text-white"
            >Xóa
            </button>
            <button class="p-2  rounded-xl bg-yellow-300 text-white"
                    @click="router.push({path : adminRoutes.project.edit('1')})"
            >Sửa
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<style scoped></style>
