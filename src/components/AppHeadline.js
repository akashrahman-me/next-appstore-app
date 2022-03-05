import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import sitemap from '../data/index.json';
import BlankField from './BlankField';

export default function AppHeadline({ data }) {
	return (
		<Paper elevation={4} sx={{ p: 1.5 }}>
			<Stack
				spacing={2}
				direction="row"
				sx={{
					display: { xs: 'grid', md: 'flex' },
					gridTemplateColumns: '90px auto',
				}}
			>
				<Box
					sx={{
						width: { xs: 90, md: 170 },
						height: { xs: 90, md: 170 },
					}}
				>
					<img
						src={`${sitemap.backend.homepath}upload/${data.icon}`}
						alt={data.title}
						width="100%"
						height="100%"
						style={{ display: 'block' }}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<Stack spacing={1}>
						<Typography variant="h4" component="h2">
							{datam.title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<Typography
								variant="body2"
								color="primary.main"
								display="inline-block"
								marginRight={1}
							>
								v {data.version}
							</Typography>
							for {data.platform}
						</Typography>
					</Stack>
					<Stack spacing={1}>
						<Typography variant="body2" color="text.secondary">
							{data.availble || <BlankField />}
						</Typography>
						<Box
							sx={{
								display: {
									xs: 'none',
									md: 'block',
								},
							}}
						>
							<Button variant="contained" fullWidth>
								Download APK{' '}
								{data.size !== '' ? (
									<span>({data.size})</span>
								) : (
									<BlankField />
								)}
							</Button>
						</Box>
					</Stack>
				</Box>
				<Button
					variant="contained"
					fullWidth
					sx={{
						gridColumn: '1/3',
						ml: '0 !important',
						mt: (theme) => theme.spacing(1) + '!important',
						display: {
							xs: 'block',
							md: 'none',
						},
					}}
				>
					Download APK{' '}
					{data.size !== '' ? (
						<span>({data.size})</span>
					) : (
						<BlankField />
					)}
				</Button>
			</Stack>
		</Paper>
	);
}
