/* eslint-disable max-len */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	AppBar,
	BottomNavigation,
	BottomNavigationAction,
	Avatar,
	Button,
	Menu,
	IconButton,
	MenuItem,
	Typography
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import WorkIcon from '@material-ui/icons/Work';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PieChartIcon from '@material-ui/icons/PieChart';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SecurityIcon from '@material-ui/icons/Security';
import {ReactSVG} from 'react-svg';
import GLOGO from '../assets/svg/Logo.svg';
import ProfilePanel from './Panels/ProfilePanel';
import * as colors from '../uiconstants';
import layoutStyles from './LayoutStyles';

const BottomBar = ({active}) => {
	const classes = layoutStyles();
	const history = useHistory();
	const [value, setValue] = React.useState(active);
	return (
		<Box className={classes.bottomWrapper} style={{
			border: `1px solid ${colors.LIGHT_500}`
		}}>
			<BottomNavigation 
				value={value} 
				showLabels
				className={classes.bottomBar}>
				<BottomNavigationAction 
					label="Dash"
					style={{borderRadius: 10}}
					icon={<DashboardIcon />} 
					onClick={() => {
						history.push('/dash');
						setValue(0);
					}}
				/>
				<BottomNavigationAction 
					label="Jobs" 
					icon={<WorkIcon />} 
					style={{ borderRadius: 10 }}
					onClick={() => {
						history.push('/jobs');
						setValue(1);
					}}
				/>
				<BottomNavigationAction 
					label="Drivers" 
					icon={<DriveEtaIcon />} 
					style={{ borderRadius: 10 }}
					onClick={() => {
						history.push('/drivers');
						setValue(2);
					}}
				/>
				<BottomNavigationAction
					label="Admins"
					icon={<SecurityIcon />}
					style={{ borderRadius: 10 }}
					onClick={() => {
						history.push('/admins');
						setValue(3);
					}}
				/>
				<BottomNavigationAction
					label="Stats"
					icon={<PieChartIcon />}
					style={{ borderRadius: 10 }}
					onClick={() => {
						history.push('/stats');
						setValue(4);
					}}
				/>
			</BottomNavigation>
		</Box>
	);
};

const HeaderBar = ({isOnline, title}) => {
	const classes = layoutStyles();
	const [side, setSide] = useState(false);
	const [anchorEl, setAnchorEl] = useState(false);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	
	return (
		<AppBar
			position="fixed"
			elevation={0}
			style={{ 
				backgroundColor: colors.LIGHT_100,
				border: `1px solid ${colors.LIGHT_500}`
			}}>
			<Box className={classes.container}>
				<Box display="flex" className={classes.logo}>
					<ReactSVG src={GLOGO} />
					<Typography style={{
						marginLeft: 40,
						color: 'black',
						fontSize: 20,
						fontWeight: 'medium'
					}} variant="h1">{title}</Typography>
				</Box>
				<Box display="flex" className={classes.outline}>
					<Button
						variant="contained"
						disableElevation 
						onClick={handleClick}
						startIcon={<SwapHorizIcon />}
						style={{
							borderRadius: 5,
							border: `1px solid ${colors.LIGHT_500}`,
							backgroundColor: colors.LIGHT_100,
							color: colors.DARK_500,
							marginRight: 20
						}} 
					>
						Alawa
					</Button>
					<Menu
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Alawa</MenuItem>
						<MenuItem onClick={handleClose}>Parap</MenuItem>
					</Menu>
					
					<Box className={classes.statusWrapper}>
						<Box
							className={classes.status}
							style={{
								backgroundColor: `${isOnline ? colors.SUCCESS_100 : colors.DARK_100}`,
								boxShadow: `${isOnline ? '1px 1px 8px 1px #23C653' : ''}`
							}}>
						</Box>
						<Typography
							variant="h3"
							style={{ color: `${isOnline ? colors.SUCCESS_500 : colors.DARK_200}` }}>
							{isOnline ? 'Online' : 'Offline'}
						</Typography>
					</Box>
					<IconButton
						onClick={() => setSide(!side)}
					>
						<Avatar
							src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
						></Avatar>
					</IconButton>
					<ProfilePanel
						side={side}
						setSide={setSide}
						panelType="general"
					/>
				</Box>
			</Box>
		</AppBar>
	);
};

const Layout = ({ index, children, title }) => {
	const classes = layoutStyles();
	const reducer = useSelector(state => state);
	const [online, setOnline] = React.useState(false);
	React.useEffect(() => {
		const {isOnline} = reducer.OwnerReducer;
		setOnline(isOnline);
	}, [index,online, children]);

	return (
		<>
			<HeaderBar isOnline={online} title={title} />
			<Box className={classes.appWrapper}>
				{children}
			</Box>
			<BottomBar active={index} />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
};

BottomBar.propTypes = {
	active: PropTypes.number.isRequired,
};

HeaderBar.propTypes = {
	isOnline: PropTypes.bool,
	title: PropTypes.string.isRequired
};
HeaderBar.defaultProps = {
	isOnline: false
};
export default Layout;