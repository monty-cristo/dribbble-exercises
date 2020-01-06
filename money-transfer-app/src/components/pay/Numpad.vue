<template>
  <main>
    <button v-for="index in 9" :key="index" @click="$emit('add-number', index.toString())">{{index}}</button>
    <button @click="$emit('add-dot')">
      <div></div>
    </button>
    <button @click="$emit('add-number', '0')">0</button>
    <button @click="$emit('remove-number')">&lt;</button>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(3, 95px);
  grid-template-rows: repeat(4, 95px);
  gap: 15px;
  padding: 0px 20px 30px 20px;
  justify-content: center;
  align-content: end;
}

button {
  border: 2px solid #7a7288;
  border-radius: 100%;
  background-color: var(--primary-color-dark);
  color: var(--primary-color-beige);
  font-size: 2rem;
}

button:nth-child(10),
button:nth-child(12) {
  border: none;
}

button:nth-child(10) {
  display: flex;
  justify-content: center;
  align-items: center;
}

button:nth-child(10) div {
  height: 5px;
  width: 5px;
  background-color: var(--primary-color-beige);
}

button:active {
  background-color: var(--primary-color-beige);
  color: var(--primary-color-dark);
  outline: 0;
}

button:focus {
  outline: 0;
}

button:nth-child(10):active div {
  background-color: var(--primary-color-dark);
}
</style>

<script>
export default {
  name: "numpad"
};
</script>
