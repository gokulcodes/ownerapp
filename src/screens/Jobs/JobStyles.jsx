import {makeStyles} from '@material-ui/core';
import * as colors from '../../uiconstants';


const jobStyles = makeStyles(() => ({
	deliveryCard: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.LIGHT_100,
		padding: 30,
		width: '100%',
		justifyContent: 'space-between',
		borderRadius: 10,
		border: `1px solid ${colors.LIGHT_500}`,
		marginBottom: 10,
		marginRight: 10
	},
	table: {
		width: '100%',
	},
	tableContent: {
		'&:hover': {
			cursor: 'pointer'
		}
	},
	cardsWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
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
	tagStyle: {
		backgroundColor: colors.SUCCESS_400, 
		borderRadius: 50,
		paddingTop: 2,
		paddingBottom: 2,
		textTransform: 'uppercase',
		color: colors.LIGHT_100,
		width: '60%',
		marginLeft: '20%'
	}
}));

export default jobStyles;