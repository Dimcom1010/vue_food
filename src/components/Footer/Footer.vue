<script setup lang="ts">
import styles from "./Footer.module.less";
</script>

<template>
    <div :class="styles.footer">
        <div :class="styles.footer__title">Витебск 2024</div>
        <div :class="styles.footer__body">
            <a href="https://github.com/Dimcom1010/vue_food/blob/main/README.md"
                >ссылка на README</a
            >
        </div>
    </div>
</template>
