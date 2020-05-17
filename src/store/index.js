import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import uuid from './../utils/uuid';
import randomColor from './../utils/randomColor';

const initialState = {
	colors: [
		{ id: uuid(), hex: '876ECC', paletteName: 'palette-name' },
		{ id: uuid(), hex: '8D9196', paletteName: 'palette-name' },
		{ id: uuid(), hex: '737373', paletteName: 'palette-name' }
	]
};

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);
export default Store;
