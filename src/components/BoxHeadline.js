import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function BoxHeadline({ href, title }) {
	return (
		<Box
			sx={{
				padding: 1.5,
			}}
		>
			<Typography variant="h6" component="span">
				{title}
			</Typography>
		</Box>
	);
}
