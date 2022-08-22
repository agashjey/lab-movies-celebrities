const router = require('express').Router()

const Celebrity = require('../models/celebrity.model')


// all your routes here

router.get('/celebrities', async (req, res) => {
    try {
        const allCeleb = await Celebrity.find();
        res.status(201).json(allCeleb);
    } catch (error){
        res.status(500).json("INTERNAL SERVOR ERROR");
    }
});

router.post('/celebrities', async (req, res) => {
    try {
        const { name, occupation, catchPhrase} = req.body;

        const newCelebrity = await Celebrity.create({name, occupation, catchPhrase});
        
        res.status(201).json({ message:`${newCelebrity.name} has been added to the database:`, newCelebrity});

    } catch {
        res.status(400).json('Not able to create a new celebrity.')
    }
});

module.exports = router