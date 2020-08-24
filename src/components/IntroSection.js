import React from 'react';
import './IntroSection.css';

function IntroSection() {
	return (
		<section className="intro-section">
			<div className="text-wrapper">
				<div className="hello">Hi, my name is</div>
				<div className="name">Jason Cheung</div>
				<div className="occupation">I learn. I build. {/* &lt; / &gt;*/} </div>

				<a href="mailto:jasoncheung0429@gmail.com" className="say-hi-btn">
					Say Hi
				</a>
			</div>
		</section>
	);
}

export default IntroSection;
