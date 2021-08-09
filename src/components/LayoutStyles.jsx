import {makeStyles} from '@material-ui/core';
import * as colors from '../uiconstants';

const layoutStyles = makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		bottomBar: {
			width: '100%',
			position: 'fixed',
			bottom: 0,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
		appWrapper: {
			paddingTop: 70,
			paddingBottom: 100
		},
	},
	[theme.breakpoints.up('md')]: {
		bottomBar: {
			position: 'fixed',
			left: 0,
			top: 70,
			height: '60vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			padding: 3
		},
		appWrapper: {
			paddingTop: 71,
			paddingLeft: 86,
		},
		bottomWrapper: {
			background: 'white',
			height: '100vh',
			borderRightWidth: 1,
			borderRightColor: colors.LIGHT_500,
			position: 'fixed',
			left: 0,
			top: 56,
			width: 88
		}
	},
	headerBar: {
		width: '100%',
		top: 0
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 70,
		width: '95%',
		marginLeft: '2%'
	},
	status: {
		width: 15,
		height: 15,
		borderRadius: '100%',
		marginRight: 5,
	},
	outline: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	statusWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:colors.LIGHT_500,
		paddingRight: 15,
		paddingLeft: 15,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 50,
		marginRight: 20
	}
}));

export default layoutStyles;