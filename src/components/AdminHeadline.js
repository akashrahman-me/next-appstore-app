import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
export default function AdminHeadline({ title, handler }) {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				marginBottom: 4,
			}}
		>
			<Typography variant="h6">{title}</Typography>
			{typeof handler === 'function' && (
				<Button
					variant="contained"
					startIcon={<SaveIcon />}
					onClick={handler}
				>
					Save
				</Button>
			)}
			{typeof handler === 'object' && (
				<Link href={handler.path}>
					<a>
						<Button
							variant="contained"
							startIcon={<AddCircleOutlineIcon />}
						>
							{handler.name}
						</Button>
					</a>
				</Link>
			)}
		</Box>
	);
}
