const { Pokemon, Type } = require('../db')
const axios = require('axios')
const destructuring = require('../utils/destructuring')
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'


async function getPokemonForName(name) {
    name = name.toLowerCase();
    const result = []
    // consulto la base datos...
    const nameEncont = await Pokemon.findOne({ where: { name: name }, include:{
        model: Type,
                through: {
                        attributes: []
                }
    }})
    // si encontre el nombre en la DB lo agrego...
    if (nameEncont !== null) { result.push(nameEncont) };

    // lo busco en la api...
    try {
        const { data } = await axios.get(pokeUrl + name)
        const resultApi = destructuring(data)
        result.push(resultApi)
        return result
    } catch (error) {
        //de no encontrarlo en la api significa que no existe y por ende se devuelve un error
        if(nameEncont !== null) return result
        
        throw new Error(`El ID o el nombre que ingresaste no coincide con ningun pokemon`)
    }
}
module.exports = getPokemonForName