/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import {
	Drawer,
	Box,
	Typography,
	Button,
	IconButton,
	Dialog,
	DialogActions, 
	DialogTitle,
	Slide, 
	DialogContent, 
	TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	TimePicker
} from '@material-ui/pickers';
import * as colors from '../../uiconstants';
import CloseIcon from '@material-ui/icons/Close';
import {Autocomplete} from '@material-ui/lab';
import {orderPanel, commonPanelStyles} from './PanelStyles';
import globalStyles from '../../Styles/GlobalStyles';


const drivers = [
	{driverName: 'drivername'},
	{driverName: 'drivername'},
	{driverName: 'drivername'},

];

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const InfoCard = ({details}) => {
	const panelCommon = commonPanelStyles();
	return (
		<Box className={panelCommon.actorCard}>
			<Box className={panelCommon.cardsWrapper}>
				<Typography 
					variant="h3" 
					style={{
						color: colors.DARK_200, 
						textTransform: 'uppercase'
					}}>
					{details.title}</Typography>
				<Typography variant="h1" 
					style={{
						marginTop: 5, 
						fontSize: 28,
						color: colors.DARK_400
					}}>
					{details.name}
				</Typography>

				<Typography variant="h1" style={{marginTop: 10, color: colors.DARK_300}}>
					{details.address}
				</Typography>

				<Typography variant="h1" style={{marginTop: 10, color: colors.DARK_300}}>
					{details.phone}
				</Typography>
			</Box>
		</Box>
	);
};

function OrderPanel({
	side, 
	setSide, 
	type, 
	status,
	drivername,
	customerDetails,
	adminDetails,
	time
}) {
	const classes = orderPanel();
	const common = globalStyles();
	const panelCommon = commonPanelStyles();

	const [dateOpen, setdateOpen] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [selectedDate, handleDateChange] = React.useState(new Date().toTimeString().slice(0, 8));

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<TimePicker 
				open={dateOpen}
				showTodayButton
				todayLabel="Now"
				value={selectedDate}
				minutesStep={5}
				TextFieldComponent={() => null} 
				onChange={date => {
					handleDateChange(date.toTimeString().slice(0, 8)); 
					setdateOpen(false);
				}}
			/>
			<Drawer 
				anchor="right"
				open={side} 
				BackdropProps={{
					style: {
						backdropFilter: 'blur(3px)',
					}
				}}
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
								<CloseIcon style={{fontSize: 24, color: 'black'}} />
							</IconButton>
							<Typography 
								variant="h1"
								style={{
									fontSize: 24
								}}
							>Job ID: 21313</Typography>
						</Box>
						<Box className={classes.tagStyle}>
							{status}
						</Box>
					</Box>
					{/* drivername */}
					<Box className={panelCommon.actorCard}>
						<Box className={panelCommon.cardsWrapper}>
							<Typography 
								variant="h3" 
								style={{color: colors.DARK_200}}>
									DRIVER
							</Typography>
							<Typography 
								variant="h1"
								style={{
									marginTop: 5, 
									fontSize: 24
								}}>{drivername}</Typography>
						</Box>
						{type === 'liveorder' && 
                            <Button 
                            	variant="outlined"
                            	size="large"
                            	onClick={() => setOpen(!open)}
                            	disableElevation
                            	style={{
                            		color: colors.PRIMARY
                            	}}
                            >Reassign</Button>
						}
					</Box>
					<InfoCard details={customerDetails} />
					{/* expectedtimes */}
					<Box className={panelCommon.actorCard}>
						<Box className={panelCommon.cardsWrapper}>
							<Typography 
								variant="h3" 
								style={{color: colors.DARK_200, textTransform: 'uppercase'}}>
								{type === 'delivered' ? 'DELIVERED TIME' : 'Expected Time'}
							</Typography>
							<Typography 
								variant="h1" 
								style={{marginTop: 5}}>
								{time}
							</Typography>
						</Box>
						{type === 'liveorder' && 
                            <Button 
                            	variant="outlined" 
                            	size="large"
                            	disableElevation
                            	onClick={() => setdateOpen(!dateOpen)}
                            	style={{
                            		color: colors.PRIMARY
                            	}}>
                            Edit
                            </Button>
						}
					</Box>

					<InfoCard details={adminDetails} />
					{/* instructions */}
					<Box className={panelCommon.actorCard}>
						<Box className={panelCommon.cardsWrapper}>
							<Typography 
								variant="h3" 
								style={{color: colors.DARK_200, textTransform: 'uppercase'}}>
								INSTRUCTIONS</Typography>
							<Typography 
								variant="h1" 
								style={{marginTop: 5}}>
									Original  35 Bayview Blvd, Australia
							</Typography>
						</Box>
					</Box>

					<Box className={common.bottomFixed}>
						
						{type === 'delivered' ? <Button 
							onClick={() => setSide(!side)}
							variant="contained"
							disableElevation
							size="large"
							color="primary"
						>
						Close
						</Button>:
							<>
								<Button 
									variant="contained" 
									disableElevation
									size="large"
									className={common.errorButton}
								>
						Delete Job</Button>
								<Button 
									variant="contained"
									disableElevation
									size="large"
									color="primary"
								>
						Update Job</Button>
							</>}
					</Box>
				</Box>
				}
			</Drawer>     
			<Dialog
				open={open}
				onClose={() => setOpen(!open)}
				TransitionComponent={Transition}
				BackdropProps={{
					style: {
						backdropFilter: 'blur(3px)',
					}
				}}
			>
				<DialogContent className={classes.dialogWrapper}>
					<DialogTitle>Change Driver</DialogTitle>
                
					<Autocomplete
						// id="combo-box-demo"
						options={drivers}
						getOptionLabel={(option) => option.driverName}
						style={{ width: 400, backgroundColor:  '#FAFAFC' }}
						renderInput={(params) => 
							<TextField {...params} label="Select Driver" variant="outlined" />
						}
					/>
					<DialogActions style={{marginTop: 20}}>
						<Button 
							variant="contained" 
							disableElevation 
							onClick={() => setOpen(!open)}>
                                Discard
						</Button>
						<Button 
							variant="contained" 
							color="primary" 
							disableElevation 
							onClick={() => setOpen(!open)}>
                            Assign
						</Button>
					</DialogActions>
						
					
				</DialogContent>
			</Dialog>       
		</MuiPickersUtilsProvider>
	);
}

export default OrderPanel;

OrderPanel.propTypes = {
	side: PropTypes.bool.isRequired,
	setSide: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
	drivername: PropTypes.string.isRequired,
	customerDetails: PropTypes.object.isRequired,
	time: PropTypes.string.isRequired,
	adminDetails: PropTypes.object.isRequired
};

InfoCard.propTypes = {
	details: PropTypes.object.isRequired
};