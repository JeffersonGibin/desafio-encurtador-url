<template>
  <footer class="s-footer">
    <div class="company-text">
      <a href="https://www.linx.com.br">
        chr.dc
      </a>
    </div>
    <div>
      <a href="https://twitter.com">
      <img src="./assets/img/icon-twitter.png" alt="Twitter">
      </a>
      <a href="https://facebook.com">
        <img src="./assets/img/icon-facebook.png" alt="facebook">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "s-footer"
};
</script>

<style lang="scss" scoped>
.s-footer {
  justify-content: space-between;
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  padding: 17px;

  .company-text {
    color: #aa1426;
    font-size: 20px;
    line-height: 30px;
  }

  img {
    margin-left: 10px;
    margin-right: 10px;
  }

  a:link,
  a:visited,
  a:active {
    color: #aa1426;
  }
}
</style>
