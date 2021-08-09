/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from 'react';
import {
	Box, 
	Typography, 
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Fab
} from '@material-ui/core';
import {ReactSVG} from 'react-svg';
import AddIcon from '@material-ui/icons/Add';
import  LIVESVG from '../../assets/svg/livejobs.svg';
import OrderPanel from '../../components/Panels/OrderPanel';
import AddPanel from '../../components/Panels/AddPanel';
import jobStyles from './JobStyles';
import globalStyles from '../../Styles/GlobalStyles';
import * as colors from '../../uiconstants';

function createData(jobid, drivername, status, customername, createdby, store, expectedtime) {
	return { jobid, drivername, status, customername, createdby, store, expectedtime};
}
  
const rows = [
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'onRoad', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
];

const customerDetails = {
	name: 'John Doe',
	title: 'Customer Details',
	address: '35 Bayview Blvd, Bayview NT',
	phone: '9349059352'
};

const adminDetails = {
	name: 'Elliot Alderson',
	title: 'Admin Details',
	address: '35 Bayview Blvd, Bayview NT',
	phone: '9349059352'
};

function LiveOrders(){
	const classes = jobStyles();    
	const common = globalStyles();
	const [side, setSide] = useState(false);
	const [addView, setAddView] = useState(false);
	
	return (
			
		<Box>
			<Box className={classes.deliveryCard}>
				<Box className={classes.cardsWrapper}>
				    <ReactSVG src={LIVESVG} style={{paddingRight: 10}}/>
					<Typography variant='h1'>Live Orders</Typography>
				</Box>
				<Typography variant='h1' style={{
					fontWeight: 'bold', 
					fontSize: 36
				}}>1, 502</Typography>
			</Box>

			<TableContainer className={classes.tableContainer}>
				<Table className={classes.table}>
					<TableHead style={{backgroundColor: colors.LIGHT_100}}>
						<TableRow>
							<TableCell align="center">JobID</TableCell>
							<TableCell align="center">Driver Name</TableCell>
							<TableCell align="center">Order Status</TableCell>
							<TableCell align="center">Customer Name</TableCell>
							<TableCell align="center">Created By</TableCell>
							<TableCell align="center">Store</TableCell>
							<TableCell align="center">Expected Time</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} hover 
								onClick={() => setSide(true)} 
								className={classes.tableContent}>
								<TableCell component="th" scope="row" align="center">
									{row.jobid}
								</TableCell>
								<TableCell align="center">{row.drivername}</TableCell>
								<TableCell align="center">
									<Typography className={classes.tagStyle}>
										{row.status}
									</Typography>
								</TableCell>
								<TableCell align="center">{row.customername}</TableCell>
								<TableCell align="center">{row.createdby}</TableCell>
								<TableCell align="center">{row.store}</TableCell>
								<TableCell align="center">{row.expectedtime}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			
			<OrderPanel 
				side={side}
				setSide={setSide}
				type="liveorder" 
				status="ONROAD"
				drivername="Michal Johnson"
				customerDetails={customerDetails}
				time="12:02:01"
				adminDetails={adminDetails}
				instructions="Original 35 Bayview Blvd, Australia"
			/>
			
			<Box className={common.bottomFixed}>
				<Fab 
					variant="extended" 
					onClick={() => setAddView(!addView)}
					style={{
						backgroundColor: colors.PRIMARY, 
						color: 'white'
					}}>
					<AddIcon  />
						Add Job
				</Fab>
			</Box>
			<AddPanel 
				addView={addView} 
				setAddView={setAddView}
				type="job"
			/>
		</Box>
	);
}

export default LiveOrders;