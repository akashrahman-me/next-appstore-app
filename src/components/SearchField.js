import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import sitemap from '../data/index.json';
import Typography from '@mui/material/Typography';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '30ch',
		},
	},
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
	'& .MuiListItemText-secondary': {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
}));

export default function SearchField() {
	const [search, setSearch] = useState('');
	const [searchPalette, setSearchPalette] = useState(false);
	const handleSearch = (e) => setSearch(e.currentTarget.value);
	const closeSearchPalette = () => setSearchPalette(false);
	const handleSearchPalette = () => setSearchPalette(true);
	const [searchDatam, setSearchDatam] = useState([]);

	useEffect(() => {
		async function getSearchResult() {
			const process = await fetch(
				`${sitemap.backend.homepath}select.rows.php?table=articles&limit=6&fields=icon,title,excerpt,path&title=${search}`
			);
			const response = await process.json();
			setSearchDatam(response);
		}
		if (search.length > 0 && searchPalette) {
			getSearchResult();
		}
	}, [search]);

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search…"
				inputProps={{ 'aria-label': 'search' }}
				onChange={handleSearch}
				value={search}
				onBlur={closeSearchPalette}
				onFocus={handleSearchPalette}
			/>
			<Paper
				elevation={4}
				sx={{
					position: 'absolute',
					zIndex: 9,
					width: '100%',
					mt: 0.5,
					display:
						search.length > 0 && searchPalette ? 'block' : 'none',
				}}
			>
				<MenuList>
					{searchDatam.length === 0 && (
						<MenuItem>
							<Typography component="h6" variant="h4">
								No result found
							</Typography>
						</MenuItem>
					)}

					{searchDatam.map((seachData) => (
						<Link
							href={sitemap.frontend.homepath + seachData.path}
							key={Math.random()}
						>
							<a className="not-underline">
								<MenuItem>
									<ListItemAvatar sx={{ minWidth: 0, mr: 1 }}>
										<Avatar
											variant="rounded"
											sx={{
												width: 36,
												height: 36,
											}}
											src={`${sitemap.backend.homepath}upload/${seachData.icon}`}
										/>
									</ListItemAvatar>
									<StyledListItemText
										primary={
											<span
												style={{
													textOverflow: 'ellipsis',
													overflow: 'hidden',
													display: 'block',
												}}
											>
												{seachData.title}
											</span>
										}
										secondary={seachData.excerpt}
									/>
								</MenuItem>
							</a>
						</Link>
					))}
				</MenuList>
			</Paper>
		</Search>
	);
}
