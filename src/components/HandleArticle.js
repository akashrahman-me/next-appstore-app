import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import FileUpload from './FileUpload'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import AdminLayout from './AdminLayout'
import { useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import AdminHeadline from './AdminHeadline'
import sitemapx from '../data/index.json'
import useFetch from 'react-fetch-hook'
import { request, insertPosts, updatePost, toSeoUrl } from '../functions/utilities'
import Grid from '@mui/material/Grid'

const sitemap = sitemapx

export default function EditArticle({ params }) {
	const [state, dispatch] = useState({})
	const [categories, setcategories] = useState([])
	const [editable, setEditable] = useState(false)

	useEffect(() => {
		request(`${sitemap.backend.homepath}select.rows.php?table=categories&fields=id,name,path`, data => {
			setcategories(data)
		})

		if (params && params.id) {
			request(
				`${sitemap.backend.homepath}select.rows.php?table=articles&id=${params.id}&fields=id,title,requirement,version,categories,icon,thumbnail,cover,apkpath,excerpt,description`,
				data => {
					dispatch(data[0])
					setEditable(true)
				}
			)
		}
	}, [params])

	const handleChange = e => {
		dispatch(o => ({ ...o, [e.target.name]: e.target.value }))
	}

	const handleFiles = async e => {
		const input = e.currentTarget
		const file = input.files[0]
		const formData = new FormData()
		formData.append('upload-file', file)
		const response = await fetch(`${sitemap.backend.homepath}upload.file.php`, {
			method: 'POST',
			body: formData,
		})
		const data = await response.json()
		handleChange({
			target: { name: input.name, value: data.name },
			currentTarget: { name: input.name, value: data.name },
		})
		if ((!state.title || state.title === '') && input.name === 'apkfile') {
			const originalName = data.originalName.slice(0, -4)
			handleChange({
				target: { name: 'title', value: originalName },
				currentTarget: { name: 'title', value: originalName },
			}) // For title generate
		}
	}

	const nullFiles = e => (e.currentTarget.value = null)
	const handleSave = async () => {
		state.path = toSeoUrl(state.title || '')
		if (editable) {
			updatePost(`${sitemap.backend.homepath}/update.post.php`, state, response => {
				console.log(response)
			})
		} else {
			insertPosts(`${sitemap.backend.homepath}/insert.row.php`, state, response => {
				console.log(response)
				dispatch({})
			})
		}
	}

	console.log("I'm HandleArticle Component")

	return (
		<>
			<AdminHeadline title={editable ? 'Edit Article' : 'Write Article'} handler={handleSave} />
			<Stack spacing={3}>
				<Stack spacing={2} direction="row">
					<TextField
						fullWidth
						variant="outlined"
						label="Enter Title"
						required
						value={state.title || ''}
						onChange={handleChange}
						name="title"
					/>
				</Stack>
				<Stack spacing={2} direction="row">
					<TextField
						variant="outlined"
						label="Requirements"
						fullWidth
						helperText="minimum system version"
						value={state.requirement || ''}
						onChange={handleChange}
						name="requirement"
					/>
					<TextField
						variant="outlined"
						label="Version"
						fullWidth
						name="version"
						value={state.version || ''}
						onChange={handleChange}
					/>

					<FormControl fullWidth>
						<InputLabel id="categories-select">Select Categories</InputLabel>
						<Select
							labelId="categories-select"
							label="Select Categories"
							value={state.categories || ''}
							onChange={handleChange}
							name="categories"
							renderValue={v => categories.map(c => (c.id === v ? c.name : ''))}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{categories.map(category => (
								<MenuItem value={category.id} key={category.id}>
									<Checkbox checked={category.id === state.categories || false} />
									<ListItemText primary={category.name} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>

				<Grid
					container
					spacing={2}
					sx={{
						marginLeft: theme => theme.spacing(-2) + '!important',
						marginTop: theme => theme.spacing(0) + '!important',
					}}
				>
					<Grid item xs={12} md={6} lg={4}>
						<FileUpload
							id="upload-icon"
							label="Icon"
							accept="image/*"
							required
							name="icon"
							onChange={handleFiles}
							onClick={nullFiles}
							hasFile={
								(state.icon && `${sitemap.backend.homepath}upload/${state.icon}`) || false
							}
						/>
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						<FileUpload
							id="upload-cover-image"
							label="Cover"
							accept="image/*"
							name="cover"
							onChange={handleFiles}
							onClick={nullFiles}
							hasFile={
								(state.cover && `${sitemap.backend.homepath}upload/${state.cover}`) || false
							}
						/>
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						<FileUpload
							id="upload-application"
							label="APK File"
							accept="*"
							name="apkfile"
							onChange={handleFiles}
							onClick={nullFiles}
						/>
					</Grid>
				</Grid>
				<TextField
					variant="outlined"
					label="Enter third-party application"
					value={state.apkpath || ''}
					onChange={handleChange}
					name="apkpath"
				/>
				<TextField
					variant="outlined"
					multiline
					rows={3}
					label="Enter excerpt text"
					value={state.excerpt || ''}
					onChange={handleChange}
					name="excerpt"
				/>
				<TextField
					variant="outlined"
					multiline
					rows={10}
					label="Enter description"
					value={state.description || ''}
					onChange={handleChange}
					name="description"
				/>
			</Stack>
		</>
	)
}

export const getStaticPaths = async () => ({
	paths: [],
	fallback: true,
})
export async function getStaticProps({ params }) {
	return {
		props: {
			params,
		},
	}
}

EditArticle.getLayout = page => <AdminLayout>{page}</AdminLayout>
