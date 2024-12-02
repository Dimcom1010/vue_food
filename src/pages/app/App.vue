<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import BodyComponent from "@/components/BodyComponent/BodyComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import styles from "./App.module.css";
</script>

<template>
    <div :class="styles.wrapper">
        <div :class="styles.container">
          <div :class="styles.header">
            <HeaderComponent />
          </div>
          <div :class="styles.body">
            <BodyComponent />
          </div>
          <div :class="styles.footer">
            <FooterComponent />
          </div>
        </div>
    </div>

    <!-- <img alt="Vue logo" :class="styles.logo" src="../../assets/images/logo.svg" width="125" height="125" /> -->

</template>
