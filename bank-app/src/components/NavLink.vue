<template>
  <router-link v-bind:to="route" v-slot="{ href, route, navigate, isActive, isExactActive }">
    <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active', 'nav-link']">
      <a :href="href" @click="navigate">
        <slot></slot>
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "nav-link",
  props: ["route"]
};
</script>

<style>
.nav-link {
  padding: 8px 14px;
}

.nav-link a {
  color: #2d3563;
}

.nav-link a:visited {
    color: #2d3563;
}

.nav-link.router-link-exact-active {
  background-color: var(--primary-color-orange);
  border-radius: 8px;
}

.nav-link.router-link-exact-active a {
    color: white;
}
</style>