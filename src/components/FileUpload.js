import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import xyzhidden from '../images/xyzhidden.png';

const Input = styled('input')(({ theme }) => ({
	display: 'none',
}));
const Img = styled('img')(({ theme }) => ({
	[`&[src="${xyzhidden.src}"]`]: {
		display: 'none',
	},
}));

export default function FileUpload({ id, accept, label, hasFile, ...others }) {
	const theme = useTheme();

	return (
		<label htmlFor={id}>
			<Input id={id} accept={accept} type="file" {...others} />
			<Button
				variant="outlined"
				startIcon={<CloudUploadIcon />}
				fullWidth
				component="span"
			>
				{label}
			</Button>
			{accept === 'image/*' && (
				<Img
					src={hasFile || xyzhidden.src}
					alt=""
					width="100%"
					style={{ marginTop: theme.spacing(0.5) }}
				/>
			)}
		</label>
	);
}
