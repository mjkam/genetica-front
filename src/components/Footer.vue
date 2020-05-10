<template>
  <footer class="container">
    <div class="content">
      © 2019 - 2020 Genetica
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
}

.content {
  padding: 17px 54px;
  font-size: 14px;
  background: transparent;
  color: gray;
}

</style>