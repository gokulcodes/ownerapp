/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
	Drawer,
	Menu,
	Box,
	MenuItem,
	Typography,
	TextField,
	Button,
	Switch,
	IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as colors from '../../uiconstants';
import {profilePanel, commonPanelStyles} from './PanelStyles';
import globalStyles from '../../Styles/GlobalStyles';

function GeneralPanel ({side, setSide, setPanel}) {

	const classes = profilePanel();
	const common = globalStyles();
	const panelCommon = commonPanelStyles();

	const [anchorEl, setAnchorEl] = useState(false);
	const [online, setOnline] = useState(true);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	return (
		<Box>
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
					>My Profile</Typography>
				</Box>
				<IconButton onClick={handleClick}>
					<MoreVertIcon style={{fontSize: 24, color: colors.DARK_500}}/>
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={() => setAnchorEl(null)}
				>
					<MenuItem onClick={() => setPanel('storecreate')}>Create Store</MenuItem>
					<MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
				</Menu>
			</Box>
			{/* stores */}

			<Box className={classes.profileActorCard}>
				<Typography variant="h3" style={{
					marginBottom: 20, 
					textTransform: 'uppercase', 
					color: colors.DARK_200
				}}>
                                Stores
				</Typography>
				<Box className={classes.storeWrapper}>
					<Typography variant="h1" style={{
						fontSize: 28
					}}>Alawa Restaurant</Typography>
					<Switch checked={online} onChange={() => setOnline(!online)} />
				</Box>
				<Box className={classes.storeWrapper}>
					<Typography variant="h1" style={{
						fontSize: 28
					}}>Parap Restaurant</Typography>
					<Switch checked={online} onChange={() => setOnline(!online)} />
				</Box>
			</Box>
            

			{/* email */}
			<Box className={classes.profileActorCard}>
				<Typography variant="h3" style={{
					marginBottom: 20, 
					textTransform: 'uppercase', 
					color: colors.DARK_200
				}}>
                                Email Address
				</Typography>
				<Box className={classes.innerWrapper}>
					<Typography variant="h1"
						style={{
							fontSize: 28
						}}>owner@getitnt.com</Typography>
				</Box>
                
			</Box>
			<Box className={classes.profileActorCard}>
				<Typography variant="h3" style={{
					marginBottom: 20, 
					textTransform: 'uppercase', 
					color: colors.DARK_200
				}}>
                                DISPLAY NAME
				</Typography>
				<Box className={classes.innerWrapper}>
					<Typography variant="h1"
						style={{
							fontSize: 28
						}}>Parap Owner</Typography>
					<Button 
						variant="outlined"
						disableElevation
						size="large"
						style={{
							marginRight: 10,
							color: colors.PRIMARY
						}}>
                    Edit
					</Button>
				</Box>
                
			</Box>

			<Box className={classes.profileActorCard}>
				<Typography variant="h3" style={{
					marginBottom: 20, 
					textTransform: 'uppercase', 
					color: colors.DARK_200
				}}>
                                USERNAME
				</Typography>
				<Box className={classes.innerWrapper}>
					<Typography variant="h1"
						style={{
							fontSize: 28
						}}>@parapowner</Typography>
					<Button 
						variant="outlined"
						disableElevation
						size="large"
						style={{
							marginRight: 10,
							color: colors.PRIMARY
						}}>
                    Edit
					</Button>
				</Box>
                
			</Box>
        

			<Box className={common.bottomFixed}>
                    
				<Button 
					onClick={() => setSide(!side)}
					variant="contained"
					disableElevation
					size="large"
					color="primary"
				>
                    Close
				</Button>
			</Box>
		</Box>
	);
}

function CreateStore({setPanel}) {
	const [hotelname, setHotelName] = useState('');
	const [address, setAddress] = useState('');
	const [phoneNumber, setphoneNumber] = useState('');
	const [emailAddress, setemailAddress] = useState('');
	const common = globalStyles();
	const panelCommon = commonPanelStyles();
	const storeHandle = () => {
		if(hotelname&&address&&phoneNumber&&emailAddress){
			console.log(hotelname, address, phoneNumber, emailAddress);
			history.push('/drivers');
		}
	};
	return (
		<Box>
			{/* header */}
			<Box className={panelCommon.headerWrapper}>
				<Box className={panelCommon.innerHeaderWrapper}>
					<IconButton 
						edge="start" 
						onClick={() => setPanel('general')} >
						<ArrowBackIcon style={{fontSize: 24, color: colors.DARK_500}} />
					</IconButton>
					<Typography 
						variant="h1"
						style={{
							fontSize: 24
						}}
					>Create Store</Typography>
				</Box>
				
			</Box>
			<Box className={panelCommon.infoWrapper}>
				<Typography variant="h1">Basic Informations</Typography>
				<Typography variant="h3" style={{marginTop: 10}}>
                    Please enter Hotel informations correctly. You can’t change it in future
				</Typography>
			</Box>
			<Box style={{
				marginLeft: 40,
				marginRight: 40
			}}>
				<form style={{marginTop: 20, width: '99%'}} onSubmit={() => storeHandle()}>
					<TextField 
						label="Hotel Name" 
						variant="filled" 
						value={hotelname}
						InputProps={{disableUnderline: true}}
						className={common.inputStyles}
						type="text"
						onChange={(e) =>  setHotelName(e.target.value)}
						required 
						style={{width: '100%', marginTop: 15}} 
					/>
					
					<TextField 
						label="Email Address" 
						variant="filled" 
						value={emailAddress}
						InputProps={{disableUnderline: true}}
						className={common.inputStyles}
						type="email"
						onChange={(e) =>  setemailAddress(e.target.value)}
						required 
						style={{width: '100%', marginTop: 15}} 
					/>
					<TextField 
						label="Phone Number" 
						variant="filled" 
						value={phoneNumber}
						InputProps={{disableUnderline: true}}
						className={common.inputStyles}
						type="tel"
						onChange={(e) =>  setphoneNumber(e.target.value)}
						required 
						style={{width: '100%', marginTop: 15}} 
					/>
					<TextField 
						label="Address" 
						variant="filled" 
						InputProps={{disableUnderline: true}}
						className={common.inputStyles}
						value={address}
						type="text"
						onChange={(e) =>  setAddress(e.target.value)}
						required 
						style={{width: '100%', marginTop: 15}} 
					/>
					<Button 
						variant="contained" 
						color="primary" 
						disableElevation 
						className={common.bigButton}
						onClick={() => storeHandle()}
					>
				Create Store
					</Button>
				</form>
			</Box>
		</Box>
	);
}


function ProfilePanel({
	side, 
	setSide,
	panelType
}) {
	const [panel, setPanel] = useState(panelType);
	return (
		<Drawer 
			anchor="right"
			open={side} 
			PaperProps={{square: false}}
			onClose={() => setSide(!side)}
			elevation={0}
			disableBackdropClick
		>
			{panel === 'general' ? 
				<GeneralPanel side={side} setSide={setSide} setPanel={setPanel} /> :
				<CreateStore side={side} setSide={setSide} setPanel={setPanel} /> 
			}
			
		</Drawer>            
	);
}

export default ProfilePanel;

GeneralPanel.propTypes = {
	side: PropTypes.bool.isRequired,
	setSide: PropTypes.func.isRequired,
	setPanel: PropTypes.func.isRequired
};

CreateStore.propTypes = {
	setPanel: PropTypes.func.isRequired
};

ProfilePanel.propTypes = {
	side: PropTypes.bool.isRequired,
	setSide: PropTypes.func.isRequired,
	panelType: PropTypes.string.isRequired,
};