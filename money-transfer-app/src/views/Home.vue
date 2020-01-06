<template>
  <div class="home">
    <Nav />
    <Contacts />
    <Footer />
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  display: grid;
  grid-template-rows: auto minmax(0px, 1fr) auto;
}
</style>

<script>
import Nav from "@/components/home/Nav.vue";
import Contacts from "@/components/home/Contacts.vue";
import Footer from "@/components/home/Footer.vue";

export default {
  name: "home",
  components: {
    Nav,
    Contacts,
    Footer
  }
};
</script>
