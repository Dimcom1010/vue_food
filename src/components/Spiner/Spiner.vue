<script setup lang="ts">
import styles from "./Spiner.module.less";
</script>

<template>
    <div :class="styles.spinner__container">
        <div :class="styles.spinner"></div>
    </div>
</template>
