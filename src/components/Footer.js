import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import BoxLists from './BoxLists';
import Logo from './Logo';
import FooterElement from './FooterElement';
import SocialIcons from './SocialIcons';
import Box from '@mui/material/Box';
import useFetch from 'react-fetch-hook';
import sitemap from '../data/index.json';

const services = [
	{
		title: 'Contact Us',
		path: '/contact-us',
	},
	{
		title: 'Privacy Policy',
		path: '/privacy',
	},
	{
		title: 'Trems & Conditions',
		path: '/terms',
	},
];

export default function Footer() {
	const popularPosts = useFetch(
		`${sitemap.backend.homepath}select.rows.php?table=articles&fields=icon,title,path&orderby=visitor`
	);

	return (
		<FooterElement>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid
						item
						lg={4}
						sm={6}
						xs={12}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'column',
							textAlign: { xs: 'center', md: 'left' },
						}}
					>
						<Stack spacing={1}>
							<Logo footer />
							<Typography
								variant="body2"
								component="span"
								display="block"
							>
								Download apk for Android with APKPure APK
								downloader. NoAds, Faster apk downloads and apk
								file update speed. Best of all, it's free.
							</Typography>
						</Stack>
						<SocialIcons />
					</Grid>
					<Grid
						item
						lg={3}
						sm={6}
						xs={12}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'column',
							alignItems: { xs: 'center', md: 'flex-start' },
						}}
					>
						<Stack
							spacing={1}
							sx={{ display: { xs: 'none', md: 'flex' } }}
						>
							<Typography
								variant="h6"
								component="span"
								sx={{ textTransform: 'uppercase' }}
							>
								Customar Service
							</Typography>
							<List>
								{services.map((service) => (
									<ListItem
										disablePadding
										key={Math.random()}
									>
										<ListItemIcon
											sx={{
												minWidth: 'auto',
												color: 'inherit',
												marginRight: 1,
											}}
										>
											<StarIcon sx={{ fontSize: 16 }} />
										</ListItemIcon>
										<ListItemText
											primary={
												<Link href={service.path}>
													<a>{service.title}</a>
												</Link>
											}
										/>
									</ListItem>
								))}
							</List>
						</Stack>

						<Typography
							variant="body2"
							component="span"
							display="block"
							marginBottom={1}
							textAlign="center"
						>
							&copy; {new Date().getFullYear()} Softbiz All rights
							reserved.
							<Box sx={{ display: { xs: 'block', md: 'none' } }}>
								{services.map((service, i) => (
									<Link
										key={Math.random()}
										href={service.path}
									>
										<a>
											{service.title}
											{services.length - 1 !== i && ' | '}
										</a>
									</Link>
								))}
							</Box>
						</Typography>
					</Grid>
					<Grid
						item
						lg={5}
						sm={12}
						xs={12}
						sx={{ display: { xs: 'none', md: ' block' } }}
					>
						<Stack spacing={1}>
							<Typography
								variant="h6"
								component="span"
								sx={{ textTransform: 'uppercase' }}
							>
								Popular Application
							</Typography>
							{!popularPosts.isLoading && !popularPosts.error && (
								<BoxLists
									gridProps={{ xs: 12, sm: 6 }}
									datam={popularPosts.data}
								/>
							)}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</FooterElement>
	);
}
