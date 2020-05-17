import React from 'react';

const Sizing = () => {
	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold text-gray-900">Sizing</h2>
			</div>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
			</div>
		</div>
	);
};

export default Sizing;
