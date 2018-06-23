/*var initialState = {
	name: ''
}*/

export default (state = 0 , action) => {
	switch(action.type){
		case 'SELECT_BUILDING':
			return action.payload;
		default:
			return state;	
	}
}