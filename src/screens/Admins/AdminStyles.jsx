import {makeStyles} from '@material-ui/core';
import * as colors from '../../uiconstants';


const adminStyles = makeStyles(() => ({
	onlineCard: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 30,
		justifyContent: 'space-between',
		borderRadius: 10,
		border: `1px solid ${colors.LIGHT_500}`,
		marginBottom: 10
	},
	table: {
		width: '100%',
	},
	tableContent: {
		'&:hover': {
			cursor: 'pointer'
		}
	},
	tableContainer: {
		backgroundColor: 'white', 
		border: `1px solid ${colors.LIGHT_500}`
	},
	tagStyle: {
		backgroundColor: colors.SUCCESS_400, 
		borderRadius: 50,
		paddingTop: 2,
		paddingBottom: 2,
		color: colors.LIGHT_100,
		width: '60%',
		marginLeft: '20%'
	}
}));

export default adminStyles;