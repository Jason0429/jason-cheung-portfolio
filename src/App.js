import React from 'react';
import Navbar from './components/Navbar';
import './components/Navbar.scss';
import ProjectsSection from './components/ProjectsSection';
import SocialMediaBar from './components/SocialMediaBar';
import ContactBar from './components/ContactBar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import './App.scss';

function App() {
	function toggleMenu() {
		document.querySelector('.hamburger').classList.toggle('active');

		document.querySelector('.social-media-bar').classList.toggle('active');
	}

	// window.addEventListener('resize', () => {
	// 	console.log(window.innerWidth);
	// });
	return (
		<div>
			<Navbar toggleMenu={toggleMenu} />
			<IntroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
			<SocialMediaBar />
			{/* <ContactBar /> */}
		</div>
	);
}

export default App;
