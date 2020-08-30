import React from 'react';
import './IntroSection.scss';

function IntroSection() {
	return (
		<section className="intro-section" id="intro-section">
			<div className="wrapper">
				<div className="text-wrapper">
					<div className="hello">Hi, my name is</div>
					<div className="name">Jason Cheung</div>
					<div className="occupation">I learn stuff. I make stuff. </div>

					<a href="mailto:jasoncheung0429@gmail.com" className="say-hi-btn">
						Say Hi
					</a>
				</div>
			</div>
		</section>
	);
}

export default IntroSection;
