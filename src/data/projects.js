import { uuid } from 'uuidv4';
import React from 'react';
import List from '../components/icons/list';
import Oyster from '../components/icons/oyster';
import Crosshair from '../components/icons/crosshair';
import Battleship from '../components/icons/battleship';
import Medicine from '../components/icons/medicine';
import Music from '../components/icons/music';
import IconExternal from '../components/icons/external';
import Heart from '../components/icons/heart';
import File from '../components/icons/file';
import ShoppingCart from '../components/icons/shoppingCart';
import Message from '../components/icons/message';
import People from '../components/icons/people';
import Pen from '../components/icons/pen';
import Move from '../components/icons/move';

const projects = [
	{
		title: 'Jaysian',
		desc:
			'An informative website and online store to highlight the beauty in Chinese communities, raise money for Asian associations, and reduce stigma during this difficult time.',
		icon: Heart,
		link: 'https://jaysian.com',
		languages: [ 'React.js', 'JQuery' ],
		github: false
	},
	{
		title: 'Amazon Clone',
		desc:
			'Amazon clone consisting of a fully functioning payment system using Stripe. Thanks to: cleverprogrammer.com',
		icon: <ShoppingCart />,
		link: 'https://github.com/Jason0429/amazon-clone',
		languages: [ 'React.js', 'Redux', 'Firebase', 'Stripe' ],
		github: true
	},
	{
		title: 'WhatsApp Clone',
		desc:
			'Basic front-end layout of web WhatsApp combined with real-time messaging updates. Thanks to: cleverprogrammer.com',
		icon: <Message />,
		link: 'https://github.com/Jason0429/whatsapp-clone',
		languages: [ 'React.js', 'SCSS', 'Node.js', 'MongoDB', 'Express.js' ],
		github: true
	},
	{
		title: 'Microsoft To-do Clone',
		desc: "A web clone of Microsoft's To-Do List application.",
		icon: <List />,
		link: 'https://github.com/Jason0429/microsoft-todo-clone',
		languages: [ 'React.js', 'SCSS' ],
		github: true
	},
	{
		title: 'Billion Oyster Project',
		desc: "Beginner Data Science project analyzing real datasets from New York's Billion Oyster Project.",
		icon: <Oyster />,
		link: 'https://github.com/Jason0429/billion-oyster-project',
		languages: [ 'Python', 'Numpy', 'Pandas', 'Matplotlib' ],
		github: true
	},
	{
		title: 'DownToDash Website',
		desc:
			"Updated appearance to DownToDash's company website. Including: Navbar, Header, Team, and Services sections.",
		icon: <People />,
		link: 'http://beta.downtodash.com',
		languages: [ 'Wordpress', 'WPBakery' ],
		github: false
	},
	{
		title: 'Artful Skin',
		desc:
			"High-fidelity prototype for America On Tech's UX Design Bootcamp. Social media app for tattoo artists to connect with others, share their artwork, and promote their business.",
		icon: <Pen />,
		link: 'https://invis.io/3QYFQI4VWPM',
		languages: [ 'Figma', 'Whimsical', 'inVision' ],
		github: false
	},
	// {
	// 	title: 'Minecraft Name Sniper',
	// 	desc: '',
	// 	icon: Crosshair,
	// 	link: '',
	// 	languages: [ 'Python' ]
	// },
	{
		title: 'Battleship',
		desc: 'A minimalist black-white game of battleship',
		icon: <Battleship />,
		link: '',
		languages: [ 'HTML', 'CSS', 'JavaScript' ],
		github: true
	},
	{
		title: 'Human Diagnostic Tool',
		desc: 'Keeps record of health problems in different areas of the body.',
		icon: Medicine,
		link: '',
		languages: [ 'HTML', 'CSS', 'JavaScript' ],
		github: true
	},
	{
		title: 'TransitHub',
		desc: "Final project at America On Tech's TECH360 program. Sample client website for a transportation company",
		icon: <Move />,
		link: '',
		languages: [ 'HTML', 'CSS', 'Bootstrap' ],
		github: false
	}
];

export default projects;
