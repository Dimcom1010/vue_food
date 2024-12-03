<script setup lang="ts">
import Slider from "@/components/Slider/Slider.vue";
import Footer from "@/components/Footer/Footer.vue";

import styles from "./App.module.less";
</script>

<template>
    <div :class="styles.wrapper">
        <div :class="styles.container">
            <div :class="styles.header">
                <H1>Тестовое задание</H1>
            </div>
            <div :class="styles.body">
                <Slider />
            </div>

            <Footer></Footer>
        </div>
    </div>
</template>
