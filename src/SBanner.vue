<template>
  <div class="s-banner">
    <s-icon/>
    <div class="content">
      <h1>Encurte seus links</h1>
      <p class="sub-content">
        Links são longos. Encurte os links que você deseja compartilhar, e acompanhe enquanto
         viajam através da internet.
      </p>
      <form>
        <input type="text" placeholder="Cole o seu link aqui">
        <button>ENCURTAR</button>
      </form>
    </div>
  </div>
</template>

<script>
import SIcon from "./SIcon.vue";

export default {
  name: "s-banner",
  components: { SIcon }
};
</script>

<style lang="scss" scoped>
@import url("./main.scss");

@mixin placeholder {
  &::-webkit-input-placeholder {@content}
  &:-moz-placeholder           {@content}
  &::-moz-placeholder          {@content}
  &:-ms-input-placeholder      {@content}  
}

input {
  @include placeholder {
    color: #ff6e14;
    font-size: 18px;
  }
}

.s-banner {
  font-family: "Roboto Slab", serif;
  background-image: url("./assets/img/background-home.jpg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  display: flex;
  color: #fff;

  .content {
    max-width: 700px;
  }

  .sub-content {
    margin-bottom: 40px;
  }

  .content h1 {
    font-family: "Roboto Slab", sans-serif;
    margin-bottom: 15px;
    font-size: 45px;
  }
  .content p {
    font-family: "Roboto", Arial;
    font-size: 24px;
  }

  .content form input {
    color: #ff6e14;
    background: none;
    font-size: 18px;
    padding: 10px 0;
    width: 400px;
    height: 35px;
    border: none;
    border-bottom: 2px solid #ff6e14;
  }

  .content form input:focus {
    outline: none;
  }

  .content form button {
    background: #ff6e14;
    border: none;
    color: #fff;
    height: 35px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: bold;
    vertical-align: bottom;
    margin-left: 10px;
  }

  @media (min-width: 320px) and (max-width: 425px) {
    .content {
      padding: 15px;
    }

    .content form input {
      width: 200px;
    }

    .content h1 {
      font-size: 2em;
    }

    .content p {
      font-size: 1em;
    }
  }

  @media (width: 320px) {
    .content form input {
      margin-bottom: 20px;
      width: 280px;
    }

    .content form button {
      padding-right: 90px;
      padding-left: 90px;
      margin: 0;
    }
  }
}
</style>