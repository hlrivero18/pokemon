const { Type } = require('../db');
const axios = require('axios');

async function types(){
        const {data} = await axios.get('https://pokeapi.co/api/v2/type/')
        const {results} = data

        for(let i = 0; i < results.length; i++){
            const {name} = results[i]
            await Type.findOrCreate({where:{name:name}})
        }
        const tipos = await Type.findAll()
        console.log(Type)
        return tipos

}

module.exports = types