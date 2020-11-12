<template>
  <div>
    <Title :title="title"></Title>
    <ButtonNotFunc></ButtonNotFunc>
  </div>
</template>

<script>

export default {
  components: {
    ButtonNotFunc,
    Title
  },
  data() {
    return {
      title: "Last Week History"
    }
  }
}
</script>

<style>

</style>