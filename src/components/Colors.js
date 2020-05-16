import React, { useState, useRef, useContext } from 'react';
import { Context } from './../store';
import uuid from './../utils/uuid';
import Color from './Color';
import Popup from './Popup';

const Colors = () => {
	const [state, dispatch] = useContext(Context);
	const popupEl = useRef(null);

	const handleDeleteColor = (color) => {
		console.log('queued color', color);
		popupEl.current.showPopup(color);
	};

	const deleteColor = (color) => {
		console.log('deleted color', color);
		dispatch({ type: 'REMOVE_COLOR', payload: color });
	};

	return (
		<div>
			<Popup ref={popupEl} handleConfirm={deleteColor} />
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-semibold text-gray-900">Colors</h2>
				<button
					onClick={() => dispatch({ type: 'ADD_COLOR' })}
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
				>
					Add Color
				</button>
			</div>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
				{state.colors.map((color, index) => (
					<Color key={color.id} data={color} deleteColor={handleDeleteColor} />
				))}
			</div>
		</div>
	);
};

export default Colors;
