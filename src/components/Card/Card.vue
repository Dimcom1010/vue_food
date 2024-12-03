
<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from '../../types/Product';

const props = defineProps<{ info: Product }>();
</script>

<template>
  <div class="card">
    <div class="card-image" :style="{ backgroundImage: `url(${info.image})` }">
      <div class="card-content">
        <h2>{{ info.title }}</h2>
        <p><strong>Category:</strong> {{ info.category }}</p>
        <p><strong>Price:</strong> ${{ info.price }}</p>
        <p><strong>Rating:</strong> {{ info.rating.rate }} ({{ info.rating.count }} reviews)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  scroll-snap-align: start;
  width: 100%;
  aspect-ratio:1;
  position: relative;
  overflow: hidden;
}

.card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.card-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
  color: white;
  padding: 10px;
  box-sizing: border-box;
}
</style>