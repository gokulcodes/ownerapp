import { Provider } from 'react-redux';
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import store from '../src/store/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<React.StrictMode>
				<CssBaseline />
				<App />
			</React.StrictMode>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);

