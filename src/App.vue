<template>
  <div id="app">
    <router-view></router-view>
    <!-- todo ログインしていない場合は非表示にする処理 -->
    <footer>
      <div class="footer-button-section">
        <div class="footer-button" v-on:click="activetab=1">
          <router-link to="/">
            <font-awesome-icon :icon="['far', 'edit']" v-bind:class="[ activetab === 1 ? 'active' : '' ]"/>
            <span v-bind:class="[ activetab === 1 ? 'active' : '' ]">Record</span>
          </router-link>
        </div>
        <div class="footer-button" v-on:click="activetab=2">
          <router-link to="/history">
            <font-awesome-icon :icon="['fas', 'chart-line']" v-bind:class="[ activetab === 2 ? 'active' : '' ]"/>
            <span class="history" v-bind:class="[ activetab === 2 ? 'active' : '' ]">History</span>
          </router-link>
        </div>
        <div class="footer-button" v-on:click="activetab=3">
          <router-link to="/setting">
            <font-awesome-icon :icon="['fas', 'cog']" v-bind:class="[ activetab === 3 ? 'active' : '' ]"/>
            <span class="setting" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Setting</span>
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      activetab: ''
    }
  }
}
</script>

<style>
/* 全体のレイアウト */
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  min-height: 95.5vh;
}
a {
  text-decoration: none;
  color: white;
}
button {
  border: none;
  outline: none;
  appearance: none;
}
input {
  width: 250px;
  height: 35px;
  margin: 5px auto;
  border: none;
  outline: none;
  appearance: none;
  border-radius: 4px;
  padding: 3px;
  font-size: 18px;
}
input:focus {
  outline: none;
}
/* ここまで */

/* フッターのレイアウト */
footer {
  margin-top: auto;
}
.footer-button-section {
  display: flex;
}
.footer-button {
  width: calc(100% / 3);
  height: 60px;
  margin: 0;
  line-height: 80px;
  background: #0066FF;
  /* color: white; */
  font-weight: bold;
}
span {
  color: rgba(29,161,242,1.00);
}
span.history, span.setting {
  padding-left: 5px;
}
.fa-edit, .fa-chart-line, .fa-cog {
  font-size: 38px;
  color: rgba(29,161,242,1.00);
}
.active {
  color: white;
}
/* ここまで */
</style>
