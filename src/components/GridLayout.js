import Grid from '@mui/material/Grid';
import Aside from './Aside';

export default function NestedLayout({ children }) {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={8}>
				{children}
			</Grid>
			<Grid item xs={12} md={4}>
				<Aside />
			</Grid>
		</Grid>
	);
}
