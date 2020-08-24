import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import SocialMediaBar from './components/SocialMediaBar';
import ContactBar from './components/ContactBar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';

import './App.css';

function App() {
	return (
		<div>
			<Navbar />
			<IntroSection />
			<AboutSection />
			<Projects />

			<SocialMediaBar />
			<ContactBar />
		</div>
	);
}

export default App;
