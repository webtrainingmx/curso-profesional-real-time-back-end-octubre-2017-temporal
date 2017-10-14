const pollsRouter = require( 'express' ).Router();
const pollsService = require( './../api/services/polls-dummy.service' );

pollsRouter.get( '/', ( request, response ) => {
	response.json( pollsService.getAll() );
} );


pollsRouter.param( 'id', ( request, response, next, id ) => {
	console.log( "ID recibido:", id );
	const idToFind = + id;
	const poll = pollsService.getById( idToFind );

	if ( poll ) {
		request.poll = poll;
		next();
	}
	else {
		response.json( { "error": "ID not found" } );
	}
} );

pollsRouter.get( '/:id', ( request, response ) => {
	const poll = request.poll;
	response.json( poll || { "error": "Poll not found" } );
} );



module.exports = pollsRouter;