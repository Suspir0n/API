const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser({ extended: true }));

//GET
app.get('/', (req, res) => {
    res.status(200).send('Olá Mundo');
})

//POST
app.post('/', (req, res) => {
    res.status(201).send(req.body);
});

//PUT
app.put('/:id', (req, res) => {
    res.status(202).send({
        codigo: req.params.id,
        corpo: req.body
    });
});

//DELETE
app.delete('/:id', (req, res) =>{
    res.status(204).send(req.params.id);
});

//INIT
app.listen(3000, () => {
    console.log('api starting');
});

/*
STATUS CODE:

200 - OK
201 - Created
202 - Accepted
204 - No Content
401 -  Error

POST = 201
GET = 200
PUT = 202
DELETE  = 204
*/