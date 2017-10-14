function allowCrossOrigin( request, response, next ) {
	response.header( 'Access-Control-Allow-Origin', '*' );
	response.header( 'Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE' );
	response.header( 'Access-Control-Allow-Headers',
		'Origin, X-Requested-with, Content-Type, Accept, Api-Token' );

	next();
}

module.exports = allowCrossOrigin;