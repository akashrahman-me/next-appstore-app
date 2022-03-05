import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

export default function Layout({ children }) {
	const theme = useTheme();

	return (
		<main
			style={{
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.text.primary,
			}}
		>
			<Navbar />
			<Container maxWidth="lg" sx={{ mt: 3 }}>
				{children}
			</Container>
			<Footer />
		</main>
	);
}
