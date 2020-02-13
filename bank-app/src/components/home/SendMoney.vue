<template>
  <section class="send-money">
    <header>
      <h3>Send money to</h3>
      <span>Search</span>
      <span class="search-icon">
        <font-awesome-icon icon="search" size="xs" />
      </span>
    </header>
    <ul>
      <li v-for="index in 3" :key="index" :style="{ zIndex: 4 - index}">
        <img :src="`./img/${images[index - 1]}`" alt="avatar" />
      </li>
      <li>
        <font-awesome-icon icon="plus" />
      </li>
    </ul>
    <footer>
      <label for="amount">Amount</label>
      <div>
        <input type="text" name="amount" placeholder="0.00 USD" />
        <button>
          <font-awesome-icon :icon="['far', 'paper-plane']" />
        </button>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "send-money",
  data() {
    return {
      images: ["avatar1.jpg", "avatar2.jpg", "avatar3.jpg"]
    };
  },
  methods: {
    down: function() {

    }
  }
};
</script>

<style>
.send-money {
  color: var(--primary-color-dark);
  display: grid;
  gap: 20px;
}

.send-money header {
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  align-items: center;
  gap: 10px;
}

.send-money span:first-of-type {
  font-size: 0.8rem;
  font-weight: bold;
}

.send-money .search-icon {
  background-color: var(--primary-color-orange);
  padding: 5px 7px;
  border-radius: 10px;
  color: white;
}

.send-money ul {
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
}

.send-money ul li {
  margin-left: -10px;
}

.send-money ul li:first-child {
  margin-left: 0px;
}

.send-money img {
  width: 45px;
  border-radius: 100%;
  border: 1px solid var(--primary-color-grey);
}

.send-money ul li:last-child {
  width: 42px;
  height: 42px;
  border: 2px dashed var(--primary-color-light-blue);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color-light-blue);
}

.send-money footer label {
  color: #777b96;
  font-weight: bold;
}

.send-money footer div {
  display: grid;
  grid-template-columns: 1fr max-content;
}

.send-money footer input {
  border: 0px;
  background-color: var(--primary-color-grey);
  font-size: 1.3rem;
  color: var(--primary-color-dark);
  font-weight: bold;
  width: 100%;
}

.send-money footer input::placeholder {
  color: var(--primary-color-dark);
}

.send-money footer button {
  background-color: var(--primary-color-orange);
  padding: 15px;
  border-radius: 10px;
  border: 0px;
  color: white;
  outline: 0;
}
</style>