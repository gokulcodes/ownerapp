import {makeStyles} from '@material-ui/core';
import * as colors from '../../uiconstants';


const statStyles = makeStyles((theme) => ({
	filterWrapper: {
		display:  'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 30,
		paddingRight: 30,
		width: '100%',
		backgroundColor: colors.LIGHT_200,
		border: `1px solid ${colors.LIGHT_500}`,
	},
	filterInnerContainer: {
		display:  'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
	},
	inputWrapper: {
		display:  'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	downloadButton: {
		display:  'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},
	tableContainer: {
		backgroundColor: 'white', 
		border: `1px solid ${colors.LIGHT_500}`
	},
	table: {
		width: '100%',
	},
	tableContent: {
		'&:hover': {
			cursor: 'pointer'
		}
	},
	appBar: {
		backgroundColor: 'white',
	},
	title: {
		marginLeft: theme.spacing(2),
		color: 'black'
	},
}));

export default statStyles;