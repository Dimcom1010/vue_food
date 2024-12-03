<script setup lang="ts">
import styles from "./Spinner.module.less";
</script>

<template>
    <div :class="styles.spinner__container">
        <div :class="styles.spinner"></div>
    </div>
</template>
