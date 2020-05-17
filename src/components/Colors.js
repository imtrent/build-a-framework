import React, { useRef, useContext } from 'react';
import { Context } from './../store';
import Color from './Color';
import Popup from './Popup';

const Colors = () => {
	const [state, dispatch] = useContext(Context);
	const popupEl = useRef(null);

	const handleDeleteColor = (color) => {
		popupEl.current.showPopup(color);
	};

	const deleteColor = (color) => {
		dispatch({ type: 'REMOVE_COLOR', payload: color });
	};

	return (
		<div>
			<Popup ref={popupEl} handleConfirm={deleteColor} />
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold text-gray-800">Colors</h2>
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
				{state.colors.length === 0 && (
					<div className="border-4 col-span-3 border-dashed py-24 flex justify-center border-gray-200 rounded-lg">
						<p className="text-xl text-gray-800">You currently have no colors!</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Colors;
