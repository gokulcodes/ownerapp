/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import {
	Box, 
	Table,
	TableBody,
	TableCell,
	TableContainer,
	Button,
	TableHead,
	TableRow,
} from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import FilterListIcon from '@material-ui/icons/FilterList';
import DateFnsUtils from '@date-io/date-fns';
import * as colors from '../../uiconstants';
import Layout from '../../components/Layout';
import statStyles from './StatStyles';


function createData(date, drops, onTime, items) {
	return { date, drops, onTime, items};
}
  
const rows = [
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
	createData(213451, 'John Doe', 'Online', 20),
];

function Stats(){
	const classes = statStyles(); 
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>

			<Layout index={4} title="Statistics">
				<Box style={{
					padding: 10,
				}}>
					<Box className={classes.filterWrapper}>
						<Box className={classes.filterInnerContainer}>
							<Box className={classes.inputWrapper}>
								<FilterListIcon style={{fontSize: 28, marginRight: 40}} />
								<KeyboardDatePicker
									disableToolbar
									variant="inline"
									InputProps={{disableUnderline: true}}
									format="MM/dd/yyyy"
									margin="normal"
									id="date-picker-inline"
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
									InputProps={{disableUnderline: true}}
									id="date-picker-inline"
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
									color="primary">
							Download CSV</Button>
							</Box>
						</Box>
					</Box>
					<TableContainer className={classes.tableContainer}>
						<Table className={classes.table}>
							<TableHead style={{backgroundColor: colors.LIGHT_200}}>
								<TableRow>
									<TableCell align="center">Date</TableCell>
									<TableCell align="center">Drops</TableCell>
									<TableCell align="center">OnTime</TableCell>
									<TableCell align="center">Items</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.date} hover 
										className={classes.tableContent}>
										<TableCell component="th" scope="row" align="center">
											{row.date}
										</TableCell>
										<TableCell align="center">{row.drops}</TableCell>
										<TableCell align="center">{row.onTime}</TableCell>
										<TableCell align="center">{row.items}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Layout>
		</MuiPickersUtilsProvider>

	);
}

export default Stats;