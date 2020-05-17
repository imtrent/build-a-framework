import React, { useState } from 'react';
import Layout from './components/Layout';
import Tabs from './components/Tabs';
import Colors from './components/Colors';
import Sizing from './components/Sizing';

function App() {
	const [selectedTab, setSelectedTab] = useState('Colors');
	return (
		<Layout>
			<div className="flex justify-between">
				<Tabs
					items={['Colors', 'Sizing', 'Layout', 'Tab 4']}
					selected={selectedTab}
					handleChange={(tabname) => setSelectedTab(tabname)}
				/>
			</div>
			<React.Fragment>{selectedTab === 'Colors' && <Colors />}</React.Fragment>
			<React.Fragment>{selectedTab === 'Sizing' && <Sizing />}</React.Fragment>
		</Layout>
	);
}

export default App;
