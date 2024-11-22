<script setup lang="ts">
import FooterVue from '@/components/client/Footer.vue';
import HeaderVue from '@/components/client/Header.vue';
</script>

<template>
	<div>
		<HeaderVue />
		<RouterView />
		<FooterVue />
	</div>
</template>
