const { Pokemon, Type } = require('../db')
const axios = require('axios')
const destructuring = require('../utils/destructuring')
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'


async function getPokemonForName(name) {
    name = name.toLowerCase();

    const nameEncont = await Pokemon.findOne({ where: { name: name }, include:{
        model: Type,
                through: {
                        attributes: []
                }
    }})
    if (nameEncont !== null) { return nameEncont };

    try {
        const { data } = await axios.get(pokeUrl + name)
        return destructuring(data)
        
    } catch (error) {
        throw new Error('El ID o el nombre que ingresaste no coincide con ningun pokemon')
    }
}
module.exports = getPokemonForName

