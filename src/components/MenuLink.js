import Box from '@mui/material/Box';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { fuc } from '../functions/utilities';
import MenuList from '@mui/material/MenuList';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledListItem = styled(ListItem)(({ theme, define }) => ({
	[`& .${define}`]: {
		display: 'none',
	},
	[`&:hover .${define}`]: {
		display: 'block',
	},
}));

export default function MenuLink({ pages }) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<List sx={{ display: { xs: 'none', md: 'flex' } }}>
				{pages.map((page) => (
					<StyledListItem
						key={Math.random()}
						disablePadding
						sx={{ position: 'relative' }}
						define={page.name}
					>
						<ListItemButton>
							<ListItemIcon
								sx={{
									minWidth: 'auto',
									mr: 0.75,
									color: 'inherit',
								}}
							>
								{page.icon}
							</ListItemIcon>
							<ListItemText
								primary={
									page.menus ? (
										fuc(page.name)
									) : (
										<Link href={page.path}>
											<a>{fuc(page.name)}</a>
										</Link>
									)
								}
							/>
						</ListItemButton>
						{page.menus && (
							<MenuList
								sx={{
									position: 'absolute',
									top: (theme) => theme.spacing(6),
									right: 0,
									backgroundColor: (theme) =>
										theme.palette.background.paper,
									backgroundImage:
										'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
								}}
								className={page.name}
							>
								{page.menus.map((menu) => (
									<MenuItem key={Math.random()}>
										<ListItemIcon>{menu.icon}</ListItemIcon>
										<ListItemText
											primary={
												<Link href={menu.path}>
													<a>
														<Typography color="text.primary">
															{menu.name}
														</Typography>
													</a>
												</Link>
											}
										/>
									</MenuItem>
								))}
							</MenuList>
						)}
					</StyledListItem>
				))}
			</List>
		</Box>
	);
}
