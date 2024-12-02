<template>
  <div class="body-component">
    <h1>Body Component</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <pre>{{ data }}</pre>
      <button @click="addOneProduct">Add One Product</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPreloadData ,getOneProduct } from '@/services/apiService';
import styles from './BodyComponent.module.css';
import type { Product } from '@/types/Product';



const data = ref<Product[] | null>(null);
const loading = ref<boolean>(false);
const error = ref<string>('');

onMounted(async () => {
  try {
    loading.value = true;
    data.value = await getPreloadData();
  } catch (err) {
    error.value = 'Ошибка при получении данных';
  } finally {
    loading.value = false;
  }
});

const addOneProduct=async ()=>{
  if(data?.value?.length){
    const lastId:number=[...data.value].sort((a,b)=>b.id-a.id)[0].id
    console.log(lastId)
    try {
    loading.value = true;
    const one:Product = await getOneProduct(lastId+1);
    data.value.push(one)
  } catch (err) {
    error.value = 'Ошибка при получении данных';
  } finally {
    loading.value = false;
  }
  }

}

</script>