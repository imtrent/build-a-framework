import React, { useState, useMemo, useCallback } from 'react';
import randomColor from './../utils/randomColor';

const Color = ({ uuid, deleteColor }) => {
	const [name, setName] = useState('');
	const [colors, setColors] = useState({
		one: '804020',
		two: '141041',
		three: '574200',
		four: 'f84afi3',
		five: 'abpde92',
		six: 'jug857',
		seven: 'ak4i49',
		eight: '084jdk',
		nine: 'abc84k'
	});

	const handleChange = (evt) => {
		let text = evt.target.value.toLowerCase();
		text = text.replace(/ /g, '-');
		setName(text);
	};

	return (
		<div>
			<input className="w-full bg-gray-100 focus:outline-none" onChange={handleChange} value={name} />
			<div className="relative rounded-lg border border-gray-500">
				<div
					onClick={() => deleteColor(uuid)}
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
				<div className="h-10 bg-gray-900 flex items-center justify-center rounded-t-lg">
					<p>{colors.one}</p>
				</div>
				<div className="h-10 bg-gray-800 flex items-center justify-center">
					<p>{colors.two}</p>
				</div>
				<div className="h-10 bg-gray-700 flex items-center justify-center">
					<p>{colors.three}</p>
				</div>
				<div className="h-10 bg-gray-600 flex items-center justify-center">
					<p>{colors.four}</p>
				</div>
				<div className="h-10 bg-gray-500 flex items-center justify-center">
					<p>{colors.five}</p>
				</div>
				<div className="h-10 bg-gray-400 flex items-center justify-center">
					<p>{colors.six}</p>
				</div>
				<div className="h-10 bg-gray-300 flex items-center justify-center">
					<p>{colors.seven}</p>
				</div>
				<div className="h-10 bg-gray-200 flex items-center justify-center">
					<p>{colors.eight}</p>
				</div>
				<div className="h-10 bg-gray-100 flex items-center justify-center rounded-b-lg">
					<p>{colors.nine}</p>
				</div>
			</div>
		</div>
	);
};

export default Color;
