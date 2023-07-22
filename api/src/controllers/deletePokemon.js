const { Pokemon } = require('../db')
const getAllPokemon = require('./getAllPokemons')

async function deletePokemon(id){
    try {
        const pokemon = await Pokemon.findOne({where: {id: id}})
        if(pokemon){
            await Pokemon.destroy({where: {id:id}})
            
            return 'El pokemon fue eliminado con exito'
        }else{
            throw new Error('error al eliminar el pokemon') 
        }
    } catch (error) {
        return error
    }
}

module.exports = deletePokemon