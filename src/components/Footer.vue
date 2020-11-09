<template>
  <div>
    <footer>
      <div class="footer-button-section">
        <div class="footer-button">
          <font-awesome-icon :icon="['far', 'edit']"/>
          <span>Record</span>
        </div>
        <div class="footer-button">
          <font-awesome-icon :icon="['fas', 'chart-line']"/>
          <span class="history">History</span>
        </div>
        <div class="footer-button">
          <font-awesome-icon :icon="['fas', 'cog']"/>
          <span class="history">Setting</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.footer-button-section {
  display: flex;
}
.footer-button {
  width: calc(100% / 3);
  height: 60px;
  margin: 0;
  line-height: 80px;
  background: #0066FF;
  color: white;
  font-weight: bold;
}
.fa-edit, .fa-chart-line, .fa-cog {
  color: white;
}
span.history {
  padding-left: 5px;
}
</style>