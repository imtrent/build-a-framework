import React, { useState, useRef } from 'react';
import uuid from './../utils/uuid';
import Color from './Color';
import Popup from './Popup';

const Colors = () => {
	const [colorCount, setColorCount] = useState([uuid(), uuid(), uuid()]);
	const popupEl = useRef(null);

	const handleDeleteColor = (color) => {
		console.log('queued color', color);
		popupEl.current.showPopup(color);
	};

	const deleteColor = (color) => {
		console.log('deleted color', color);
		setColorCount(colorCount.filter((el) => el !== color));
	};

	return (
		<div>
			<Popup ref={popupEl} handleConfirm={deleteColor} />
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-semibold text-gray-900">Colors</h2>
				<button
					onClick={() => setColorCount([...colorCount, uuid()])}
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded"
				>
					Add Color
				</button>
			</div>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
				{colorCount.map((color, index) => (
					<Color key={color} uuid={color} deleteColor={handleDeleteColor} />
				))}
			</div>
		</div>
	);
};

export default Colors;
