<template>
  <header class="s-header">
    <a href="#">
       <img src="./assets/img/logo-chaordic.png" alt="Logo">
    </a>
  </header>
</template>

<script>
  export default {
    name: 's-header'
  }
</script>

<style lang="scss" scoped>
  .s-header {
    text-align: center;
    padding: 15px;
    position: fixed;
    width: 100%;
    z-index: 999;
    background: #FFF;
    box-shadow: 0 4px 3px rgba(0,0,0,.5);
  }

  .s-header #logo{
    vertical-align: bottom;
  }
</style>