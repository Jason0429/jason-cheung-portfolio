import React, { useState } from 'react';
import './ProjectsSection.scss';
import projects from '../data/projects';

function ProjectsSection() {
	// Add Github / External Link (Conditional Rendering)
	// Desc
	return (
		<section className="projects-section" id="projects-section">
			{/* <div className="wrapper"> */}
			{/* Section Title */}
			<div className="left">
				<div className="title">Projects</div>
				{/* Projects Grid */}
				<ul className="project-list">
					{projects.map((project) => (
						<li className="project">
							<div className="img-overlay" />
							<img src={project.img} alt="" />

							<div className="info">
								<div className="project-title">{project.title}</div>
								<div className="project-desc">{project.desc}</div>
								<ul className="languages">
									{project.languages.map((language) => <li>{language}</li>)}
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className="right">Image of project goes here</div>
			{/* </div> */}
		</section>
	);
}

export default ProjectsSection;
