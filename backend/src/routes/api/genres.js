const express = require('express');
const router = express.Router();
const {list, detail, genreMovies} = require('../../controllers/api/genresAPIController');

//Rutas
//Listado de todos los generos
router
.get('/', list)
//Detalle del genero
.get('/:id', detail)
//Películas por genero
.get('/:id/movies', genreMovies);

module.exports = router;