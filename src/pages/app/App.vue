<script setup lang="ts">
import HelloWorld from "../../components/HelloWorld.vue";
import TheWelcome from "../../components/TheWelcome.vue";
import styles from "./App.module.css";
</script>

<template>
    <div :class="styles.wrapper">
        <div :class="styles.container">
          <div :class="styles.header">Header</div>
          <div :class="styles.body">Body</div>
          <div :class="styles.footer">Footer</div>
        </div>
    </div>
    <!-- <header :class="styles.header">
    <img alt="Vue logo" :class="styles.logo" src="../../assets/images/logo.svg" width="125" height="125" />

    <div :class="styles.wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>
