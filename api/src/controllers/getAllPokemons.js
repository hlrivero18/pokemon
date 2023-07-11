const axios = require('axios')
const destructuring = require('../utils/destructuring')
const pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=96' //'https://pokeapi.co/api/v2/pokemon'
const { Pokemon, Type } = require('../db')

async function getAllPokemon() {

        //consultamos la base de datos...
        const pokeDB =  await Pokemon.findAll({include:{
                model: Type,
                through: {
                        attributes: []
                }
        }})



        //consultamos la api...

        const { data } = await axios.get(pokeURL)
        const pokemons = data.results
        const pokeInfo = pokemons.map(async ({ url }) => {
                const { data } = await axios.get(url);
                return destructuring(data)
        })
        const pokeAPI = await Promise.all(pokeInfo)

        const pokemones = {
                DB: pokeDB,
                API: pokeAPI,
                ALL: pokeDB.concat(pokeAPI)
        }

        return pokemones

}

module.exports = getAllPokemon