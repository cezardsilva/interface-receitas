import axios from 'axios'


// const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/";
// const VITE_API_URL = import.meta.env.PROD 
//   ? import.meta.env.VITE_API_URL_PRODUCTION 
//   : import.meta.env.VITE_API_URL_LOCAL || "http://localhost:3001/api/";
// const VITE_API_URL = import.meta.env.PROD 
//   ? "https://api-aireceitas.onrender.com/"  // Sem /api se não existir no backend
//   : "http://localhost:3001/api/";
const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/";

export const api = async (pergunta) => {
    try {
        const response = await axios.post(`${VITE_API_URL}receitas/perguntar`, {
            pergunta
        })

        return response.data.resposta

    } catch(err) {
        console.error("Erro ao buscar a resposta do servidor", err)
        throw err

    }
}