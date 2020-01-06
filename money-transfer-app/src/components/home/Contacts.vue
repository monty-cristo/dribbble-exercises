<template>
  <main>
    <header>
      <h2>Friends</h2>
      <h2>Recent</h2>
      <div class="search icon"></div>
    </header>
    <ul>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
      <li>
        <img src="@/assets/avatar.png" alt="avatar" />
        <span>Monty Cristo</span>
        <router-link to="/pay">PAY</router-link>
      </li>
    </ul>
    <div class="add-friend-container">
      <a href="#" class="add-friend">ADD FRIEND</a>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: white;
  border-radius: var(--primary-border-radius);
  margin-top: -55px;
  padding: 30px 30px 0px 30px;
  overflow: hidden;
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 30px;
  position: relative;
}

header {
  color: var(--primary-color-dark);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 25px;
}

header h2:nth-child(2) {
  color: #b1b5c8;
  font-weight: normal;
}

.search.icon {
  color: var(--primary-color-dark);
  width: 20px;
  height: 20px;
  border: solid 2px currentColor;
  border-radius: 100%;
  transform: rotate(-45deg);
  margin-right: 4px;
  margin-top: -3px
}

.search.icon:before {
  content: '';
  position: absolute;
  top: 16px;
  left: 7px;
  height: 10px;
  width: 2px;
  background-color: currentColor;
}

ul {
  display: grid;
  grid-auto-rows: min-content;
  gap: 20px;
  overflow-y: auto;
}

ul::-webkit-scrollbar {
  display: none;
}

li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 25px;
}

li span {
  color: #636991;
}

li a {
  text-decoration: none;
  padding: 10px 20px;
  color: var(--primary-color-dark);
  background-color: #EFF0F4;
  border-radius: var(--primary-border-radius);
  font-size: 0.7rem;
  font-weight: bold;
}

img {
  border-radius: 100%;
  height: 55px;
}

.add-friend-container {
  position: absolute;
  padding: 0px 30px;
  bottom: 20px;
  width: 100%;
}

.add-friend {
  padding: 15px 20px;
  background-color: var(--primary-color-beige);
  text-align: center;
  border-radius: var(--primary-border-radius);
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color-dark);
  display: block;
}

</style>

<script>
export default {
  name: "contacts"
};
</script>
