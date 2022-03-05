import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';

const socials = [
	{
		path: 'https://facebook.com/akashrahman.me',
		icon: <FacebookIcon />,
	},
	{
		path: 'https://facebook.com/akashrahman.me',
		icon: <YoutubeIcon />,
	},
	{
		path: 'https://facebook.com/akashrahman.me',
		icon: <InstagramIcon />,
	},
	{
		path: 'https://facebook.com/akashrahman.me',
		icon: <TwitterIcon />,
	},
];

export default function SocialIcons() {
	return (
		<Stack
			direction="row"
			spacing={1}
			sx={{
				marginTop: 4,
				justifyContent: { xs: 'center', md: 'flex-start' },
			}}
		>
			{socials.map((social) => (
				<a href={social.path} target="_blank" key={Math.random()}>
					<IconButton color="inherit">{social.icon}</IconButton>
				</a>
			))}
		</Stack>
	);
}
