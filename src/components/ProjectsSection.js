import React from 'react';
import './ProjectsSection.scss';

function ProjectsSection() {
	return (
		<section className="projects-section" id="projects-section">
			<div className="wrapper">
				<div className="title">Projects</div>
				<div className="project-list">
					<div className="project">
						<img src="" alt="" />
						<div className="info">
							<div className="name">Microsoft Todo Clone</div>
							<ul className="languages">
								<li>React.js</li>
								<li>SCSS</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectsSection;
