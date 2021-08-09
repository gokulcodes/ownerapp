/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';
import {ReactSVG} from 'react-svg';
import {
	Box, 
	Typography, 
	makeStyles,
	Table,
	TableBody,
	TableCell,
	Button,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import OrderPanel from '../../components/Panels/OrderPanel';
import FilterListIcon from '@material-ui/icons/FilterList';
import  DELIVERED from '../../assets/svg/delivered.svg';
import  TODAYDELIVERIES from '../../assets/svg/todaydelivered.svg';
import * as colors from '../../uiconstants';
import jobStyles from './JobStyles';

function createData(jobid, drivername, customername, createdby, store, expectedtime) {
	return { jobid, drivername, customername, createdby, store, expectedtime};
}
  
const rows = [
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
	createData(213451, 'John Doe', 'Micheal', 'Micheal', 'Parap', '02:30 PM'),
];

const customerDetails = {
	name: 'John Doe',
	address: '35 Bayview Blvd, Bayview NT',
	phone: '9349059352'
};

const adminDetails = {
	name: 'Elliot Alderson',
	address: '35 Bayview Blvd, Bayview NT',
	phone: '9349059352'
};

function Card({title, svg, count}){
	const classes = jobStyles();

	return(
		<Box className={classes.deliveryCard}>
			<Box style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
				<ReactSVG src={svg} style={{paddingRight: 10}}/>
				<Typography variant='h1'>{title}</Typography>
			</Box>
			<Typography variant='h1' style={{
				fontWeight: 'bold', 
				fontSize: 36
			}}>{count}</Typography>
		</Box>
	);
}

function Delivered(){
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const [side, setSide] = useState(false);
	const classes = jobStyles();
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Box>
				<Box className={classes.cardsWrapper}>
					<Card title="Today Deliveries" count={20} svg={DELIVERED} />
					<Card title="Total Orders Delivered" count={1567} svg={TODAYDELIVERIES} />
				</Box>
				<Box className={classes.filterWrapper}>
					<Box className={classes.filterInnerContainer}>
						<Box className={classes.inputWrapper}>
							<FilterListIcon style={{fontSize: 28, marginRight: 40}} />
							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								format="MM/dd/yyyy"
								margin="normal"
								id="date-picker-inline"
								InputProps={{disableUnderline: true}}
								label="From"
								style={{
									marginRight: 30
								}}
								value={selectedDate}
								onChange={(e) => setSelectedDate(e)}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								format="MM/dd/yyyy"
								margin="normal"
								id="date-picker-inline"
								InputProps={{disableUnderline: true}}
								label="To"
								value={selectedDate}
								onChange={(e) => setSelectedDate(e)}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</Box>
						<Box className={classes.downloadButton}>
							<Button 
								variant="contained"
								disableElevation
								size="large"
								style={{
									backgroundColor: colors.PRIMARY,
									color: colors.LIGHT_100
								}}>
							Download CSV</Button>
						</Box>
					</Box>
				</Box>
				<TableContainer className={classes.tableContainer}>
					<Table className={classes.table}>
						<TableHead style={{backgroundColor: colors.LIGHT_200}}>
							<TableRow>
								<TableCell align="center">JobID</TableCell>
								<TableCell align="center">Driver Name</TableCell>
								<TableCell align="center">Customer Name</TableCell>
								<TableCell align="center">Created By</TableCell>
								<TableCell align="center">Store</TableCell>
								<TableCell align="center">Expected Time</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name} hover 
									onClick={() => {
										setSide(!side);
										console.log('clicked');
									}} 
									className={classes.tableContent}>
									<TableCell component="th" scope="row" align="center">
										{row.jobid}
									</TableCell>
									<TableCell align="center">{row.drivername}</TableCell>
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
					type="delivered" 
					status="delivered"
					drivername="Michal Johnson"
					customerDetails={customerDetails}
					time="12:02:01"
					adminDetails={adminDetails}
					instructions="Original 35 Bayview Blvd, Australia"
				/>


			</Box>
		</MuiPickersUtilsProvider>

	);
}

export default Delivered;

Card.propTypes ={
	title: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	svg: PropTypes.string.isRequired
};