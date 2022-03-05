import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ContactVector from '../src/images/5124556.png';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function ContactUs() {
	const theme = useTheme();

	return (
		<Grid container spacing={8} sx={{ mb: 8 }}>
			<Grid item xs={12} md={6}>
				<Typography
					component="h1"
					variant="h2"
					color="text.primary"
					fontWeight="bold"
					marginBottom={2}
				>
					How can we help?
				</Typography>
				<Typography component="span" lineHeight={1.15} display="block">
					Need something? the Softbiz is here to help!While we're good
					with smoke signals, ther are simpler ways for us to get in
					touch and answer your questions.
				</Typography>
				<img
					src={ContactVector.src}
					alt="Contact Us"
					style={{
						width: '100%',
						maxWidth: 300,
						display: 'block',
						marginTop: theme.spacing(4),
					}}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				sx={{ display: 'flex', alignItems: 'center' }}
			>
				<Box>
					<Typography component="h6" variant="h5" marginBottom={4}>
						Contact Us
					</Typography>
					<Stack spacing={3}>
						<Stack direction="row" spacing={2}>
							<TextField
								fullWidth
								variant="outlined"
								label="First Name"
							/>
							<TextField
								fullWidth
								variant="outlined"
								label="Last Name"
							/>
						</Stack>
						<TextField
							fullWidth
							variant="outlined"
							label="Email address"
						/>
						<TextField
							fullWidth
							variant="outlined"
							label="Message"
							multiline
							rows={4}
						/>
						<Button
							variant="contained"
							sx={{ py: 1.25, fontWeight: '600' }}
							startIcon={<SendIcon />}
						>
							Submit
						</Button>
					</Stack>
				</Box>
			</Grid>
		</Grid>
	);
}
