import React from 'react';

const Layout = ({ children }) => (
	<div>
		<div className="bg-orange-500 pb-64">
			<header className="py-10">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl leading-9 font-extrabold text-white">Build a Framework</h1>
						<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded">
							Export
						</button>
					</div>
				</div>
			</header>
		</div>

		<main className="-mt-64">
			<div className="max-w-screen-xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
					<div className="rounded-lg h-96">{children}</div>
				</div>
			</div>
		</main>
	</div>
);

export default Layout;
