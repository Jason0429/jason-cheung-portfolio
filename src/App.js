import React from 'react';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SocialMediaBar from './components/SocialMediaBar';
import ContactBar from './components/ContactBar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
	return (
		<div>
			<Navbar />
			<IntroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
			<SocialMediaBar />
			<ContactBar />
		</div>
	);
}

export default App;
