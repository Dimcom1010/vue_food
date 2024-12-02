<script setup lang="ts">
import HelloWorld from '../../components/HelloWorld.vue'
import TheWelcome from '../../components/TheWelcome.vue'
import styles from './App.module.css'
</script>

<template>
  <header :class="styles.header">
    <img alt="Vue logo" :class="styles.logo" src="../../assets/logo.svg" width="125" height="125" />

    <div :class="styles.wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
