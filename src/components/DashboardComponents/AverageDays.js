import React from 'react';
import {Typography, Box} from '@material-ui/core';
import { Pie } from '@ant-design/charts';
import {DaysStyles} from './CardStyles';

var data = [
	{
		type: 'Monday',
		value: 27,
	},
	{
		type: 'Tuesday',
		value: 25,
	},
	{
		type: 'Wednesday',
		value: 18,
	},
	{
		type: 'Thursday',
		value: 15,
	},
	{
		type: 'Friday',
		value: 10,
	},
	{
		type: 'Saturday',
		value: 5,
	},
	{
		type: 'Sunday',
		value: 5,
	},
];


export default function PieChart() {
	var config = {
		appendPadding: 10,
		data: data,
		angleField: 'value',
		colorField: 'type',
		radius: 0.9,
		label: {
			type: 'inner',
			offset: '-30%',
			content: function content(_ref) {
				var percent = _ref.value;
				return percent;
			},
			style: {
				fontSize: 14,
				textAlign: 'center',
			},
		},
		interactions: [{ type: 'element-active' }],
	};
	
	const classes = DaysStyles();
	return (
		<Box className={classes.root}>
			<Typography variant='h2' style={{ margin: 20, fontWeight: 500 }}>
				Average by days of Week</Typography>
			<Box className={classes.pieWrapper}>
				<Pie {...config} />

			</Box>
		</Box>
	);
}
