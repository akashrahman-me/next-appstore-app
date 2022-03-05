import Link from 'next/link';
import sitemap from '../../src/data/index.json';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

export default function Admin() {
	const theme = useTheme();

	return (
		<div style={{ minHeight: '60vh' }}>
			<h1 style={{ fontSize: '5em', textAlign: 'center' }}>
				Hello Administered
			</h1>
			<Stack
				direction="row"
				spacing={2}
				sx={{ justifyContent: 'center', alignItems: 'center' }}
			>
				<Link href={`${sitemap.frontend.homepath}admin/categories/`}>
					<a>
						<h2
							style={{
								border: `1px solid ${theme.palette.text.primary}`,
								padding: theme.spacing(0.75, 1, 1),
							}}
						>
							Categories
						</h2>
					</a>
				</Link>
				<Link href={`${sitemap.frontend.homepath}admin/articles/`}>
					<a>
						<h2
							style={{
								border: `1px solid ${theme.palette.text.primary}`,
								padding: theme.spacing(0.75, 1, 1),
							}}
						>
							Article
						</h2>
					</a>
				</Link>
				<Link href={`${sitemap.frontend.homepath}admin/write-article/`}>
					<a>
						<h2
							style={{
								border: `1px solid ${theme.palette.text.primary}`,
								padding: theme.spacing(0.75, 1, 1),
							}}
						>
							Write Article
						</h2>
					</a>
				</Link>
			</Stack>
		</div>
	);
}
