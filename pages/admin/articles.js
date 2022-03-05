import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminLayout from '../../src/components/AdminLayout';
import Tooltip from '@mui/material/Tooltip';
import Adminheadline from '../../src/components/AdminHeadline';
import useFetch from 'react-fetch-hook';
import sitemapx from '../../src/data/index.json';
import ConfirmBar from '../../src/components/ConfirmBar';
import Link from 'next/link';
import { timeDifference } from '../../src/functions/utilities';

const sitemap = sitemapx;

export default function Articles() {
	const posts = useFetch(
		`${sitemap.backend.homepath}select.rows.php?table=articles&fields=id,title,lastmodified`
	);

	const [postRows, setPostRows] = useState([]);
	useEffect(() => {
		if (!posts.isLoading && !posts.error) {
			posts.data.map((post) => {
				post.lastmodified = timeDifference(post.lastmodified);
				return post;
			});
			setPostRows(posts.data);
		}
		if (posts.error) {
			console.warn(posts.error);
		}
	}, [posts]);

	const [snackbar, setSnackbar] = useState(false);
	const closeSnackbar = () => setSnackbar(false);
	const snackbarAction = async () => {
		let getDeletedIndex;
		postRows.map((row, i) => {
			if (row.id === snackbar) getDeletedIndex = i;
		});
		const newPostsRows = postRows.map((v) => v);
		newPostsRows.splice(getDeletedIndex, 1);
		setPostRows(newPostsRows);
		const response = await fetch(
			`${sitemap.backend.homepath}delete.row.php?id=${snackbar}&table=articles`
		);
		const data = await response.json();
		setSnackbar(false);
		console.log(data);
	};

	const handleDelete = (e) => {
		const id = e.currentTarget.id;
		setSnackbar(id);
	};

	const columns = [
		{ field: 'id', headerName: 'Unique ID', minWidth: 100 },
		{ field: 'title', headerName: 'Title', minWidth: 100, flex: 1 },
		{ field: 'lastmodified', headerName: 'Last Modified', minWidth: 150 },
		{
			field: 'action',
			minWidth: 80,
			renderCell: (row) => (
				<>
					<Tooltip title="Edit Post">
						<Link
							href={`${sitemap.frontend.homepath}admin/edit-article/${row.id}`}
						>
							<a>
								<IconButton id={row.id}>
									<EditRoadIcon />
								</IconButton>
							</a>
						</Link>
					</Tooltip>

					<Tooltip title="Delete Post">
						<IconButton id={row.id} onClick={handleDelete}>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</>
			),
		},
	];

	return (
		<>
			<Adminheadline
				title="Articles"
				handler={{
					path: '/admin/write-article',
					name: 'Write Article',
				}}
			/>
			{posts.isLoading ? (
				<h1>Loading...</h1>
			) : (
				<div style={{ height: 400, width: '100%' }}>
					<DataGrid
						scrollbarSize={17}
						columns={columns}
						rows={postRows}
					/>
				</div>
			)}
			<ConfirmBar
				message="Sure to delete this post?"
				snackbar={snackbar}
				action={snackbarAction}
				close={closeSnackbar}
			/>
		</>
	);
}

Articles.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
