import uuid from './../utils/uuid';
import randomColor from './../utils/randomColor';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLOR':
			return {
				...state,
				colors: [...state.colors, { id: uuid(), hex: randomColor(), paletteName: 'brand-new-color' }]
			};
		case 'EDIT_COLOR':
			return {
				...state,
				colors: [
					...state.colors.map((color) => {
						if (color.id === action.payload.id) return { ...color, ...action.payload };
						else return color;
					})
				]
			};
		case 'REMOVE_COLOR':
			return {
				...state,
				colors: state.colors.filter((color) => color.id !== action.payload)
			};
		default:
			return state;
	}
};

export default reducer;
