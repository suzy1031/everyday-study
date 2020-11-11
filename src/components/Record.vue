<template>
  <div>
    <h2>This Week Study Record</h2>
    <h3>11/9~11/15</h3>
    <div class="study-time-circle">
      <h3 class="page-title">10h30m</h3>
    </div>
    <div><font-awesome-icon :icon="['fab', 'twitter-square']"/></div>
    <!-- todo formに変更 -->
    <div class="button-section">
      <button type="submit" class="study-time-button">0:30</button>
      <button type="submit" class="study-time-button">1:00</button>
      <button type="submit" class="study-time-button">1:30</button>
      <button type="submit" class="study-time-button">2:00</button>
      <!-- todo <input type="hidden">totalをもたせる -->
    </div>
    <!-- ここまで -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: ''
    }
  }
}
</script>
<style>
.study-time-circle {
  width: 150px;
  height: 150px;
  background: #0066FF;
  border-radius: 50%;
  margin: 20px auto;
  text-align:center;
  line-height: 150px;
}
h3.page-title {
  font-size: 32px;
  color: white;
}
.fa-twitter-square {
  font-size: 38px;
  color: rgba(29,161,242,1.00);
}
.button-section {
  width: 300px;
  margin: auto;
  margin-top: 30px;
}
.study-time-button {
  width: 140px;
  background: #0066FF;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
  margin: 5px;
}
</style>