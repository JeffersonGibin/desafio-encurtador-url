<template>
  <section class="s-hits">
    <div class="content">
      <h1>HITS</h1>
      <div class="hits-count">35.713.571</div>
      <div class="text-click">Cliques em links</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "s-hits"
};
</script>

<style lang="scss" scoped>
@import url("./main.scss");

.s-hits {
  font-family: "Roboto Slab";
  justify-content: center;
  text-align: center;
  align-items: center;
  background: #eee;
  display: flex;
  padding: 40px;
  color: #777;

  .content {
    max-width: 200px;
  }

  h1 {
    color: #aa1426;
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .hits-count {
    border: 1px solid #a7a7a7;
    background: #fff;
    color: #aa1426;
    font-size: 32px;
    padding: 3px 12px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  .text-click {
    font-size: 15px;
  }

  @media (min-width: 320px) and (max-width: 425px) {
    h1 {
      font-size: 28px;
    }

    .hits-count {
      font-size: 20px;
    }

    .text-click {
      font-size: 14px;
    }
  }

  &:before {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    left: 50%;
    margin-left: -35px;
    margin-top: -88px;
    border-color: #fff transparent transparent;
    border-style: solid;
    border-width: 35px  35px  0;
  }  
}
</style>