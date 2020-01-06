<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-color-dark: #3d4575;
  --primary-color-beige: #ffcfaf;
  --primary-border-radius: 50px;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: Arial;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fffaf7;
  margin: 0px;
}

h1,
h2,
h3,
ul {
  margin: 0px;
}

ul {
  padding-left: 0px;
  list-style: none;
}

@media only screen and (max-width: 480px) {
  body {
    flex: none;
    justify-content: unset;
    align-items: unset;
  }
}

</style>

<style scoped>
#app {
  width: 375px;
  height: 812px;
  background-color: var(--primary-color-dark);
  border-radius: var(--primary-border-radius);
  border: 4px solid var(--primary-color-dark);
  overflow: hidden;
}

@media only screen and (max-width: 480px) {
  #app {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
  }
}
</style>
