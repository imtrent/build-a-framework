import React, { useState, useMemo, useCallback, useContext } from 'react';
import { Context } from './../store';
import { shadePalette } from './../utils/shadeColor';

const Color = ({ data, deleteColor }) => {
	const [state, dispatch] = useContext(Context);

	const handleChange = (evt) => {
		let text = evt.target.value.toLowerCase();
		text = text.replace(/ /g, '-');
		dispatch({ type: 'EDIT_COLOR', payload: {...data, paletteName: text} });
	};

	const computeColors = useCallback((hex) => {
		return shadePalette(hex);
	}, []);

	const shades = useMemo(() => computeColors(data.hex), [computeColors, data.hex]);

	return (
		<div>
			<input className="w-full focus:outline-none" onChange={handleChange} value={data.paletteName} />
			<div className="relative rounded-lg shadow-md border border-gray-300">
				<div
					onClick={() => deleteColor(data.id)}
					className="absolute p-1 rounded-br-md rounded-tl-sm cursor-pointer right-0 bottom-0 bg-red-500 hover:bg-red-600 transition ease-in duration-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
					</svg>
				</div>
				{shades &&
					shades.map((shade, index) => (
						<div
							key={index}
							className={`h-10 flex items-center justify-center ${index === 0 ? 'rounded-t-lg' : ''} ${
								index === shades.length - 1 ? 'rounded-b-lg' : ''
							}`}
							style={{ backgroundColor: '#' + shade }}
						>
							<p>#{shade}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default Color;
