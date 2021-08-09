/* eslint-disable max-len */
import {makeStyles} from '@material-ui/core';
import * as colors from '../../uiconstants';


const authStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: '100vh',
		backgroundColor: colors.LIGHT_100
	},
	loginPart: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '50%'
	},
	loginRightStyles: {
		backgroundImage: 'url("https://images.unsplash.com/photo-1613048286437-57c949b2cd33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80")',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
}));

export default authStyles;