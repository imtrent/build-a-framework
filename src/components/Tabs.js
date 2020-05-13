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
							selected === item
								? 'text-gray-800 bg-gray-400'
								: 'text-gray-600 hover:text-gray-800 focus:text-gray-800'
						} ml-4 px-3 py-2 bg-gray-300 font-medium text-sm leading-5 rounded-md focus:outline-none`}
					>
						{item}
					</button>
				);
			})}
		</nav>
	);
};

export default Tabs;
