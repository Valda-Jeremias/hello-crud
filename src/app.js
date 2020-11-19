require('dotenv').config(); //No lo necesitan, pero para mi es mas facil
//Esta es la app finalizada, no tiene pruebas locales, es todo prueba error desde heroku, si quieren no utilizen DOTENV
//El archivo no esta porque esta ignorado
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./database/mongoose.js');
    
    //Conexion a la DB
    db.then(() => console.log('DB Connected'));
    //Se crea la App
    const app = express();

    //Usos de la app
    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'));

    //Rutas
    app.use('/api', require('./api/routes/note'));
    
    // Error 404 not found
    app.use((req, res, next) => {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    });

    // Errores distintos a 404
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json({ error: err.message });
    });

    //Alojamiento
    app.listen(process.env.PORT, () => {
        console.log("Servidor alojado en el puerto " + process.env.PORT)
        console.log("ANTI COPY&PASTE");
    });




