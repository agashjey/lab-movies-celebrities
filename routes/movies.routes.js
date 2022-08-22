const Movie = require('../models/Movie.model');

const router = require('express').Router()

// all your routes here
router.post('/movies', async (req, res, next) => {
    try {
        const { title, genre, plot, cast} = req.body;
         console.log(req.body);
        const newMovie = await Movie.create({ title, genre, plot, cast})
        res.status(201).json(newMovie);
    } catch (error){
        next(error);
    }
});

router.get('/movies', async (req, res, next) => {
    try {
        const allMovies = await Movie.find();
        res.status(201).json(allMovies);
    } catch (error){
        res.status(500).json("INTERNAL SERVOR ERROR");
    }
});


router.get('/movies/:id', async (req, res, next) => {
    try{
        const {id} = req.params;

        const movie = await Movie.findById(id).populate('cast');
        res.status(201).json(movie);
    } catch (error) { 
        next(error);
    }
});


router.delete('/movies/:id', async (req, res, next) => {
    try {
        const {id } = req.params;

        await Movie.findByIdAndDelete(id);
        res.status(204).json('NO CONTENT');
    } catch (error) {
        next(error);
    }
})

router.patch('/movies/:id', async (req, res, next) => {
    try {
        const {id} = req.params;

        const {title, genre, plot, cast} = req.body;
        const up = await Movie.findByIdAndUpdate(id, {title, genre, plot, cast}, {new: true});
        res.status(200).json(up);
    } catch (error){
        next(error);
    }
});

module.exports = router