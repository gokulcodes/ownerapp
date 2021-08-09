import React, {useState} from 'react';
import {
	Drawer,
	Avatar,
	Menu,
	Box,
	MenuItem,
	Typography,
	Button,
	IconButton
} from '@material-ui/core';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CloseIcon from '@material-ui/icons/Close';
import copy from 'copy-to-clipboard';
import * as colors from '../../uiconstants';
import {sidePanel, commonPanelStyles} from './PanelStyles';
import globalStyles from '../../Styles/GlobalStyles';


const Card = ({title, subject}) => {
	const classes = sidePanel();
	
	return (
		<Box className={classes.paymentInnerWrapper}>
			<Box style={{display: 'flex', flexDirection: 'column'}}>
				<Box style={{fontSize: 16, fontWeight: 700, color: colors.DARK_200}}>{title}</Box>
				<Box 
					style={{marginTop: 6, color: colors.DARK_400}}>
					{subject}
				</Box>
			</Box>
			<IconButton onClick={() => copy(subject)}>
				<FileCopyOutlinedIcon />
			</IconButton>

		</Box>
	);
};

function SidePanel({
	side, 
	setSide, 
	type
}) {
	const [anchorEl, setAnchorEl] = useState(false);
	const classes = sidePanel();
	const common = globalStyles();
	const panelCommon = commonPanelStyles();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Drawer 
			anchor="right"
			open={side} 
			PaperProps={{square: false}}
			onClose={() => setSide(!side)}
			elevation={0}
		>
			{type && <Box>
				{/* header */}
				<Box className={panelCommon.headerWrapper}>
					<Box className={panelCommon.innerHeaderWrapper}>
						<IconButton 
							edge="start" 
							onClick={() => setSide(!side)} >
							<CloseIcon style={{fontSize: 24, color: colors.DARK_500}} />
						</IconButton>
						<Typography 
							variant="h1"
							style={{
								fontSize: 24
							}}
						>{type}</Typography>
					</Box>
					<IconButton onClick={handleClick}>
						<MoreVertIcon style={{fontSize: 24, color: colors.DARK_500}}/>
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Delete {type}</MenuItem>
					</Menu>
				</Box>
				{/* drivername */}
				<Box className={panelCommon.actorCard}>
					<Box className={panelCommon.panelAlign}>
						<Avatar className={classes.avatarStyle}>M</Avatar>
						<Box className={classes.profileWrapper}>
							<Typography 
								variant="h1"
								style={{
									marginTop: 5, 
									fontSize: 24
								}}>Micheal Johnson</Typography>
							<Typography 
								variant="h2" 
								style={{color: colors.SUCCESS_500}}>
										Online
							</Typography>
						</Box>
					</Box>
					<Box>
						
						<Button 
							variant="outlined"
							disableElevation
							size="large"
							style={{
								color: colors.PRIMARY
							}}>
						Email
						</Button>
					</Box>
				</Box>

				{/* todaydeliveries */}
				<Box className={panelCommon.actorCard}>
					<Typography variant="h1">Today Deliveries</Typography>
					<Typography variant="h1">20</Typography>
				</Box>

				{/* overall delivereis */}
				<Box className={panelCommon.actorCard}>
					<Typography variant="h1">Overall Deliveries</Typography>
					<Typography variant="h1">120</Typography>
				</Box>

				{/* paymentinfo */}
				{type === 'driver' && 
					<Box className={classes.paymentWrapper}>
						<Typography variant="h1" style={{marginBottom: 20}}>
									Payment Details
						</Typography>
						<Card title="ABN" subject="490354580348593" />
						<Card title="BSB" subject="32354553334" />
						<Card title="Account Number" subject="32423452345" />
					</Box>
				}

				<Box className={common.bottomFixed}>
					<Button 
						onClick={() => setSide(!side)}
						variant="contained"
						disableElevation
						size="large"
						color="primary">
						Close
					</Button>
				</Box>
			</Box>
			}
		</Drawer>            
	);
}

export default SidePanel;

Card.propTypes={
	title: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired
};

SidePanel.propTypes = {
	side: PropTypes.bool.isRequired,
	setSide: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired
};