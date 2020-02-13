<template>
  <main class="home">
    <Header />
    <CreditCard />
    <div class="content">
      <SendMoney />
      <TotalSend />
    </div>
  </main>
</template>

<style>
.content {
  display: grid;
  padding: 30px 30px;
  gap: 30px;
  margin-top: -120px;
}

.home {
  overflow-y: auto;
}

.home::-webkit-scrollbar {
  display: none;
}
</style>

<script>
import Header from "@/components/home/Header.vue";
import CreditCard from "@/components/home/CreditCard.vue";
import SendMoney from "@/components/home/SendMoney.vue";
import TotalSend from "@/components/home/TotalSend.vue";

export default {
  name: "home",
  components: {
    Header,
    CreditCard,
    SendMoney,
    TotalSend
  }
};
</script>
