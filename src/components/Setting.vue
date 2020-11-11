<template>
  <div>
    <h2>Settings</h2>
    <!-- todo vuex使ってログアウトする処理 -->
    <router-link to="/login">
      <button type="submit" class="study-time-button logout">Logout</button>
    </router-link>
  </div>
</template>

<style>
.logout {
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>