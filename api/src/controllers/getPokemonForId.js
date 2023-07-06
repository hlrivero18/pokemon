const { Pokemon, Type } = require('../db')
const axios = require('axios')
const destructuring = require('../utils/destructuring')
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
const esUUID = require('../utils/esUUId')

async function getPokemonForId(id) {

    //con esta funcion verificamons que el id llegado por parametro sea de tipo UUID o un ID normal
    //esto para evitar errores al verificar si el pokemon esta en DB o en la API
    const ID = esUUID(id)

    //Buscamos primero en la DB

    if (ID) {
        const pokemonEncon = await Pokemon.findOne({ where: { id: id }, include:{
            model: Type,
                through: {
                        attributes: []
                }
        } })
        if (pokemonEncon !== null) { return pokemonEncon }
    }

    //En caso de que el pokemon no este en la base de datos...
    try {
        const { data } = await axios.get(pokeUrl + id)
        return destructuring(data)
    } catch (error) {
        throw new Error('El ID o el nombre que ingresaste no coincide con ningun pokemon')
    }
}


module.exports = getPokemonForId