import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminHeadline from '../../src/components/AdminHeadline';
import AdminLayout from '../../src/components/AdminLayout';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import ConfirmBar from '../../src/components/ConfirmBar';
import useFetch from '../../src/hooks/useFetch';
import data from '../../src/data/index.json';
const sitemap = data;

const random = () => parseInt(Math.random() * 999).toString();
let removedFields = [];
let results = [];

export default function WriteCatergory() {
	const { loading, error, result } = useFetch(
		`${sitemap.backend.homepath}select.rows.php?table=categories&fields=id,name`
	);

	const [fields, setFields] = useState(results);

	useEffect(() => {
		if (!loading && result) {
			setFields(result);
		}
	}, [result]);

	const addNewFields = function () {
		setFields((fields) => fields.concat({ id: random(), name: '' }));
	};

	const handleChange = function (e) {
		const value = e.currentTarget.value;
		const id = e.currentTarget.id;
		const IDs = fields.map((field) => parseInt(field.id));
		const fieldIndex = IDs.indexOf(parseInt(id));
		const demoFields = fields.map((v) => v);
		demoFields[fieldIndex].name = value;
		setFields(demoFields);
	};

	const [snackbar, setSnackbar] = useState(false);
	const closeSnackbar = () => setSnackbar(false);
	const snackbarAction = () => {
		const id = snackbar.name;
		const IDs = fields.map((field) => parseInt(field.id));
		const fieldIndex = IDs.indexOf(parseInt(id));
		const demoFields = fields.map((v) => v);
		const rmvField = demoFields.splice(fieldIndex, 1)[0];
		removedFields = removedFields.concat(rmvField);
		setFields(demoFields);
		setSnackbar(false);
	};

	const handleSubmit = async () => {
		const formData = new FormData();
		const insertData = [];
		const deleteData = [];

		fields.map((field) => {
			insertData = insertData.concat({ id: field.id, name: field.name });
		});
		removedFields.map((field) => {
			deleteData = deleteData.concat({ id: field.id, name: field.name });
		});

		formData.append('insert', JSON.stringify(insertData));
		formData.append('delete', JSON.stringify(deleteData));

		const response = await fetch(
			`${sitemap.backend.homepath}update.categories.php`,
			{
				method: 'POST',
				body: formData,
			}
		);
		const data = await response.text();
		console.log(data);
	};
	const removeField = (e) => setSnackbar(e.currentTarget);

	return (
		<Paper>
			<AdminHeadline title="Write Categories" handler={handleSubmit} />
			<Grid container spacing={2}>
				{fields.map((field) => (
					<Grid item key={field.id} xs={6}>
						<ListItem>
							<ListItemIcon>
								<IconButton
									name={field.id}
									onClick={removeField}
								>
									<DeleteIcon />
								</IconButton>
							</ListItemIcon>
							<ListItemText
								primary={
									<TextField
										variant="outlined"
										id={field.id}
										label="Enter Category Name"
										fullWidth
										value={field.name}
										onChange={handleChange}
									/>
								}
							/>
						</ListItem>
					</Grid>
				))}
			</Grid>
			<Button
				variant="contained"
				sx={{ padding: 1, marginTop: 1 }}
				startIcon={<AddIcon />}
				onClick={addNewFields}
				fullWidth
			>
				Add more category
			</Button>
			<ConfirmBar
				message="Sure to delete category?"
				snackbar={snackbar}
				action={snackbarAction}
				close={closeSnackbar}
			/>
		</Paper>
	);
}

WriteCatergory.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
