<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header/index.vue";
import Footer from "./components/footer/index.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="less"></style>
