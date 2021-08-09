import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	[theme.breakpoints.up('md')]: {
		root: {
			display: 'flex',
			flexDirection: 'row'
		},
		responsiveWrapper: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%'
		},
		cardsWrapper: {
			display: 'flex',
			flexDirection: 'row',
			paddingTop: 10,
			paddingLeft: 10,
			justifyContent: 'space-between',
			alignItems: 'center',
			overflowX: 'auto',
			smooth: true,
			width: '100%'
		},
		jobsRating: {
			display: 'flex',
			flexDirection: 'row',
			width: '100%',
			marginLeft: 10,
			paddingRight: 10
		}
	},
	[theme.breakpoints.down('md')]: {
		root: {
			display: 'flex',
			flexDirection: 'column'
		},
		responsiveWrapper: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%'
		},
		cardsWrapper: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			overflowX: 'auto',
			smooth: true,
			width: '100%'
		},
		jobsRating: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			marginLeft: 10,
			paddingRight: 10
		}
	},
	
	
}));

export default useStyles;