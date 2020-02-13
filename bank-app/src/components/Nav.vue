<template>
  <nav>
    <ul>
      <NavLink route="/">
        <font-awesome-icon size="lg" icon="wallet" />
      </NavLink>
      <NavLink route="/statistics">
        <font-awesome-icon size="lg" :icon="['far', 'circle']" />
      </NavLink>
      <NavLink route="/foo">
        <font-awesome-icon size="lg" rotation="90" icon="sliders-h" />
      </NavLink>
      <NavLink route="/bar">
        <font-awesome-icon size="lg" :icon="['far', 'user']" />
      </NavLink>
    </ul>
  </nav>
</template>

<script>
import NavLink from "@/components/NavLink.vue";

export default {
  name: "nav-bar",
  components: {
    NavLink
  }
};
</script>

<style scoped>
nav {
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px 25px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>