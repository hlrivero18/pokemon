module.exports = (data) => {
    const { id, name, stats, height, weight, sprites, types } = data;
    const tipos = types.map(tipo => tipo.type)
    const pokemon = {
        id,
        name,
        imagen: sprites.front_default,
        gif: sprites.versions["generation-v"]["black-white"].animated.front_default,
        vida: stats[0].base_stat,
        ataque: stats[1].base_stat,
        defensa: stats[2].base_stat,
        altura: height,
        peso: weight,
        types: tipos
    }
    return pokemon
}