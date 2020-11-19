//Conexion a la Base de Datos
const mongoose = require('mongoose');
const db = process.env.DB; //Uri de mongo

mongoose.set('useFindAndModify', false);
module.exports = mongoose.connect(db,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    });