<template>
  <header>
    <span aria-hidden="true"></span>
    <div>
      <font-awesome-icon size="lg" icon="bars" />
      <img src="/img/avatar.jpg" alt="avatar" />
    </div>
  </header>
</template>

<script>
export default {
  name: "home-header"
};
</script>

<style scoped>
header {
  height: 230px;
  background-color: var(--primary-color-blue);
  padding: 40px 30px;
  position: relative;
}

span {
  display: block;
  position: absolute;
  height: 100%;
  width: 40%;
  top: 0px;
  left: 0px;
  background: linear-gradient(
    to top,
    var(--primary-color-blue),
    var(--primary-color-light-blue)
  );
}

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
}

img {
  width: 35px;
  height: 35px;
  border-radius: 10px;
}
</style>