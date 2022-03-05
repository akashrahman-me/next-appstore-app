import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import sitemap from '../data/index.json';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
	// display: 'none',
}));

export default function BoxLists({ gridProps, datam }) {
	return (
		<List>
			<Grid container spacing={2}>
				{datam.map((data) => (
					<Grid item {...gridProps} key={Math.random()}>
						<StyledListItem
							disablePadding={Boolean(!data.description)}
						>
							<ListItemAvatar
								sx={{ marginRight: 1, minWidth: 0 }}
							>
								<Link href={`${data.path}`}>
									<a>
										<Avatar
											variant="square"
											src={
												data.icon
													? `${sitemap.backend.homepath}upload/${data.icon}`
													: null
											}
											sx={{
												width: {
													xs: data.excerpt
														? '40px'
														: '24px',
													md: data.excerpt
														? '60px'
														: '24px',
												},
												height: {
													xs: data.excerpt
														? '40px'
														: '24px',
													md: data.excerpt
														? '60px'
														: '24px',
												},
											}}
										/>
									</a>
								</Link>
							</ListItemAvatar>
							<ListItemText
								primary={
									<Link href={`${data.path}`}>
										<a>
											<Typography noWrap>
												{data.title}
											</Typography>
										</a>
									</Link>
								}
								secondary={
									data.excerpt && (
										<Typography
											color="inherit"
											variant="body2"
											sx={{
												WebkitLineClamp: '2',
												WebkitBoxOrient: 'vertical',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												display: ' -webkit-box',
											}}
										>
											{data.excerpt}
										</Typography>
									)
								}
							/>
						</StyledListItem>
						{data.excerpt && <Divider component="li" />}
					</Grid>
				))}
			</Grid>
		</List>
	);
}
