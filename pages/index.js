import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import BoxHeadline from '../src/components/BoxHeadline';
import BoxLists from '../src/components/BoxLists';
import CarouselGallary from '../src/components/CarouselGallary';
import GridLayout from '../src/components/GridLayout';
import useFetch from 'react-fetch-hook';
import { useEffect } from 'react';
import sitemap from '../src/data/index.json';

const carousels = [
	{
		title: 'Tiles Hop: EDM Rush!',
		path: '#',
		image: 'https://image.winudf.com/v2/image1/Y29tLmFtYW5vdGVzLmJlYXRob3BwZXJfYmFubmVyXzE1NTU1NjAxNjVfMDg0/banner.webp?w=850&fakeurl=1',
	},
];

export default function HomePage() {
	const discoverApps = useFetch(
		`${sitemap.backend.homepath}select.rows.php?table=articles&fields=title,excerpt,path,icon`
	);
	const carouselApp = useFetch(
		`${sitemap.backend.homepath}select.rows.php?table=articles&fields=title,path,cover&notempty=cover&limit=6`
	);

	return (
		<Stack spacing={4}>
			<Paper elevation={4}>
				{!carouselApp.isLoading && !carouselApp.error && (
					<CarouselGallary datam={carouselApp.data} />
				)}
			</Paper>
			<Paper elevation={4}>
				<Box>
					<BoxHeadline title="Discover App" href="/" />
					<Divider />

					<Box sx={{ padding: 1.5 }}>
						{!discoverApps.isLoading && !discoverApps.error && (
							<BoxLists
								datam={discoverApps.data}
								gridProps={{ xs: 12, md: 6, lg: 4 }}
							/>
						)}
					</Box>
				</Box>
			</Paper>
		</Stack>
	);
}

HomePage.getLayout = (page) => <GridLayout>{page}</GridLayout>;
