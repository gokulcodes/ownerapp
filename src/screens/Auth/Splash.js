import React from 'react';
import {useHistory} from 'react-router-dom';
import {Box, CircularProgress, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		height: '100vh',
		// backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	}
}));

const Splash = () => {
	
	const history = useHistory();
	const classes = useStyles();
	// const auth = false;

	React.useEffect(() => {
		setTimeout(() => {
			history.push('/dash');
		}, 2000);
	}, []);

	// setTimeout(() => {
	// 	if(!auth){
	// 		history.push('/login');
	// 	}else{
	// 		history.push('/newjobs');
	// 	}
	// }, 2000);
	return (
		<Box className={classes.root}>
			<CircularProgress />
		</Box>
	);
};

export default Splash;