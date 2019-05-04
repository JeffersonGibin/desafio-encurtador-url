<template>
  <div id="app">
    <main>
      <s-header/>
      <s-banner/>
      <s-list-top-five/>
      <s-hits/>
      <s-footer/>
    </main>
  </div>
</template>

<script>
import SHeader from "./SHeader.vue";
import SBanner from "./SBanner.vue";
import SListTopFive from "./SListTopFive.vue";
import SHits from "./SHits.vue";
import SFooter from "./SFooter.vue";

export default {
  name: "app",
  components: {
    SHeader,
    SBanner,
    SListTopFive,
    SHits,
    SFooter
  }
};
</script>

<style lang="scss" scoped>
@import url("./main.scss");

#app {
  background: #fff;
}
</style>
