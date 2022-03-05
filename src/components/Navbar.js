import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SearchField from './SearchField';
import SideLink from './SideLink';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import MenuLink from './MenuLink';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import TopicIcon from '@mui/icons-material/Topic';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ExploreIcon from '@mui/icons-material/Explore';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
	{ name: 'games', path: '/', icon: <SportsEsportsIcon /> },
	{ name: 'apps', path: '/', icon: <AppsIcon /> },
	{
		name: 'topics',
		path: '/',
		icon: <TopicIcon />,
		menus: [
			{
				name: 'Discovar App',
				path: '/',
				icon: <ExploreIcon />,
			},
			{ name: 'Editor Choice', path: '/', icon: <AdbIcon /> },
		],
	},
	{
		name: 'products',
		path: '/',
		icon: <ProductionQuantityLimitsIcon />,
		menus: [
			{
				name: 'URL Shortener',
				path: '/',
				icon: <ExploreIcon />,
			},
			{
				name: 'Regular Expression',
				path: '/',
				icon: <AdbIcon />,
			},
		],
	},
];

export default function Navbar() {
	return (
		<AppBar position="static">
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<SideLink pages={pages} />
					<Logo preview={{ xs: 'none', md: 'block' }} />
					<SearchField />
					<Logo preview={{ xs: 'block', md: 'none' }} />

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					/>

					<MenuLink pages={pages} />
					<ThemeToggle />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
