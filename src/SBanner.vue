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
        <div class="box-input">
          <input ref="input" type="text" placeholder="Cole o seu link aqui" :readonly="!show">
          <transition name="fade">
            <button v-if="!show" class="btn-delete" @click.prevent="deleteText">X</button>
          </transition>
        </div>
        
        <button v-if="show" class="btn-shorten" @click.prevent="shorten">ENCURTAR</button>
        <button v-if="!show" class="btn-copy-url" @click.prevent="clipboard">COPIAR URL</button>
      </form>
    </div>
  </div>
</template>

<script>
import SIcon from "./SIcon.vue";

export default {
  name: "s-banner",
  components: { SIcon },
  data(){
    return {
      show: true
    }
  },
  methods: {
    shorten(){
      let input = this.$refs.input;

      if (input.value.length && input.value.length >= 3) {
        this.show = false;
        input.value = "http://chr.dc/xyzxyz";
      }
    },
    clipboard(){
      this.$refs.input.select();
      document.execCommand("copy");
    },
    deleteText(){
      this.$refs.input.value = "";
      this.show = true;
    }
  }
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
    color: #FFF;
    background: none;
    font-size: 16px;
    padding: 10px 0;
    width: 400px;
    height: 35px;
    border: none;
    border-bottom: 2px solid #ff6e14;
    font-weight: 600;
  }

  .content form input:focus {
    outline: none;
  }

  .btn-shorten, .btn-copy-url {
    background: #ff6e14;
    border: none;
    color: #fff;
    height: 40px;
    width: 150px;
    padding-left: 20px;
    padding-right: 20px;
    vertical-align: bottom;
    margin-left: 10px;
    cursor: pointer;
    outline: none;
    font-weight: 800;
    font-size: 15px;
  }

  .box-input {
    position: relative;
    display: inline-block;
  }

  .btn-delete {
    background: transparent;
    position: absolute;
    cursor: pointer;
    color: #FFF;
    outline: none;
    border: none;
    height: 35px;
    width: 35px;
    right: 0;
    top: 0;
  }

  @media (min-width: 320px) and (max-width: 425px) {
    .content {
      padding: 30px;
    }

    .content form input {
      width: 200px;
      font-weight: normal;
      font-size: 14px;
    }

    .content h1 {
      font-size: 2em;
    }

    .content p {
      font-size: 1em;
    }

    .content form input {
      width: 100%;
    }

    .box-input {
      width: 100%;
    }

    .btn-shorten, .btn-copy-url  {
      width: 100%;
      font-size: 14px;
      margin: 15px 0 0 0;
    }

    input {
      @include placeholder {
        color: #ff6e14;
        font-size: 16px;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>