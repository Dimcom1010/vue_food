<script setup lang="ts">
import AppHeader from "@/components/AppHeader/AppHeader.vue";
import AppBody from "@/components/AppBody/AppBody.vue";
import AppFooter from "@/components/AppFooter/AppFooter.vue";
import styles from "./App.module.css";
</script>

<template>
    <div :class="styles.wrapper">
        <div :class="styles.container">
          <div :class="styles.header">
            <AppHeader/>
          </div>
          <div :class="styles.body">
            <AppBody />
          </div>
          <div :class="styles.footer">
            <AppFooter />
          </div>
        </div>
    </div>

</template>
