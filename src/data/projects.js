import { uuid } from 'uuidv4';
import React from 'react';
import List from '../components/icons/list';
import Oyster from '../components/icons/oyster';
import Crosshair from '../components/icons/crosshair';
import Battleship from '../components/icons/battleship';
import Medicine from '../components/icons/medicine';
import Music from '../components/icons/music';

const projects = [
	{
		title: 'Microsoft To-do Clone',
		desc: "A web clone of Microsoft's To-Do List application",
		icon: List,
		github: '',
		languages: [ 'React.js', 'SCSS' ]
	},
	{
		title: 'Billion Oyster Project',
		desc: '',
		icon: Oyster,
		github: '',
		languages: [ 'Python', 'Numpy', 'Pandas', 'Matplotlib' ]
	},
	{
		title: 'Minecraft Name Sniper',
		desc: '',
		icon: Crosshair,
		github: '',
		languages: [ 'Python', 'Web Scraping' ]
	},
	{
		title: 'Some ML Project',
		desc: '',
		icon: Music,
		github: '',
		languages: [ 'Python' ]
	},
	{
		title: 'Battleship',
		desc: '',
		icon: Battleship,
		github: '',
		languages: [ 'HTML', 'CSS', 'JavaScript' ]
	},
	{
		title: 'Human Diagnostic Tool',
		desc: '',
		icon: Medicine,
		github: '',
		languages: [ 'HTML', 'CSS', 'JavaScript' ]
	}
];

export default projects;
