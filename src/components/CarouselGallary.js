import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { alpha } from '@mui/material/styles';
import sitemap from '../data/index.json';

export default function CarouselGallary({ datam }) {
	return (
		<Carousel
			showThumbs={false}
			swipeable={true}
			infiniteLoop={true}
			showIndicators={false}
			showStatus={false}
			autoPlay={true}
		>
			{datam.map((data) => (
				<Box
					sx={{
						positon: 'relative',
					}}
					key={data.title}
				>
					<Link href={data.path}>
						<a>
							<Box
								component="img"
								src={`${sitemap.backend.homepath}upload/${data.cover}`}
								alt={data.title}
								sx={{
									height: {
										xs: 200,
										sm: 250,
										md: 300,
										lg: 400,
									},
									width: '100%',
									objectFit: 'cover',
									display: 'block',
								}}
							/>
							<Typography
								component="h4"
								varinat="h6"
								sx={{
									position: 'absolute',
									pottom: 0,
									transform: 'translateY(calc(-100%))',
									backgroundColor: (theme) =>
										alpha(theme.palette.common.black, 0.5),
									paddingX: 2,
									paddingY: 1.5,
									width: '100%',
								}}
								color="common.white"
							>
								{data.title}
							</Typography>
						</a>
					</Link>
				</Box>
			))}
		</Carousel>
	);
}
