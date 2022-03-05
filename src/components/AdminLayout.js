import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ArticleIcon from '@mui/icons-material/Article';
import Link from 'next/link';
import CategoryIcon from '@mui/icons-material/Category';

const menus = [
	{
		name: 'Dashboard',
		icon: <DashboardIcon />,
		path: '/admin',
	},
	{
		name: 'Articles',
		icon: <ArticleIcon />,
		path: '/admin/articles',
	},
	{
		name: 'Categories',
		icon: <CategoryIcon />,
		path: '/admin/categories',
	},
];

export default function AdminLayout({ children }) {
	return (
		<Grid container spacing={8}>
			<Grid item xs={4}>
				<Paper sx={{ minHeight: '50vh', height: '100%' }} elevation={2}>
					<List>
						{menus.map((menu) => (
							<Link href={menu.path} key={Math.random()}>
								<a>
									<ListItem disablePadding>
										<ListItemButton>
											<ListItemIcon>
												{menu.icon}
											</ListItemIcon>
											<ListItemText primary={menu.name} />
										</ListItemButton>
									</ListItem>
								</a>
							</Link>
						))}
					</List>
				</Paper>
			</Grid>
			<Grid item xs={8}>
				<Paper
					sx={{
						padding: 1,
						minHeight: '50vh',
						paddingY: 4,
					}}
					elevation={2}
				>
					{children}
				</Paper>
			</Grid>
		</Grid>
	);
}
