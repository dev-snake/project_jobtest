<script setup lang="ts">
import {useRouter} from "vue-router";
import adminRoutes from "@/config/admin_routes.config";
import {ref} from "vue";

const router = useRouter()
const techList = ref([
  {
    id: 1,
    name: 'Javascript',
  },
  {
    id: 3,
    name: 'Typescript',
  },
  {
    id: 2,
    name: 'Node.js',
  },
  {
    id: 4,
    name: 'PHP',
  },
  {
    id: 5,
    name: 'HTML5',
  },
  {
    id: 6,
    name: 'CSS',
  },
  {
    id: 7,
    name: 'ReactJS',
  },
  {
    id: 8,
    name: 'Next.js',
  },
  {
    id: 9,
    name: 'TailwindCss',
  },
  {
    id: 10,
    name: 'AngularJS',
  },
  {
    id: 11,
    name: 'MongoDB',
  },
  {
    id: 12,
    name: 'Express',
  },
  {
    id: 13,
    name: 'MySQL',

  }
]);
</script>
<template>
  <div class="flex justify-between my-4">
    <h1 class=" uppercase text-4xl  font-bold ">Cập nhật project</h1>
    <button class="p-2 bg-blue-500 text-white text-sm rounded-xl"
            @click="router.push({path :adminRoutes.project.root })"
    >Quay lại
    </button>
  </div>
  <div>
    <div class="flex flex-col gap-y-2">
      <div class="flex flex-col gap-y-2">
        <label for="">Tên dự án</label>
        <input class="border p-2 rounded-lg" placeholder="Nhập tên dự án"/>
      </div>
      <div class="flex gap-x-4 w-full">
        <div class="w-full">
          <label for="" class="block">Thời gian bat dau </label>
          <input type="datetime-local" class="border p-2 rounded-lg w-full" name="" id="">
        </div>
        <div class="w-full">
          <label for="" class="block">Thời gian kết thúc </label>
          <input type="datetime-local" class="border p-2 rounded-lg w-full" name="" id="">
        </div>

      </div>
      <div class="w-full flex flex-col gap-y-2">
        <label for="" class="block">Nhập mô tả </label>
        <textarea class="border rounded-lg py-2">
        </textarea>
      </div>
      <div class="w-full flex flex-col gap-y-2">
        <label for="" class="block">Chọn công nghệ :</label>
        <div class="flex gap-x-4 ">
          <button v-text="tech.name" v-for="tech in techList" :key="tech.id" class="border p-2"></button>
        </div>
      </div>
    </div>
    <button class="w-full py-2 bg-blue-500 mt-4 text-white rounded-lg">Cập nhật</button>
  </div>
</template>

<style scoped>

</style>