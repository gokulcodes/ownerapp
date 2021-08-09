/* eslint-disable max-len */
import React from 'react';
import {
	Drawer,
	Box,
	Typography,
	Button,
	TextField,
	Switch,
	IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import {MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Autocomplete} from '@material-ui/lab';
import * as colors from '../../uiconstants';
import {addPanel, commonPanelStyles} from './PanelStyles';
import globalStyles from '../../Styles/GlobalStyles';

const modeType = [
	{type: 'Car'},
	{type: 'Bike'}
];


const customerNameArray = [
	{name: 'Gokul'},
	{name: 'Sheldon'}
];

const storeNameArray = [
	{type: 'Alawa'},
	{type: 'Parap'}
];

const orderTypeArray = [
	{type: 'Uber Order'},
	{type: 'Phone Order'},
	{type: 'Mobi2Go Order'}
];

const customerNumbersArray = [
	{num: '09390934234'},
	{num: '09390934234'},
];

const addressArray = [
	{address: '35 Bayview Blvd, Bayview NT'},
	{address: '35 Bayview Blvd, Bayview NT'},
];

const instructionsArray = [
	{ins: '35 Bayview Blvd, Bayview NT'},
	{ins: '35 Bayview Blvd, Bayview NT'},
];

function AddPanel({
	addView, 
	setAddView, 
	type, 
}) {
	const [displayName, setDisplayName] = React.useState('');
	const [userName, setuserName] = React.useState('');
	const [phoneNumber, setphoneNumber] = React.useState('');
	const [emailAddress, setemailAddress] = React.useState('');
	const [modeofTransport, setmodeofTransport] = React.useState(`${modeType[0].type}`);

	const addDriverHandle = () => {
		if(displayName&&userName&&phoneNumber&&emailAddress&&modeofTransport){
			console.log(displayName, userName, phoneNumber, emailAddress, modeofTransport);
		}
	};

	// job
	const [customerName, setcustomerName] = React.useState(customerNameArray[0].name);
	const [customerNumber, setcustomerNumber] = React.useState(customerNumbersArray[0].num);
	const [ordertype, setType] = React.useState(orderTypeArray[0].type);
	const [storeName, setstoreName] = React.useState(storeNameArray[0].type);
	const [address, setaddress] = React.useState(addressArray[0].address);
	const [instruction, setinstruction] = React.useState(instructionsArray[0].ins);
	const [duration, setduration] = React.useState(new Date());
	const [paid, setPaid] = React.useState(false);
	const [amount, setamount] = React.useState('');

	const addOrderHandle = () => {
		if(customerName&&customerNumber&&type&&storeName&&instruction&&address&&duration&&amount){
			console.log(customerName, phoneNumber, type, storeName, instruction, address, duration, amount);
		}
	};

	const classes = addPanel();
	const common = globalStyles();
	const panelCommon = commonPanelStyles();
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Drawer 
				anchor="right"
				open={addView} 
				PaperProps={{square: false}}
				onClose={() => setAddView(!addView)}
				elevation={0}
			>
				{type && <Box>
					{/* header */}
					<Box className={panelCommon.headerWrapper}>
						<Box className={panelCommon.innerHeaderWrapper}>
							<IconButton 
								edge="start" 
								onClick={() => setAddView(!addView)} >
								<CloseIcon style={{fontSize: 24, color: colors.DARK_500}} />
							</IconButton>
							<Typography 
								variant="h1"
								style={{
									fontSize: 24
								}}
							>Add {type}</Typography>
						</Box>
					
					</Box>
					<Box className={classes.infoWrapper}>
						<Typography variant="h1" style={{marginBottom: 10}}>
						Basic Informations
						</Typography>
						<Typography variant="h2">
							Please enter {type} informations correctly. You can’t 
							change it in future</Typography>
					</Box>
					<Box
						style={{
							paddingRight: 40,
							paddingLeft: 40,
							paddingBottom: 40,
						}}
					>
						{type === 'driver' ? 
							<form 
								style={{
									marginTop: 20, 
									width: '99%'
								}} 
								onSubmit={() => addDriverHandle()}
							>
								<TextField 
									label="Display Name" 
									variant="filled" 
									InputProps={{disableUnderline: true}}
									value={displayName}
									type="text"
									helperText="Length should be between 6-10"
									onChange={(e) =>  setDisplayName(e.target.value)}
									required 
									className={common.inputStyles}
								/>
								<TextField 
									label="Username" 
									variant="filled" 
									value={userName}
									InputProps={{disableUnderline: true}}
									helperText="All Lowercase and Length should be between 6-10"
									type="text"
									onChange={(e) =>  setuserName(e.target.value)}
									required 
									className={common.inputStyles}
								/>
								<TextField 
									label="Email Address" 
									variant="filled" 
									value={emailAddress}
									type="email"
									InputProps={{disableUnderline: true}}
									onChange={(e) =>  setemailAddress(e.target.value)}
									required 
									className={common.inputStyles}
								/>
								<TextField 
									label="Phone Number" 
									variant="filled" 
									value={phoneNumber}
									InputProps={{disableUnderline: true}}
									type="tel"
									onChange={(e) =>  setphoneNumber(e.target.value)}
									required 
									className={common.inputStyles}
								/>
								<Autocomplete
									// id="combo-box-demo"
									options={modeType}
									InputProps={{disableUnderline: true}}
									defaultValue={modeofTransport}
									getOptionLabel={(option) => option.type}
									className={common.inputStyles}
									renderInput={(params) => 
										<TextField {...params} 
											required 
											variant="filled" 
											label="Mode of Transport" 
											onChange={(e) => 
												setmodeofTransport(e.target.value)} 
										/>}
								/>
								<Button 
									variant="contained" 
									color="primary" 
									disableElevation 
									className={common.bigButton}
									onClick={() => addDriverHandle()}
								>
					Send Invitation
								</Button>
							</form> : type === 'admin' ? (
								<form 
									style={{
										marginTop: 20, 
										width: '99%'
									}} 
									onSubmit={() => addDriverHandle()}
								>
									<TextField 
										label="Display Name" 
										variant="filled" 
										InputProps={{disableUnderline: true}}
										value={displayName}
										type="text"
										helperText="Length should be between 6-10"
										onChange={(e) =>  setDisplayName(e.target.value)}
										required 
										className={common.inputStyles}
									/>
									<TextField 
										label="Username" 
										InputProps={{disableUnderline: true}}
										variant="filled" 
										value={userName}
										helperText="All Lowercase and Length should be between 6-10"
										type="text"
										onChange={(e) =>  setuserName(e.target.value)}
										required 
										className={common.inputStyles}
									/>
									<TextField 
										label="Email Address" 
										InputProps={{disableUnderline: true}}
										variant="filled" 
										value={emailAddress}
										type="email"
										onChange={(e) =>  setemailAddress(e.target.value)}
										required 
										className={common.inputStyles}
									/>
									<TextField 
										label="Phone Number" 
										InputProps={{disableUnderline: true}}
										variant="filled" 
										value={phoneNumber}
										type="tel"
										onChange={(e) =>  setphoneNumber(e.target.value)}
										required 
										className={common.inputStyles}
									/>
									<Button 
										variant="contained" 
										color="primary" 
										disableElevation 
										className={common.bigButton}
										onClick={() => addDriverHandle()}
									>
					Send Invitation
									</Button>
								</form>
							) : (
								<form style={{marginTop: 20, width: '99%'}} onSubmit={() => addOrderHandle()}>
									<Autocomplete
										// id="combo-box-demo"
										options={customerNameArray}
										defaultValue={customerName}
										InputProps={{disableUnderline: true}}
										getOptionLabel={(option) => option.name}
										className={common.inputStyles}
										renderInput={(params) => 
											<TextField {...params} 
												required 
												variant="filled" 
												label="Customer Name" 
												onChange={(e) => setcustomerName(e.target.value)} 
											/>}
									/>
									<Autocomplete
										// id="combo-box-demo"
										options={customerNumbersArray}
										defaultValue={customerNumber}
										InputProps={{disableUnderline: true}}
										getOptionLabel={(option) => option.num}
										className={common.inputStyles}
										renderInput={(params) => 
											<TextField {...params} 
												required 
												variant="filled" 
												label="Phone Number" 
												onChange={(e) => setcustomerNumber(e.target.value)} 
											/>}
									/>
									<Autocomplete
										// id="combo-box-demo"
										options={storeNameArray}
										InputProps={{disableUnderline: true}}
										defaultValue={storeName}
										getOptionLabel={(option) => option.type}
										className={common.inputStyles}
										renderInput={(params) => 
											<TextField {...params} 
												required 
												variant="filled" 
												label="Select Store" 
												onChange={(e) => setstoreName(e.target.value)} 
											/>}
									/>
									<Autocomplete
										// id="combo-box-demo"
										options={addressArray}
										InputProps={{disableUnderline: true}}
										defaultValue={address}
										getOptionLabel={(option) => option.address}
										className={common.inputStyles}
										renderInput={(params) => 
											<TextField {...params} 
												required 
												variant="filled" 
												label="Address" 
												onChange={(e) => setaddress(e.target.value)} 
											/>}
									/>
									<Autocomplete
										// id="combo-box-demo"
										options={orderTypeArray}
										defaultValue={ordertype}
										InputProps={{disableUnderline: true}}
										getOptionLabel={(option) => option.type}
										className={common.inputStyles}
										renderInput={(params) => 
											<TextField {...params} 
												required 
												variant="filled" 
												label="Type" 
												onChange={(e) => setType(e.target.value)} 
											/>}
									/>
                    
									<Autocomplete
										// id="combo-box-demo"
										options={instructionsArray}
										InputProps={{disableUnderline: true}}
										defaultValue={instruction}
										getOptionLabel={(option) => option.ins}
										className={common.inputStyles}
										renderInput={(params) => 
											<TextField {...params} 
												required 
												variant="filled" 
												label="Instruction"
												onChange={(e) => setinstruction(e.target.value)} 
											/>}
									/>
									<KeyboardTimePicker
										label="Duration"
										variant="filled"
										className={classes.picker}
										value={duration}
										onChange={(e) => setduration(e)}
									/>
									<TextField 
										label="Total Amount" 
										variant="filled" 
										value={amount}
										type="tel"
										onChange={(e) =>  setamount(e.target.value)}
										required 
										className={common.inputStyles}
									/>
									<Box className={classes.isPaid}>
										<Box style={{fontSize: 16}}>Paid</Box>
										<Switch checked={paid} onChange={() => setPaid(!paid)} />
									</Box>
									<Button 
										variant="contained" 
										color="primary" 
										disableElevation 
										className={common.bigButton}
										onClick={() => addOrderHandle()}
									>
				Add Order
									</Button>
								</form>
							)
						}
					</Box>

				</Box>
				}
			</Drawer> 
		</MuiPickersUtilsProvider>           
	);
}

export default AddPanel;


AddPanel.propTypes = {
	addView: PropTypes.bool.isRequired,
	setAddView: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired
};