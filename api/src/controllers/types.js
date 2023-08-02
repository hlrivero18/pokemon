const { Type } = require('../db');
const axios = require('axios');

async function types(){

        let types = await Type.findAll()

        if(types.length === 0){
            const {data} = await axios.get('https://pokeapi.co/api/v2/type/')
            const {results} = data

            for(let i = 0; i < results.length; i++){
                const {name} = results[i]
                await Type.findOrCreate({where:{name:name}})
            }
            
            types = await Type.findAll()
        }

        return types
}

module.exports = types