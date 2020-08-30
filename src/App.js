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
import AsideMenu from './components/AsideMenu';
import './App.scss';

function App() {
	function toggleMenu() {
		const hamburger = document.querySelector('.hamburger');
		// const socialMediaBar = document.querySelector('.social-media-bar');
		const asideMenu = document.querySelector('.aside-menu');

		hamburger.classList.toggle('active');
		asideMenu.classList.toggle('active');
	}

	return (
		<div>
			<Navbar toggleMenu={toggleMenu} />
			<IntroSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
			<SocialMediaBar />
			<AsideMenu />
			{/* <ContactBar /> */}
		</div>
	);
}

export default App;
