import React from 'react';
import image from './../img/tile.png';

const Layout = ({ children }) => (
	<div>
		<div className="bg-purple-800 pb-64" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}>
			<header className="py-10">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div>
						<h1 className="flex items-center mb-2 text-3xl leading-9 font-extrabold text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								stroke-width="1.5"
								className="mr-2"
							>
								<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
								<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
								<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
								<line x1="12" y1="22.08" x2="12" y2="12"></line>
							</svg>
							Build a Framework
						</h1>
						<p className="text-white">
							Create a utility-first micro CSS framework and export the bits and pieces that you only need.
						</p>
					</div>
				</div>
			</header>
		</div>

		<main className="-mt-64">
			<div className="max-w-screen-xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
				<div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
					<div className="rounded-lg h-96">{children}</div>
				</div>
				<div className="flex items-center justify-between mt-6">
					<p>Built by <a className="text-purple-800" href="https://iantrent.com" target="_blank" rel="noopener noreferrer">Ian Trent</a></p>
					<a className="text-purple-800" href="https://github.com/imtrent/build-a-framework" target="_blank" rel="noopener noreferrer">Repository</a>
				</div>
			</div>
		</main>
	</div>
);

export default Layout;
