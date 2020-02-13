<template>
  <main class="statistics">
    <div>
      <h1>Statistic</h1>
      <div>
        <button class="selected">Savings</button>
        <button>Expense</button>
      </div>
      <section class="graph">azd</section>
    </div>
    <History />
  </main>
</template>

<script>
import History from "@/components/statistics/History.vue";

export default {
  name: "statistics",
  components: {
    History
  }
};
</script>

<style>
.statistics {
  display: grid;
  grid-template-rows: 2fr 1fr;
  color: var(--primary-color-dark);
  background-color: white;
}

.statistics h1 {
  text-align: center;
}

.statistics > div > div {
  border: 2px solid #cbced7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px 30px;
}

.statistics > div button {
  padding: 15px 0px;
  border: 0px;
  background-color: white;
  color: #5d6481;
}

.statistics > div button.selected {
  background-color: var(--primary-color-dark);
  color: white;
  border-radius: 10px;
  transform: scale(1.1);
}
</style>