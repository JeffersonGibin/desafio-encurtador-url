import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jeffersongibin.github.io/desafio-encurtador-url'
});

export default {
  lista: () => {
    return http.get("/urls.json")
  }
}