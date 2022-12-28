const express = require('express');
const router = express.Router();
const { list, detail, actorMovies, create, update, destroy } = require('../../controllers/api/actorsAPIController');

//Rutas
//Listado de todos los actores
router
    .get('/', list)
    //Detalle del actor
    .get('/:id', detail)
    //En que peliculas trabajo el actor con id tal
    .get('/:id/movies', actorMovies)

    //Agregar un actor
    .post('/create', create)
    //Modificar un actor
    .put('/update/:id', update)
    //Eliminar un actor
    .delete('/delete/:id', destroy);

module.exports = router;