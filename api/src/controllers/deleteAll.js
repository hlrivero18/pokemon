const { Pokemon } = require('../db')

async function deleteAll() {
    try {
        const eliminar = await Pokemon.destroy({ where: {} })
        return `se eliminaron ${eliminar} elementos`
    } catch (error) {
        return error
    }
}

module.exports = deleteAll