/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import { 
	Typography,
	Box,
	Button,
	TextField,
} from '@material-ui/core';
import * as colors from '../../uiconstants';
import {ReactSVG} from 'react-svg';
import {Autocomplete} from '@material-ui/lab';
import {useHistory} from 'react-router-dom';
import GLOGO from '../../assets/svg/common.svg';
import authStyles from './AuthStyles';
import globalStyles from '../../Styles/GlobalStyles';

const storeNameArray = [
	{type: 'Alawa'},
	{type: 'Parap'}
];


export default function Login() {
	const classes = authStyles();
	const common = globalStyles();
	const history = useHistory();
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [storeName, setstoreName] = useState(storeNameArray[0].type);
	function loginHandle() {
		if(password&&emailAddress){
			history.push(`/${storeName}/dash`);
		}
	}
	return (
		<Box className={classes.root}>
			<Box className={classes.loginPart}>
				<ReactSVG src={GLOGO} style={{marginBottom: 10}} />
				<Typography variant="h1" style={{fontSize: 36, marginBottom: 10}}>
				GetIt Account
				</Typography>
				<Typography variant="h1" style={{color: colors.DARK_300, marginBottom: 30}}>
				Please enter the credentials
				</Typography>
				<Box>
					<TextField 
						label="Email Address" 
						variant="filled" 
						value={emailAddress}
						InputProps={{disableUnderline: true}}
						type="email"
						onChange={(e) =>  setEmailAddress(e.target.value)}
						required 
						className={common.inputStyles}
					/>
					<TextField 
						label="Password" 
						variant="filled" 
						InputProps={{disableUnderline: true}}
						value={password}
						type="password"
						onChange={(e) =>  setPassword(e.target.value)}
						required 
						className={common.inputStyles}
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
					<Button 
						variant="contained" 
						color="primary" 
						disableElevation 
						className={common.bigButton}
						onClick={() => loginHandle()}
					>
				Login
					</Button>
				</Box>
			</Box>
			<Box className={[classes.loginPart, classes.loginRightStyles]}>
				{/* <ReactSVG src={LOGINSVG} style={{marginBottom: 10}} /> */}
			</Box>
		</Box>
	);
}
