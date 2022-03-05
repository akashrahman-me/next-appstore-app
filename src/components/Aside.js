import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import BoxHeadline from './BoxHeadline';
import BoxLists from './BoxLists';
import AsideBanner from './AsideBanner';
import useFetch from 'react-fetch-hook';
import sitemap from '../data/index.json';

const bannerCategory = {
	thumbnail:
		'https://image.winudf.com/v2/user/admin/YWRtaW5fMTAyNC01MDAucG5nXzE2NDA5NTQyNzk0NzI/image.png?fakeurl=1&w=330',
	title: 'Pubg Mobile game download now Pubg Mobile game download now',
	picture:
		'https://image.winudf.com/v2/image1/Y29tLnRlbmNlbnQuaWdfaWNvbl8xNjA1NTExODU4XzA4OA/image.png?fakeurl=1&w=60',

	description:
		'Get a PUBG MOBILE reward for free. Copy & Paste both Redeem Code and Character ID to Redemption Center. In-game event benefits will be sent to your account. Get a PUBG MOBILE reward for free. Copy & Paste both Redeem Code and Character ID to Redemption Center. In-game event benefits will be sent to your account.',
	path: '/',
};

export default function Aside() {
	const lastmodifiedPosts = useFetch(
		`${sitemap.backend.homepath}select.rows.php?table=articles&fields=title,excerpt,path,icon,lastmodified&orderby=lastmodified&limit=6&offset=1`
	);
	const LMThumbPosts = useFetch(
		`${sitemap.backend.homepath}select.rows.php?table=articles&fields=title,excerpt,path,icon,cover,lastmodified&orderby=lastmodified&limit=1&offset=0&notempty=cover`
	);

	return (
		<Stack spacing={2}>
			<Paper elevation={4} sx={{ textAlign: 'center', py: 1 }}>
				<iframe
					src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs&width=360&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
					width="360"
					height="130"
					style={{
						border: 'none',
						overflow: 'hidden',
					}}
					scrolling="no"
					frameBorder="0"
					allowFullScreen={true}
					allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
				></iframe>
			</Paper>
			<Paper elevation={4}>
				<BoxHeadline title="Editor Choice" href="/" />
				<Box>
					{!LMThumbPosts.isLoading && !LMThumbPosts.error && (
						<AsideBanner datam={LMThumbPosts.data[0]} />
					)}

					<Divider />
					<Box sx={{ px: 1.5 }}>
						{!lastmodifiedPosts.isLoading &&
							!lastmodifiedPosts.error && (
								<BoxLists
									gridProps={{ xs: 12 }}
									datam={lastmodifiedPosts.data}
								/>
							)}
					</Box>
				</Box>
			</Paper>
		</Stack>
	);
}
