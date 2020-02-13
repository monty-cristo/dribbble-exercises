<template>
  <section class="total-send">
    <header>
      <h3>Total sent</h3>
      <font-awesome-icon icon="calculator" size="lg" />
    </header>
    <ul>
      <li>
          <img src="/img/avatar4.jpg" alt="avatar" />
          <div>
              <h4>Jhona</h4>
              <span>03 Jan 2020</span>
          </div>
          <span>$365.00</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "total-send"
};
</script>

<style>
.total-send {
  color: var(--primary-color-dark);
  display: grid;
  gap: 25px;
}

.total-send header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-send ul {
    display: grid;
    grid-auto-rows: max-content;
    gap: 15px;
}

.total-send ul li {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    gap: 15px;
    align-items: center;
}

.total-send ul li img {
    width: 45px;
    border-radius: 12px;
}

.total-send ul li div {
    display: flex;
    flex-direction: column;
    align-content: space-between;
}

.total-send ul li div span {
    font-size: 0.8rem;
}

.total-send ul li > span {
    background-color: white;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: bold;
}
</style>