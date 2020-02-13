<template>
  <div id="app">
    <router-view/>
    <Nav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav
  }
}
</script>

<style>
:root {
  --primary-color-grey: #F6F5FA;
  --primary-color-orange: #F76800;
  --primary-color-blue: #2C32BE;
  --primary-color-light-blue: #545AEE;
  --primary-color-dark: #2B2D5E;
  --primary-border-radius: 50px;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: Calibri;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #FFBFA4, #FFAD8B);
  margin: 0px;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul {
  margin: 0px;
}

ul {
  padding-left: 0px;
  list-style: none;
}

#app {
  width: 375px;
  height: 812px;
  background-color: var(--primary-color-grey);
  border-radius: var(--primary-border-radius);
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
