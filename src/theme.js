import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#3777FF'
		},
		secondary: {
			main: '#177DF5',
			light: '#2DA4FB'
		},
		error: {
			main: '#FF4539'
		},
		background: {
			default: '#F2F2F5'
		},
		text: {
			dark: '#000000',
			main: '#28293D',
			light: '#555770'
		},
		success: {
			main: '#54DC6E',
			dark: '#23C653',
			light: '#78ED84'
		},
	},
	overrides: {
		MuiDrawer: {
			paper: {
				width: '40%'
			},
		},
	},
	typography: {
		fontFamily: [
			'\'DM Sans\', sans-serif',
		],
		body1: {
			fontFamily: '\'DM Sans\', sans-serif',
			fontSize: 16,
			fontWeight: 700
		},
		body2: {
			fontFamily: '\'DM Sans\', sans-serif',
			fontSize: 14,
			fontWeight: 700
		},
		button: {
			fontFamily: '\'DM Sans\', sans-serif',
			fontSize: 14,
			textTransform: 'none'
		},
		h1: {
			fontFamily: '\'DM Sans\', sans-serif',
			fontSize: 20,
		},
		h2: {
			fontFamily: '\'DM Sans\', sans-serif',
			fontSize: 16,
		},
		h3: {
			fontFamily: '\'DM Sans\', sans-serif',
			fontSize: 14,
		},
		h4: {
			fontFamily: '\'DM Sans\', sans-serif',
			fontSize: 12,
		}
	}
});

export default theme;