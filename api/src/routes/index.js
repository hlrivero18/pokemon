const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllPokemon = require('../controllers/getAllPokemons')
const getPokemonForId = require('../controllers/getPokemonForId')
const getPokemonForName = require('../controllers/getPokemonForName')
const postPokemon = require('../controllers/postPokemon')
const types = require('../controllers/types');
const deletePokemon = require('../controllers/deletePokemon');
const deleteAll = require('../controllers/deleteAll');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/types', async (req, res)=>{
    try {
        const tipos = await types()
        res.status(200).json(tipos)
    } catch (error) {
        res.json({error: error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const { name } = req.query
        if (name) {
            const pokemon = await getPokemonForName(name)
            res.status(200).json(pokemon)
        } else {
            const pokemons = await getAllPokemon()
            res.status(200).json(pokemons)
        }
    } catch (error) {
        res.json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const pokemon = await getPokemonForId(id)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

router.post('/', async (req, res) =>{
    try {
        const pokemon = req.body
        const result = await postPokemon(pokemon)
        res.status(201).json(result)
        
    } catch (error) {
        res.json({error: error.message})
    }
})

router.delete('/delete/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        await deletePokemon(id)
        const pokemon = await getAllPokemon()
        res.json(pokemon)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/deleteall', async(req,  res) =>{
    try {
        const borrado = await deleteAll()
        res.json({message: borrado})
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;
