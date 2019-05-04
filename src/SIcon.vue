<template>
  <img class="s-icon" src="./assets/img/arrow.png" alt=""/>
</template>

<script>
  export default {
    name: "s-icon"
  }
</script>

<style lang="scss" scoped>
  .s-icon {
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-name: arrow;
    margin-bottom: 20px;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 0;
  }

  @keyframes arrow {
    0%   {opacity: 0;};
  	25%  {opacity: 1;};
  	75%  {opacity: 1;};
  	100% {opacity: 0;};
  }

  @media (max-width: 768px) {
    .s-icon {
      display: none;
    }
  }
</style>
