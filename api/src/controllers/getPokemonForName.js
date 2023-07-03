const { Pokemon } = require('../db')
const axios = require('axios')
const destructuring = require('../utils/destructuring')
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'


async function getPokemonForName(name) {
    name = name.toLowerCase();

    const nameEncont = await Pokemon.findOne({ where: { name: name } })
    if (nameEncont !== null) { return nameEncont };

    try {
        const { data } = await axios.get(pokeUrl + name)
        return destructuring(data)
        
    } catch (error) {
        throw new Error('El pokemon buscado por nombre no fue encontrado')
    }
}
module.exports = getPokemonForName

