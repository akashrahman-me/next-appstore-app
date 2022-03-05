import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import sitemap from '../data/index.json';

export default function AsideBanner({ datam }) {
	const theme = useTheme();

	return (
		<>
			<Link href={datam.path}>
				<a>
					<img
						src={`${sitemap.backend.homepath}upload/${datam.cover}`}
						alt={datam.title}
						style={{
							width: '100%',
							height: '200px',
							display: 'block',
						}}
					/>
					<Box
						sx={{
							px: 1.5,
							transform: 'translateY(-45%)',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<img
							src={`${sitemap.backend.homepath}upload/${datam.icon}`}
							alt={datam.title}
							width={60}
							height={60}
							style={{
								borderRadius: theme.shape.borderRadius,
							}}
						/>
						<Typography
							component="span"
							variant="b"
							fontWeight="600"
							marginLeft={1}
							color="text.secondary"
							display="block"
							sx={{
								transform: 'translateY(50%)',
							}}
							noWrap
						>
							{datam.title}
						</Typography>
					</Box>
				</a>
			</Link>
			<Typography
				paragraph
				padding={1.5}
				paddingBottom={0}
				color="text.secondary"
				lineHeight={1.15}
				fontSize="14px"
				marginTop={theme.spacing(-3)}
				fontWeight="500"
				sx={{
					WebkitLineClamp: '4',
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: ' -webkit-box',
				}}
			>
				{datam.excerpt}
			</Typography>
		</>
	);
}
