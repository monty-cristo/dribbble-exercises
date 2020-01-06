<template>
  <header class="amount">
    <nav>
      <router-link to="/">
        <div class="arrow-left icon"></div>
      </router-link>
      <span>SEND MONEY</span>
      <div class="more-vertical-solid icon"></div>
    </nav>
    <div @touchstart.prevent="start" @touchend.prevent="end" class="swipe-area">
      <ul class="type">
        <li
          v-for="(currency, index) in currencies"
          :key="index"
          :class="{ selected: index === selectedIndex}"
        >{{ currency }}</li>
      </ul>
      <span class="number">{{ amount }}</span>
      <ul class="dots">
        <li
          v-for="index in currencies.length"
          :key="index"
          :class="{ selected: index - 1 === selectedIndex}"
        ></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.amount {
  background-color: var(--primary-color-beige);
  padding: 30px 20px;
  border-bottom-left-radius: var(--primary-border-radius);
  border-bottom-right-radius: var(--primary-border-radius);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color-dark);
}

nav span {
  font-weight: bold;
  font-size: 0.75rem;
}

.arrow-left.icon {
  color: var(--primary-color-dark);
  position: relative;
  width: 16px;
  height: 2px;
  background-color: currentColor;
}

.arrow-left.icon:before {
  content: "";
  position: absolute;
  left: 1px;
  top: -3.6px;
  width: 10px;
  height: 10px;
  border-top: solid 2px currentColor;
  border-right: solid 2px currentColor;
  transform: rotate(-135deg);
}

.more-vertical-solid.icon {
  color: var(--primary-color-dark);
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: solid 1px currentColor;
  background-color: currentColor;
}

.more-vertical-solid.icon:before {
  content: "";
  position: absolute;
  left: -1px;
  top: -9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: solid 1px currentColor;
  background-color: currentColor;
}

.more-vertical-solid.icon:after {
  content: "";
  position: absolute;
  left: -1px;
  top: 7px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: solid 1px currentColor;
  background-color: currentColor;
}

.swipe-area {
  display: grid;
  gap: 20px;
  justify-content: center;
  justify-items: center;
  margin-top: 10px;
}

.type {
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 25px;
  color: #c4a59d;
}

.type .selected {
  color: var(--primary-color-dark);
  font-size: 1.8rem;
  font-weight: bold;
}

.number {
  font-size: 7rem;
  color: var(--primary-color-dark);
  font-weight: bold;
}

.dots {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 20px;
  align-items: center;
}

.dots li {
  height: 8px;
  width: 8px;
  background-color: #c4a59d;
  border-radius: 100%;
}

.dots .selected {
  background-color: var(--primary-color-dark);
  height: 14px;
  width: 14px;
}
</style>

<script>
export default {
  name: "amount",
  props: ["amount"],
  data() {
    return {
      x: 0,
      selectedIndex: 1,
      currencies: ["£", "$", "¥"]
    };
  },
  methods: {
    start: function(e) {
      this.x = e.touches[0].clientX;
    },
    end: function(e) {
      const deltaX = e.changedTouches[0].clientX - this.x;
      if (deltaX < 0) {
        if (this.selectedIndex > 0) {
          this.selectedIndex--;
        }
      } else if (deltaX > 0) {
        if (this.selectedIndex < 2) {
          this.selectedIndex++;
        }
      }
    }
  }
};
</script>
