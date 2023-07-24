const { Pokemon, Type } = require('../db')

async function postPokemon(pokemon) {
    let { name, imagen, vida, ataque, defensa, altura, peso, types } = pokemon
    name = name.toLowerCase();
    altura = altura + ' cm'
    peso = peso + ' kg'

    //Verifico si los valores obligatorios en mi modelo vienen del elemento traido de body
    if (!name || !vida || !ataque || !defensa) {
        throw new Error('Faltan datos, recuerda que el pokemon debe tener un nombre, vida, ataque y defensa obligatoriamente')
    }

    //creo un pokemon con los datos del parametro
    const [pokeDB, created] = await Pokemon.findOrCreate({
        where: { name },
        defaults: { imagen, vida, ataque, defensa, altura, peso }
    });

    await pokeDB.addTypes(types);

    const Pokemones = await Pokemon.findOne({
        where: { name },
        include: {
            model: Type,
            through: { attributes: [] }
        }
    });

    return Pokemones;

}

module.exports = postPokemon