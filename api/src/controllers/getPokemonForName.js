const { Op } = require("sequelize");
const axios = require("axios");
const { Pokemon, Type } = require("../db"); // ajustá según tu import
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";

async function getPokemonForName(name) {
  name = name.toLowerCase();

  // 1. Buscar en la base de datos todos los que empiecen con "name"
  const pokemonsDB = await Pokemon.findAll({ 
    where: { 
      name: { [Op.iLike]: `${name}%` } 
    }, 
    include: {
      model: Type,
      through: { attributes: [] }
    }
  });

  // 2. Buscar en la API solo si se ingresó un nombre exacto (ej: "pikachu")
  let pokemonApi = null;
  try {
    const { data } = await axios.get(pokeUrl + name);
    pokemonApi = destructuring(data);
  } catch (error) {
    // si no existe en la API, no pasa nada
  }

  // 3. Combinar resultados (si lo encontré en API y no está en DB, lo agrego)
  let result = [...pokemonsDB];
  if (pokemonApi && !pokemonsDB.some(p => p.name === pokemonApi.name)) {
    result.push(pokemonApi);
  }

  // 4. Si no hay resultados, lanzar error
  if (result.length === 0) {
    throw new Error(`El nombre ingresado no coincide con ningún Pokémon`);
  }

  return result;
}

module.exports = getPokemonForName;