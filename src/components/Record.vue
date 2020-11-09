<template>
  <div>
    <h2>今週の学習時間</h2>
    <h3>11/9~11/15</h3>
    <div class="study-time-circle">
      <h3 class="study-time-hhmm">10h30m</h3>
    </div>
    <div><font-awesome-icon :icon="['fab', 'twitter-square']"/></div>
    <!-- formに変更 -->
    <div class="button-section">
      <button type="submit" class="study-time-button">0:30</button>
      <button type="submit" class="study-time-button">1:00</button>
      <button type="submit" class="study-time-button">1:30</button>
      <button type="submit" class="study-time-button">2:00</button>
      <!-- <input type="hidden">totalをもたせる -->
    </div>
    <!-- ここまで -->
  </div>
</template>

<script>
export default {

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
h3.study-time-hhmm {
  font-size: 32px;
  color: white;
}
.svg-inline--fa {
  font-size: 38px;
  color: rgba(29,161,242,1.00);
}
.button-section {
  width: 300px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 153px;
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
  border: none;
  outline: none;
  appearance: none;
}
</style>