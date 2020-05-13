import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Colors from './components/Colors';

function App() {
	const [selectedTab, setSelectedTab] = useState('Colors');
	return (
		<div className="container mx-auto my-8 px-8">
			<h1 className="text-2xl font-semibold text-gray-900 mb-8">Build a Framework</h1>
			<div className="flex justify-between">
				<Tabs
					items={['Colors', 'Tab 2', 'Tab 3', 'Tab 4']}
					selected={selectedTab}
					handleChange={(tabname) => setSelectedTab(tabname)}
				/>
			</div>
			<div>{selectedTab === 'Colors' && <Colors />}</div>
		</div>
	);
}

export default App;
