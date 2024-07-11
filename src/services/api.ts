import axios from "axios";


const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getEventosGerais = ()  => api.get('/eventos-gerias')
export const getFestasShows = ()  => api.get('/festas-shows')
export const getTeatrosEspetaculos = ()  => api.get('/eventosgerias')

export default api