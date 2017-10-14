const preloadedPolls = require( './../data/polls' );
const _ = require( 'lodash' );

// Singleton
let instance = null;

class PollsDummyService {
	constructor() {
		if ( ! instance ) this.init();
		return instance;
	}

	init() {
		instance = this;
		this.polls = preloadedPolls;
	}

	save( poll ) {
		this.polls.push( poll );
	}

	getAll() {
		return this.polls;
	}

	getById( id ) {
		const poll = _.find( this.polls, { id: parseInt( id, 10 ) } );
		return poll ? poll : false;
	}
}

module.exports = new PollsDummyService();