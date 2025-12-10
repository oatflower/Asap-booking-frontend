<template>
  <div id="app">
    <MenuDesktop />
    <router-view />
    <FooterSection />
  </div>
</template>

<script setup>
import MenuDesktop from './components/MenuDesktop.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sukhumvit+Set:wght@300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Sukhumvit Set', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
