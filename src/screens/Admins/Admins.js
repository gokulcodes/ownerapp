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
import ADMIN from '../../assets/svg/admin.svg';
import AddPanel from '../../components/Panels/AddPanel';
import SidePanel from '../../components/Panels/SidePanel';
import Layout from '../../components/Layout';
import * as colors from '../../uiconstants';
import AdminStyles from './AdminStyles';
import globalStyles from '../../Styles/GlobalStyles';

function createData(adminid, adminname, status, emailid, phonenumber, ordersCreated, ordersDelivered) {
	return { adminid, adminname, status, emailid, phonenumber, ordersCreated, ordersDelivered};
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
	const classes = AdminStyles();   
	const common = globalStyles(); 
	const [side, setSide] = useState(false);
	const [addView, setAddView] = useState(false);

	return (
		<Layout index={3} title="Admin">
			<Box style={{
				padding: 10,
			}}>
				<Box className={classes.onlineCard}>
					<Box style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
				    <ReactSVG src={ADMIN} style={{paddingRight: 10}}/>
						<Typography variant='h1'>Total Admin’s Online</Typography>
					</Box>
					<Typography variant='h1' style={{
						fontWeight: 'bold', 
						fontSize: 36
					}}>
						4
					</Typography>
				</Box>

				<TableContainer className={classes.tableContainer}>
					<Table className={classes.table}>
						<TableHead style={{backgroundColor: colors.LIGHT_200}}>
							<TableRow>
								<TableCell align="center">Admin ID</TableCell>
								<TableCell align="center">Admin Name</TableCell>
								<TableCell align="center">Status</TableCell>
								<TableCell align="center">Email ID</TableCell>
								<TableCell align="center">Phone Number</TableCell>
								<TableCell align="center">Orders Created</TableCell>
								<TableCell align="center">Orders Delivered</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name} hover 
									onClick={() => setSide(true)} 
									className={classes.tableContent}>
									<TableCell component="th" scope="row" align="center">
										{row.adminid}
									</TableCell>
									<TableCell align="center">{row.adminname}</TableCell>
									<TableCell align="center">
										<Typography className={classes.tagStyle}>
											{row.status}
										</Typography>
									</TableCell>
									<TableCell align="center">{row.emailid}</TableCell>
									<TableCell align="center">{row.phonenumber}</TableCell>
									<TableCell align="center">{row.ordersCreated}</TableCell>
									<TableCell align="center">{row.ordersDelivered}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			
				<Box className={common.bottomFixed}>
					<Fab 
						variant="extended" 
						onClick={() => setAddView(!addView)}
						style={{
							backgroundColor: colors.PRIMARY, 
							color: colors.LIGHT_100
						}}>
						<AddIcon  />
						Add Admin
					</Fab>
				</Box>
				<AddPanel 
					addView={addView} 
					setAddView={setAddView}
					type="admin"
				/>
				<SidePanel 
					side={side} 
					setSide={setSide} 
					type="admin" 
				/>
			</Box>
		</Layout>
	);
}

export default Drivers;