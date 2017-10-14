const express = require( 'express' );
const app = express();
const path = require( 'path' );
const server = require( 'http' ).createServer( app );
const pollsRouter = require( './routers/polls-router' );
const allowCrossOrigin = require( './api/middlewares/cors.middleware' );

const morgan = require( 'morgan' );
const bodyParser = require( 'body-parser' );
const port = 3300;

app.use( morgan( 'dev' ) );

app.use( allowCrossOrigin );

app.get( '/', ( request, response ) => {
	response.sendFile( path.join( __dirname, 'index.html' ) );
} );

app.use( '/api/v1/polls', pollsRouter );

server.listen( port, () => {
	console.log( 'Servidor ejecutándose en puerto: ', port );
} );