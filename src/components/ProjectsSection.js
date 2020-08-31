import React, { useState } from 'react';
import './ProjectsSection.scss';
import projects from '../data/projects';
import IconGitHub from '../components/icons/github';

function ProjectsSection() {
	// Add Github / External Link (Conditional Rendering)
	// Desc
	return (
		<section className="projects-section" id="projects-section">
			<div className="wrapper">
				<div className="title">Projects</div>
				<div className="projects-list">
					{projects.map((project) => (
						<div className="project">
							<div className="group-row">
								<div className="row">
									{project.icon}
									<a href={project.github} target="_blank" className="github">
										<IconGitHub />
									</a>
								</div>

								<div className="project-title">{project.title}</div>
							</div>

							<div className="project-desc">{project.desc}</div>
							<div className="languages">
								{project.languages.map((language) => <div className="language">{language}</div>)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProjectsSection;
