import React, { useState } from 'react';
import experiences from '../data/experiences';
import './ExperienceSection.scss';
import DownArrow from './icons/downArrow';

function ExperienceSection() {
	var clicks = 0;

	const [ currentTab, setCurrentTab ] = useState({
		...experiences[0]
	});

	function changeCard(e) {
		let tab = e.target;

		// If same first tab is clicked
		if (tab.id === currentTab.id && clicks === 0) return;
		else clicks++;

		// Change card info
		experiences.forEach((exp) => {
			if (exp.id === tab.getAttribute('id')) {
				return setCurrentTab((prevTab) => {
					if (prevTab.id === exp.id) return;
					return {
						title: exp.title,
						displayTitle: exp.displayTitle,
						duration: exp.duration,
						desc: exp.desc,
						id: exp.id,
						img: exp.img
					};
				});
			}
		});

		let tabIndicator = document.querySelector('.tab-indicator');
		let activeTabs = document.querySelector('.tab.active');
		let allTabs = document.querySelectorAll('.tab');

		// removes active class
		activeTabs.classList.remove('active');
		// adds class to selected tab
		tab.classList.add('active');

		// Tab Indicator Animation
		for (var i = 0; i < allTabs.length; i++) {
			if (allTabs[i].classList.contains('active')) {
				// tabIndicator.style.top = `calc(calc(100%/${experiences.length})*${i})`;
				let distance = 50 * i;
				tabIndicator.style.top = distance + 'px';
			}
		}
	}

	return (
		<section className="experience-section" id="experience-section">
			<div className="wrapper">
				<div className="title">Experience</div>
				<div className="inner-wrapper">
					<ul className="tab-slider">
						<div className="tab-indicator" style={{ height: `calc(100%/${experiences.length})` }} />
						{experiences.map((exp) => (
							<div>
								<li
									className={exp.id === currentTab.id ? 'tab active' : 'tab'}
									id={exp.id}
									onClick={changeCard}>
									{exp.displayTitle}
									{DownArrow}
								</li>
								<div className="info">
									<div className="card">
										{/* <div className="info-title">{currentTab.title}</div> */}
										<div className="duration">{currentTab.duration}</div>
										<div className="desc">{currentTab.desc}</div>
									</div>
								</div>
							</div>
						))}
					</ul>
					<div className="info">
						<div className="card">
							<div className="info-title">{currentTab.title}</div>
							<div className="duration">{currentTab.duration}</div>
							<div className="desc">{currentTab.desc}</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="right">
				<img src={currentTab.img} alt={currentTab.title} />
			</div> */}
		</section>
	);
}

export default ExperienceSection;
