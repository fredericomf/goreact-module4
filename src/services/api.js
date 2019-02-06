import axios from "axios";

// NOTA_ESTUDO: Está apontando para a porta 3001 por que definimos na ferramenta JSON-SERVER (consultar o README.md)
const api = axios.create({
  baseURL: "http://localhost:3001"
});

export default api;
