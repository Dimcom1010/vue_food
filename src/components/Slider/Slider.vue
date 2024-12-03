<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getPreloadData, getOneProduct } from "@/services/apiService";
import styles from "./Slider.module.less";
import type { Product } from "@/types/Product";
import Card from "@/components/Card/Card.vue";

const data = ref<Product[] | null>(null);
const loading = ref<boolean>(false);
const error = ref<string>("");

onMounted(async () => {
    try {
        loading.value = true;
        data.value = await getPreloadData();
    } catch (err) {
        error.value = "Ошибка при получении данных";
    } finally {
        loading.value = false;
    }
});

const scrollNext = () => {
    const slider = document.querySelector(`.${styles.slider__container}`);
    if (slider) {
        const scrollAmount = slider.clientWidth / 3; // Adjust based on your grid-template-columns
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
};

const scrollPrev = () => {
    const slider = document.querySelector(`.${styles.slider__container}`);
    if (slider) {
        const scrollAmount = slider.clientWidth / 3;
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
};
</script>

<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else :class="styles.slider">
            <div :class="styles.slider__container">
                <div v-for="item in data" :key="item.id">
                    <Card :info="item"></Card>
                </div>
            </div>
            <div :class="styles.slider__buttons">
                <button :class="[styles.slider__button,styles.slider__button_left]" @click="scrollPrev"></button>
                <button :class="[styles.slider__button,styles.slider__button_right]" @click="scrollNext"></button>
            </div>
        </div>
    </div>
</template>
