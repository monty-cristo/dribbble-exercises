<template>
  <aside class="credit-card">
    <div class="top">
      <div>
        <span>Balance</span>
        <h3>
          25,633.00
          <span>USD</span>
        </h3>
      </div>
      <img src="/img/credit-card-guy.png" alt="credit-card-guy" :height="imgHeight" />
    </div>
    <canvas ref="canvas" class="chip" width="50" height="40"></canvas>
    <div class="bottom">
      <div>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>1134</span>
      </div>
      <span class="visa">Visa</span>
    </div>
  </aside>
</template>

<script>
export default {
  name: "credit-card",
  data() {
    return {
      imgHeight: 220 * 0.6
    };
  },
  mounted() {
    const ctx = this.$refs["canvas"].getContext("2d");
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(25, 0);
    ctx.lineTo(25, 30);
    ctx.lineTo(50, 30);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(25, 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(25, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 35);
    ctx.lineTo(17, 35);
    ctx.lineTo(17, 40);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(40, 15);
    ctx.lineTo(50, 15);
    ctx.stroke();
  }
};
</script>

<style>
.credit-card {
  width: 85%;
  height: 220px;
  display: grid;
  grid-template-rows: 60% 40%;
  position: relative;
  left: 15%;
  top: -120px;
  color: white;
}

.top {
  background-color: var(--primary-color-light-blue);
  border-top-left-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
}

.top div {
  display: grid;
  gap: 15px;
  align-content: center;
}

.top span {
  font-size: 0.7rem;
}

.top div > span {
  color: #d3d0fd;
}

.chip {
  position: absolute;
  background-color: var(--primary-color-dark);
  border-radius: 5px;
  top: calc(220px * 0.6 - 20px);
  left: 20px;
}

.bottom {
  background-color: var(--primary-color-orange);
  border-bottom-left-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding-left: 20px;
  box-shadow: 0px 2px 10px 0px rgba(247, 104, 0, 0.6);
}

.bottom > div {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 15px;
  align-items: center;
}

.bottom > div > span {
  font-weight: bold;
}

.bottom > * {
  padding-top: 20px;
}

.dots {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 5px;
}

.dots span {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 100%;
}

.visa {
  background-color: #ff986d;
  height: 95%;
  width: calc(220px * 0.4 * 1.2);
  height: calc(220px * 0.4 * 1.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  clip-path: ellipse(58% 55% at 66% 70%);
  padding-left: 20px;
  font-weight: bold;
}
</style>