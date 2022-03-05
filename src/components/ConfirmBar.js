import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

export default function ConfirmBar({ message, snackbar, action, close }) {
	return (
		<Snackbar
			message={message}
			open={Boolean(snackbar)}
			onClose={close}
			action={
				<>
					<Button
						variant="contained"
						size="small"
						color="secondary"
						onClick={action}
					>
						Yes
					</Button>
					<IconButton
						color="inherit"
						size="small"
						aria-label="close-snackbar"
						onClick={close}
					>
						<CloseIcon />
					</IconButton>
				</>
			}
		/>
	);
}
