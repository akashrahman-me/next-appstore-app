import { styled } from '@mui/material/styles';

const Element = styled('footer')(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'light'
			? theme.palette.primary.main
			: theme.palette.background.paper,
	backgroundImage:
		'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
	padding: theme.spacing(6, 0, 4),
	color: theme.palette.common.white,
	marginTop: theme.spacing(4),
}));

export default function FooterElement({ children, ...others }) {
	return <Element {...others}>{children}</Element>;
}
