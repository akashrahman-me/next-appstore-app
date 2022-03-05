import '../src/styles/globals.css'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import { ToggleMode } from '../src/context/ToggleMode'
import { useState, useEffect } from 'react'
import Layout from '../src/components/Layout'

export default function App({ Component, pageProps }) {
	const [mode, setMode] = useState('dark')

	useEffect(() => {
		setMode(localStorage.mode)
	}, [])

	const handleMode = () => {
		setMode(v => {
			const currentMode = v === 'light' ? 'dark' : 'light'
			localStorage.setItem('mode', currentMode)
			return currentMode
		})
	}
	let theme = createTheme({
		palette: {
			mode,
		},
		typography: {
			fontFamily: `'Montserrat', sans-serif`,
		},
	})
	theme = responsiveFontSizes(theme)
	const getLayout = Component.getLayout || (page => page)

	return (
		<ToggleMode.Provider value={handleMode}>
			<ThemeProvider theme={theme}>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
			</ThemeProvider>
		</ToggleMode.Provider>
	)
}
