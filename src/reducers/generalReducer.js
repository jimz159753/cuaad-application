var initialState = {
	name: 'casa-farah',
	lat: 0,
	lon: 0
}

export default (state = initialState , action) => {
	switch(action.type){
		case 'SELECT_BUILDING':
			return Object.assign({}, state, action.payload);
		default:
			return state;	
	}
}