/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Layout from '../../components/Layout';
import {Tabs, Tab } from '@material-ui/core';
import LiveOrders from './LiveOrders';
import Delivered from './Delivered';


function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
	  >
			{value === index && (
		  <Box p={1}>
					{children}
		  </Box>
			)}
	  </div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  justifyContent: 'space-between',
	  backgroundColor: theme.palette.background.paper,
	},
}));

export default function Jobs() {
	const [value, setValue] = useState(0);
	const classes = useStyles();
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	  };
	return (
		<Layout index={1} title="Jobs">
			<Tabs value={value} onChange={handleChange} className={classes.root} centered>
				<Tab label="LIVE Jobs" style={{fontSize: 16, padding: 20, width: '100%'}}/>
				<Tab label="DELIVERED" style={{fontSize: 16, padding: 20, width: '100%'}}/>
			</Tabs>
			<TabPanel value={value} index={0}>
				<LiveOrders/>
			</TabPanel>
	  <TabPanel value={value} index={1}>
				<Delivered />
			</TabPanel>
		</Layout>
	);
}
