<template>
  <div class="body-component">
    <h1>Body Component</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchData } from '@/services/apiService';
import styles from './BodyComponent.module.css';

const data = ref(null);
const loading = ref(false);
const error = ref('');

onMounted(async () => {
  try {
    loading.value = true;
    data.value = await fetchData();
  } catch (err) {
    error.value = 'Ошибка при получении данных';
  } finally {
    loading.value = false;
  }
});
</script>
