import {makeStyles} from '@material-ui/core';
import * as colors from '../uiconstants';


const globalStyles = makeStyles(() => ({
	bigButton: {
		width: '90%', 
		marginLeft: '5%', 
		padding: 15, 
		marginTop: 40
	},
	buttonStyles: {
		margin: 10,
		backgroundColor: colors.PRIMARY,
		color: colors.LIGHT_100
	},
	errorButton: {
		margin: 10,
		backgroundColor: colors.DANGER_400,
		color: colors.LIGHT_100
	},
	bottomFixed: {
		position: 'fixed',
		bottom: 30,
		right: 30
	},
	inputStyles: {
		width: '100%', 
		marginTop: 20, 
		border: `1px solid ${colors.DARK_200}`,
		borderRadius: 5
	}
}));


export default globalStyles;