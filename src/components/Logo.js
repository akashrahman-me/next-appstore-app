import Box from '@mui/material/Box';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Avater from '@mui/material/Avatar';

import logo from '../images/logo_v2.png';
import textLogo from '../images/logo_v1.png';

export default function Logo({ preview, footer }) {
	return footer ? (
		<Link href="/">
			<a>
				<img src={textLogo.src} alt="space" height={50} />
			</a>
		</Link>
	) : (
		<Box sx={{ display: preview || 'block' }}>
			<Link href="/">
				<a>
					<IconButton>
						<Avater
							src={logo.src}
							alt="Softbiz"
							sx={{ height: 32, width: 32 }}
							variant="square"
						/>
					</IconButton>
				</a>
			</Link>
		</Box>
	);
}
