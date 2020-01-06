<template>
  <nav>
      <div class="bars"></div>
      <div class="icon"></div>
      <img src="@/assets/avatar.png" alt="avatar">
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--primary-color-beige);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 80px;
}

.bars {
  height: 10px;
  width: 20px;
  border-top: 2px solid var(--primary-color-dark);
  border-bottom: 2px solid var(--primary-color-dark);
}

.icon {
    --height: 40px;
    height: var(--height);
    border-left: calc(var(--height) / 2) solid #9D8A92;
    border-right: calc(var(--height) / 2) solid var(--primary-color-dark);
    clip-path: polygon(50% 0, 100% 70%, 50% 100%, 0 70%);
}

img {
  height: 30px;
  border-radius: 100%;
}
</style>

<script>
export default {
  name: "home-nav"
};
</script>
