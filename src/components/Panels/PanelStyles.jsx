import {makeStyles} from '@material-ui/core';
import * as colors from '../../uiconstants';

const commonPanelStyles = makeStyles(() => ({
	headerWrapper: {
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'space-between',
		marginBottom: 20,
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: 20
	},
	innerHeaderWrapper: {
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center'
	},
	panelAlign: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	cardsWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	actorCard: {
		display: 'flex', 
		flexDirection: 'row', 
		alignItems: 'center', 
		border: `1px solid ${colors.DARK_100}`,
		justifyContent: 'space-between',
		padding: 30,
		borderRadius: 10, 
		margin: 10
	},
	infoWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginBottom: 20,
		paddingRight: 20,
		paddingLeft: 40,
		paddingTop: 10
	}
}));

const addPanel = makeStyles(() => ({
	root:{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: colors.LIGHT_100,
		padding: 20
	},
	isPaid: {
		display: 'flex', 
		flexDirection:'row', 
		alignItems: 'center', 
		justifyContent: 'space-between', 
		padding: 10,
		marginTop: 10
	},
	picker: {
		width: '100%', 
		padding: 5, 
		borderRadius: 5, 
		marginTop: 20
	},
	infoWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginBottom: 20,
		paddingRight: 20,
		paddingLeft: 40,
		paddingTop: 10
	}
}));


const orderPanel = makeStyles(() => ({
	tagStyle: {
		paddingLeft: 10, 
		paddingRight: 10, 
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: colors.SUCCESS_500, 
		borderRadius: 50, 
		color: colors.LIGHT_100,
		textTransform: 'uppercase'
	},
	dialogWrapper: {
		display: 'flex', 
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center'
	}
}));

const sidePanel = makeStyles(() => ({
	avatarStyle: {
		backgroundColor: colors.PRIMARY,
		marginRight: 15,
		width: 70,
		height: 70
	},
	profilePanel: {
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'flex-start'
	},
	paymentInnerWrapper: {	
		padding: 10,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 5
	},
	paymentWrapper: {
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'flex-start',
		border: `1px solid ${colors.DARK_100}`,
		justifyContent: 'space-between',
		padding: 30,
		borderRadius: 10, 
		margin: 10
	}
}));

const profilePanel = makeStyles(() => ({
	storeWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	profileActorCard: {
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'flex-start', 
		border: `1px solid ${colors.DARK_100}`,
		justifyContent: 'space-between',
		padding: 30,
		borderRadius: 10, 
		margin: 10
	},
	innerWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between'
	}
}));

export {addPanel, orderPanel, sidePanel, commonPanelStyles, profilePanel};