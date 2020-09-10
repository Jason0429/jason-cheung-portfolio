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
import $ from 'jquery';
import './App.scss';

function App() {
	function toggleMenu() {
		const $hamburger = $('.hamburger');
		const $navbar = $('nav');
		const $asideMenu = $('.aside-menu');

		$hamburger.toggleClass('active');
		$asideMenu.toggleClass('active');
		$navbar.toggleClass('active');
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
			<AsideMenu toggleMenu={toggleMenu} />
			{/* <ContactBar /> */}
		</div>
	);
}

export default App;
