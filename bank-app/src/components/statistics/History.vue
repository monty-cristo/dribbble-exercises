<template>
  <section class="history">
    <header>
      <h3>History</h3>
      <span>*** 4533</span>
      <div>
        <span class="left"></span>
        <span class="middle-left"></span>
        <span class="middle-right"></span>
        <span class="right"></span>
      </div>
    </header>
    <ul>
      <li v-for="i in 4" :key="i">
        <span>
          <span></span>
        </span>
        <h4>Grocery</h4>
        <span class="date">23 Dec 2019</span>
        <span class="amount">
          + 455.00
          <span>USD</span>
        </span>
        <span></span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "history"
};
</script>

<style>
.history {
  background-color: var(--primary-color-grey);
  padding: 40px 0px;
  display: grid;
  grid-template-rows: max-content 1fr;
  gap: 20px;
}

.history header {
  display: grid;
  grid-template-columns: 1fr max-content min-content;
  gap: 10px;
  align-items: center;
  margin: 0px 30px;
}

.history header div {
  display: flex;
  position: relative;
}

.history header div span {
  display: block;
}

.history .left,
.history .right,
.history .middle-left,
.history .middle-right {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.history .left {
  background-color: #eb001b;
  margin-right: -20%;
}

.history .right {
  background-color: #f79e1b;
}

.history .middle-left,
.history .middle-right {
  --margin-left-percentage: 0.2;
  --circle-height: 20px;
  --width: calc(var(--circle-height) * var(--margin-left-percentage));
  position: absolute;
  background-color: #ff5f00;
}

.history .middle-left {
  clip-path: inset(0 0 0 79%);
}

.history .middle-right {
  left: calc(var(--circle-height) * (1 - var(--margin-left-percentage) * 2));
  clip-path: inset(0 79% 0 0);
}


.history ul {
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  gap: 15px;
  overflow-x: scroll;
  margin-left: 30px;
}

.history ul::-webkit-scrollbar {
  display: none;
}

.history ul li {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.history ul li > span:first-child {
  position: absolute;
  height: 20px;
  width: 20px;
  top: -1px;
  left: -1px;
  background-color: var(--primary-color-dark);
  border-radius: 100%;
}

.history ul li > span:first-child span {
  position: absolute;
  height: 50%;
  width: 50%;
  bottom: 2px;
  right: -1px;
  background-color: var(--primary-color-orange);
  border-radius: 100%;
}

.history .date {
  font-size: 0.7rem;
}

.history ul li > span:last-child {
  position: absolute;
  height: 100%;
  width: 40%;
  top: 0px;
  right: 0px;
  background: linear-gradient(to top, white, #fff8f2);
  z-index: 0;
}

.history .amount {
  padding: 5px;
  background-color: var(--primary-color-dark);
  color: white;
  border-radius: 5px;
  margin-top: auto;
  font-size: 0.6rem;
}

.history .amount span {
  font-size: 0.8em;
}

.history ul li > :not(:last-child):not(:first-child) {
  z-index: 1;
}

.history ul li:first-child {
  background-color: var(--primary-color-blue);
  color: white;
}

.history ul li:first-child > span:first-child {
  background-color: var(--primary-color-orange);
}

.history ul li:first-child > span:first-child span {
  background-color: #d3f4fb;
}

.history ul li:first-child > span:last-child {
  background: linear-gradient(
    to top,
    var(--primary-color-blue),
    var(--primary-color-light-blue)
  );
}

.history ul li:first-child .amount {
  background-color: #d3f4fb;
  color: var(--primary-color-blue);
}
</style>