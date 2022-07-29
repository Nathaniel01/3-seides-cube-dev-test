import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

const query_params = {
    pokemon: 'pokemon'
}
export const fetchData = async (data: string) => {
    try {
        const res = await api.get(`${query_params.pokemon}/${(data.toLowerCase())}`)
        return res.data;
    } catch (e) {
        alert("Pokemon not found. refresh the page")
    }
}