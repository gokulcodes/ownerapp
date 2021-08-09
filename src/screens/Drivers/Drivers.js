/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from 'react';
import {
	Box, 
	Typography, 
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Fab
} from '@material-ui/core';

import {ReactSVG} from 'react-svg';
import {useParams} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import  DRIVERS from '../../assets/svg/drivers.svg';
import Layout from '../../components/Layout';
import SidePanel from '../../components/Panels/SidePanel';
import AddPanel from '../../components/Panels/AddPanel';
import * as colors from '../../uiconstants';
import DriverStyles from './DriverStyles';
import globalStyles from '../../Styles/GlobalStyles';


function createData(driverid, drivername, status, emailid, phonenumber, todayDeliveries, totalDeliveries) {
	return { driverid, drivername, status, emailid, phonenumber, todayDeliveries, totalDeliveries};
}
  
const rows = [
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
	createData(213451, 'John Doe', 'Online', 'johndoe@gmail.com', '902134 45234', '200', '20'),
];



function Drivers(){
	const classes = DriverStyles();  
	const {shop} = useParams();
	const common = globalStyles();
	const [side, setSide] = useState(false);
	const [addView, setAddView] = useState(false);
	
	return (
		<Layout index={2} title="Drivers">
			<Box style={{
				padding: 10,
			}}>
				<Box className={classes.onlineCard}>
					<Box style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
				    <ReactSVG src={DRIVERS} style={{paddingRight: 10}}/>
						<Typography variant='h1'>Total Drivers Online</Typography>
					</Box>
					<Typography variant='h1' style={{
						fontWeight: 'bold', 
						fontSize: 36
					}}>4</Typography>
				</Box>

				<TableContainer className={classes.tableContainer}>
					<Table className={classes.table}>
						<TableHead style={{backgroundColor: colors.LIGHT_200}}>
							<TableRow>
								<TableCell align="center">Driver ID</TableCell>
								<TableCell align="center">Driver Name</TableCell>
								<TableCell align="center">Status</TableCell>
								<TableCell align="center">Email ID</TableCell>
								<TableCell align="center">Phone Number</TableCell>
								<TableCell align="center">Today Deliveries</TableCell>
								<TableCell align="center">Total Deliveries</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name} hover 
									onClick={() => setSide(true)} 
									className={classes.tableContent}>
									<TableCell component="th" scope="row" align="center">
										{row.driverid}
									</TableCell>
									<TableCell align="center">{row.drivername}</TableCell>
									<TableCell align="center">
										<Typography className={classes.tagStyle}>
											{row.status}
										</Typography>
									</TableCell>
									<TableCell align="center">{row.emailid}</TableCell>
									<TableCell align="center">{row.phonenumber}</TableCell>
									<TableCell align="center">{row.todayDeliveries}</TableCell>
									<TableCell align="center">{row.totalDeliveries}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			
				<Box className={common.bottomFixed}>
					<Fab 
						onClick={() => setAddView(!addView)}
						variant="extended" 
						style={{
							backgroundColor: colors.PRIMARY, 
							color: colors.LIGHT_100
						}}>
						<AddIcon  />
						Add Driver
					</Fab>
				</Box>
				<AddPanel 
					addView={addView} 
					setAddView={setAddView}
					type="driver"
				/>
				<SidePanel side={side} setSide={setSide} type="driver" />
			</Box>
		</Layout>
	);
}

export default Drivers;

