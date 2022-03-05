import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ToggleMode } from '../context/ToggleMode';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

export default function ThemeToggle() {
	const handleMode = useContext(ToggleMode);
	const theme = useTheme();

	return (
		<Tooltip title="Change theme">
			<IconButton onClick={handleMode} color="inherit">
				{theme.palette.mode === 'light' ? (
					<Brightness4Icon />
				) : (
					<Brightness7Icon />
				)}
			</IconButton>
		</Tooltip>
	);
}
