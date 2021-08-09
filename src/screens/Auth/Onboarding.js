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
import {useHistory, useParams} from 'react-router-dom';
import GLOGO from '../../assets/svg/common.svg';
import globalStyles from '../../Styles/GlobalStyles';
import authStyles from './AuthStyles';

export default function Onboarding() {
	const classes = authStyles();
	const common = globalStyles();
	const history = useHistory();
	const {id} = useParams();
	const [emailAddress, setEmailAddress] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [password, setPassword] = useState('');
	function loginHandle() {
		if(password&&emailAddress){
			history.push('/');
		}
	}
	return (
		<Box className={classes.root}>
			<Box className={classes.loginPart}>
				<ReactSVG src={GLOGO} style={{marginBottom: 10}} />
				<Typography variant="h1" style={{fontSize: 36, marginBottom: 10}}>
				Hello, {id.charAt(0).toUpperCase() + id.slice(1, id.length)}
				</Typography>
				<Typography variant="h1" style={{color: colors.DARK_300, marginBottom: 30}}>
				Create your password to get access
				</Typography>
				<Box style={{width: '60%'}}>
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
						label="Phone Number" 
						variant="filled" 
						value={phoneNumber}
						InputProps={{disableUnderline: true}}
						type="tel"
						onChange={(e) =>  setPhoneNumber(e.target.value)}
						required 
						className={common.inputStyles}
					/>
					<TextField 
						label="Confirm Password" 
						variant="filled" 
						value={confirmPassword}
						InputProps={{disableUnderline: true}}
						type="password"
						onChange={(e) =>  setConfirmPassword(e.target.value)}
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
					<Button 
						variant="contained" 
						color="primary" 
						disableElevation 
						className={common.bigButton}
						onClick={() => loginHandle()}
					>
				Create Account
					</Button>
				</Box>
			</Box>
			<Box className={[classes.loginPart, classes.loginRightStyles]}>
				{/* <ReactSVG src={LOGINSVG} style={{marginBottom: 10}} /> */}
			</Box>
		</Box>
	);
}
