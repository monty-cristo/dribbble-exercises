<template>
  <footer>
    <a href="#">REQUEST</a>
    <router-link to="/pay">PAY NEW</router-link>
  </footer>
</template>

<style scoped>
footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}

a {
  text-decoration: none;
  color: var(--primary-color-beige);
  padding: 30px 50px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "home-footer"
};
</script>
