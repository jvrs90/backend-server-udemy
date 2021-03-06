// Requires
var express = require('express');
var mongoose = require( 'mongoose');
var bodyParser = require('body-parser');





// Inicializar variables
var app = express();


//Body Parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes = require('./routes/hospital');
var medicoRoutes = require('./routes/medico');
var busquedaRoutes = require('./routes/busqueda');
var uploadRouter = require('./routes/upload');
var imagenesRoutes = require('./routes/imagenes');




// Rutas
app.use( '/usuario', usuarioRoutes );
app.use( '/hospital', hospitalRoutes );
app.use( '/medico', medicoRoutes );
app.use( '/buscar', busquedaRoutes );
app.use( '/upload', uploadRouter );
app.use( '/login', loginRoutes );
app.use( '/img', imagenesRoutes );


app.use( '/', appRoutes );



// Conexion a la Base de Datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if(err) throw err;


    console.log('Base de datos: \x1b[32m%s\x1b[0m','online');
})


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m','online');
});