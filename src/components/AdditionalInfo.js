import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import BoxHeadline from './BoxHeadline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function AdditionalInfo({ datam }) {
	return (
		<Paper elevation={4}>
			<BoxHeadline title="Additional Information" />
			<Divider />
			<List
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'auto auto',
						md: 'auto auto auto',
					},
				}}
			>
				{datam.map((data) => (
					<ListItem kye={data.title}>
						<ListItemText
							primary={data.title}
							secondary={
								data.path ? (
									<Link href={data.path}>
										<a>
											{data.icon ? (
												<img
													src={data.icon}
													alt={data.title}
													height={20}
												/>
											) : (
												data.value
											)}
										</a>
									</Link>
								) : (
									data.value
								)
							}
						/>
					</ListItem>
				))}
			</List>
		</Paper>
	);
}
