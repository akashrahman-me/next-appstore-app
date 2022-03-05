import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Content from '../src/components/Content';
import AdditionalInfo from '../src/components/AdditionalInfo';
import AppHeadline from '../src/components/AppHeadline';
import GridLayout from '../src/components/GridLayout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import sitemap from '../src/data/index.json';

const googlePlay = 'https://static.apkpure.com/www/static/imgs/gp_logo.png';
const appInfo = [
	{
		title: 'Category',
		value: 'Free Action Game',
		path: '/',
	},
	{
		title: 'Latest Version',
		value: '5.3.0',
	},
	{
		title: 'Requirements',
		value: 'Android 5.0+',
	},
	{
		title: 'Available On',
		value: 'Google Play',
		path: '/',
		icon: googlePlay,
	},
	{
		title: 'Publish Date',
		value: '2021-11-24',
	},
	{
		title: 'App uploaded by',
		value: 'Wilton Fernando',
	},
];
const appData = {
	thumbnail:
		'https://image.winudf.com/v2/image1/Y29tLm1pSG9Zby5iaDNnbG9iYWxfaWNvbl8xNjE5MDc4OTcyXzA0MQ/icon.png?w=170&fakeurl=1',
	title: 'Honkai Impact 3rd',
	version: '5.3.0',
	platform: 'Android',
	author: 'miHoYo Limited',
	size: '593.0MB',
};

export default function SinglePage({ path }) {
	const [appData, setAppData] = useState([]);

	useEffect(() => {
		async function getArticles() {
			const process = await fetch(
				`${sitemap.backend.homepath}select.rows.php?table=articles&limit=1&path=${path}&fields=title,path,requirement,version,platform,available,categories,icon,apkfile,apkpath,description,size,modified`
			);
			const response = await process.json();
			setAppData(response[0]);
		}
		if (path) {
			getArticles();
		}
	}, [path]);

	return !path ? (
		<h2>Loading...</h2>
	) : (
		<>
			<Head>
				<title>This is first post on softbiz</title>
			</Head>
			<Stack spacing={2}>
				<AppHeadline data={appData} />
				<AdditionalInfo datam={appInfo} />
				<Paper elevation={4} sx={{ p: 1.5 }}>
					<Typography variant="h6" component="h3" marginBottom={1}>
						{appData.title}
					</Typography>
					<Typography paragraph>
						<Content />
					</Typography>
				</Paper>
			</Stack>
		</>
	);
}

export const getStaticPaths = async () => ({
	paths: [],
	fallback: true,
});
export async function getStaticProps({ params }) {
	return {
		props: {
			path: params.path,
		},
	};
}

SinglePage.getLayout = (page) => <GridLayout>{page}</GridLayout>;
