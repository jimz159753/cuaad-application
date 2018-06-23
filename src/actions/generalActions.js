export const selectBuilding = (name) => {
	return {
		type: 'SELECT_BUILDING',
		payload: name
	}
}