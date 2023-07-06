const { Pokemon, Type } = require('../db')

async function postPokemon(pokemon) {
    let { name, imagen, vida, ataque, defensa, altura, peso, types } = pokemon
    name = name.toLowerCase();

    //Verifico si los valores obligatorios en mi modelo vienen del elemento traido de body
    if (!name || !vida || !ataque || !defensa) {
        throw new Error('Faltan datos, recuerda que el pokemon debe tener un nombre, vida, ataque y defensa obligatoriamente')
    }

    //Verifico si ya existe un pokemon creado con ese nombre
    const pokemonDB = await Pokemon.findAll({where: {name : name}})
    if(pokemonDB.length > 0){
        throw new Error('Ya existe un pokemon creado con ese nombre, recuerda que los pokemones no pueden tener el mismo nombre')
    }else{// De no haber ninguno me crea el pokemon en mi DB y lo asocia a los tipos de la tabla Type
        const pokeDB = await Pokemon.create({ name, imagen, vida, ataque, defensa, altura, peso })
        pokeDB.addTypes(types)
    }
    const Pokemones = await Pokemon.findAll({include:{
        model: Type,
                through: {
                        attributes: []
                }
    }})
    return Promise.all(Pokemones)
}
module.exports = postPokemon