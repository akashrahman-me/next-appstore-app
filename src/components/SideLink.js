import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { listingData, fuc } from '../functions/utilities';
import Drawer from '@mui/material/Drawer';

export default function SideLink({ pages }) {
	const [drawer, setDrawer] = useState(false);
	const handleDrawer = () => setDrawer((v) => !v);

	return (
		<Box sx={{ display: { xs: 'block', md: 'none' } }}>
			<IconButton
				color="inherit"
				onClick={handleDrawer}
				sx={{ marginRight: 1 }}
			>
				<MenuIcon fontSize="large" />
			</IconButton>
			<Drawer open={Boolean(drawer)} anchor="left" onClose={handleDrawer}>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<ListItem disablePadding>
						<IconButton
							color="inherit"
							sx={{ ml: 'auto', mr: 1 }}
							onClick={handleDrawer}
						>
							<CloseIcon />
						</IconButton>
					</ListItem>
					<Divider component="li" sx={{ my: 1 }} />
					{listingData(pages, 'menus').map((page) => (
						<ListItem disablePadding key={Math.random()}>
							<ListItemButton>
								<ListItemIcon color="inherit">
									{page.icon}
								</ListItemIcon>
								<ListItemText primary={fuc(page.name)} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
