<template>
  <div class="pay">
    <Amount v-bind:amount="amount" />
    <Numpad @add-number="add" @add-dot="dot" @remove-number="remove" />
  </div>
</template>

<style scoped>
.pay {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  height: 100%;
}
</style>

<script>
import Amount from "@/components/pay/Amount.vue";
import Numpad from "@/components/pay/Numpad.vue";

export default {
  name: "pay",
  components: {
    Amount,
    Numpad
  },
  data() {
    return {
      amount: "0"
    };
  },
  methods: {
    add: function(number) {
      if (this.amount === "0") {
        this.amount = number;
      } else {
        this.amount += number;
      }
    },
    dot: function() {
      if (!this.amount.includes(".")) this.amount += ".";
    },
    remove: function() {
      if (this.amount.length > 1)
        this.amount = this.amount.substring(0, this.amount.length - 1);
    }
  }
};
</script>
