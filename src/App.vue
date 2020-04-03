<template>
  <div id="app">
    <Header />
    <router-view />
    <RightNav />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header/index.vue";
import Footer from "./components/footer/index.vue";
import RightNav from "./components/right-nav/index.vue";
export default {
  components: {
    Header,
    Footer,
    RightNav
  }
};
</script>
<style lang="less"></style>
