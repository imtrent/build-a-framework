import React, { useState } from 'react';
import Layout from './components/Layout';
import Tabs from './components/Tabs';
import Colors from './components/Colors';

function App() {
	const [selectedTab, setSelectedTab] = useState('Colors');
	return (
		<Layout>
			<div className="flex justify-between">
				<Tabs
					items={['Colors', 'Tab 2', 'Tab 3', 'Tab 4']}
					selected={selectedTab}
					handleChange={(tabname) => setSelectedTab(tabname)}
				/>
			</div>
			<div>{selectedTab === 'Colors' && <Colors />}</div>
		</Layout>
	);
}

export default App;
