import {makeStyles} from '@material-ui/core';
import * as colors from '../../uiconstants';


const StatusStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: colors.LIGHT_100,
		padding: 30,
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		borderRadius: 10,
		border: `1px solid ${colors.LIGHT_500}`,
		marginBottom: 10,
		marginRight: 10
	},
	leftWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	avatar: {
		width: 24,
		height: 24,
	},
}));

const BarStyles = makeStyles(() => ({
	root: {
		display: 'flex', 
		backgroundColor: colors.LIGHT_100,
		flexDirection: 'column',
		alignItems: 'flex-start', 
		justifyContent: 'center',
		paddingBottom: 20, 
		paddingRight: 20, 
		width: '100%', 
		border: `1px solid ${colors.LIGHT_500}`,
		borderRadius: 10,
		height: '40vh',
		marginBottom: 10, 
		marginRight: 10,
	},
	headerWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center', 
		justifyContent: 'space-between',
		width: '100%', height: '40vh',
	},
	chartWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center', justifyContent: 'center',
		width: '100%', height: '30vh',
	}
}));

const DaysStyles = makeStyles(() => ({
	root: {
		display: 'flex', 
		backgroundColor: colors.LIGHT_100,
		flexDirection: 'column',
		alignItems: 'center', 
		justifyContent: 'center',
		paddingBottom: 20, 
		paddingRight: 20, 
		width: '100%', 
		height: '40vh',
		marginBottom: 10, 
		border: `1px solid ${colors.LIGHT_500}`,
		borderRadius: 10,
		marginRight: 10
	},
	pieWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center', justifyContent: 'center',
		width: '20vw', height: '30vh'
	}
}));

export {StatusStyles, BarStyles, DaysStyles};