import React from 'react';

const Tabs = ({ items, selected, handleChange }) => {
	return (
		<nav className="-ml-4 mb-8">
			{items.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => handleChange(item)}
						className={`${
							selected === item ? 'bg-gray-800 text-white' : ' text-gray-800'
						} ml-4 px-3 py-2 bg-gray-200 font-medium text-sm leading-5 rounded-md focus:outline-none`}
					>
						{item}
					</button>
				);
			})}
		</nav>
	);
};

export default Tabs;
