<template>
  <section class="s-list-top-five">
    <div class="loader" v-if="loading">Carregando...</div>
    <div class="error" v-if="error">Ops, ocorreu um erro ao carregar Top 5  :'(</div>
    <div class="content" v-if="!loading">
      <h1>TOP 5</h1>
      <ul>
        <li v-for="(item, key) in data" :key="key">
          <a :href="item.url">{{item.shortUrl}}</a>
          <span>{{item.id}}</span>
        </li>
      </ul>
    </div>   
  </section>
</template>

<script>
import API from "./services/service.js";

export default {
  name: "s-list-top-five",
  data() {
    return {
      data: [],
      loading: true,
      error: false
    };
  },
  mounted() {
    API.lista()
      .then(result => {
        this.shortItemByHits(result.data);
        let topFive = result.data.slice(0, 5);
        this.data = topFive;

        setTimeout(() => {
          this.loading = false;
        }, 1000);
        
      })
      .catch(e => {
        this.loading = false;
      })
  },
  methods: {
    shortItemByHits(data) {
      data.sort((a, b) => {
        if (a.hits < b.hits) return -1;
        if (a.hits > b.hits) return 1;
        return 0;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("./main.scss");

.s-list-top-five {
    font-family: "Roboto", Arial;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 25px;

  .content {
    max-width: 500px;
    max-height: 320px;
    margin-top: 20px;
    width: 100%;
  }

  h1 {
    font-family: "Roboto Slab", serif;
    margin-bottom: 10px;
    text-align: center;
    font-size: 30px;
    color: #aa1423;
  }

  ul {
    width: 100%;
  }

  ul li {
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
    list-style: none;
    padding: 15px 0;
    display: flex;
  }

  ul li:last-child {
    border-bottom: none;
  }

  ul li a {
    width: 300px;
  }

  ul li a:hover {
    text-decoration: underline;
  }

  ul li a:link,
  ul li a:visited,
  ul li a:active {
    text-decoration: none;
    color: #aa1426;
  }

  ul li span {
    color: #777;
    width: 100px;
    font-weight: 500;
    text-align: right;
  }

  .loader {
    text-align: center;
    font-size: 14px;
  }

  .error, .loader {
    padding: 10px;
    margin: 20px;
    font-weight: bold;
  }

  @media (min-width: 320px) and (max-width: 425px) {
    & {
      max-height: 350px;
      font-family: "Roboto", Arial;
      padding: 0px;

      ul li span {
        width: 50px;
      }

      ul li {
        font-size: 14px;
      }

      .content {
        max-width: 320px;
        max-height: none;
        margin-top: auto;
        padding: 20px
      }

      h1 {
        font-size: 25px;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>