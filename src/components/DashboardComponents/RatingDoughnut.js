import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { Pie } from '@ant-design/charts';
import {DaysStyles} from './CardStyles';

var data = [
	{
		type: '1 Star',
		value: 27,
	},
	{
		type: '2 Star',
		value: 25,
	},
	{
		type: '3 Star',
		value: 18,
	},
	{
		type: '4 Star',
		value: 15,
	},
	{
		type: '5 Star',
		value: 18,
	},
];

export default function RatingDoughnut() {

	var config = {
		appendPadding: 10,
		data: data,
		angleField: 'value',
		colorField: 'type',
		radius: 1,
		innerRadius: 0.6,
		label: {
			type: 'inner',
			offset: '-50%',
			content: '{value}',
			style: {
				textAlign: 'center',
				fontSize: 12,
			},
		},
		interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
		statistic: {
			title: false,
			content: {
				style: {
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				},
				formatter: function formatter() {
					return 'Total Review';
				},
			},
		},
	};
	const classes = DaysStyles();

	return (
		<Box className={classes.root}>
			<Typography variant='h1' style={{ margin: 20, fontWeight: 500 }}>
				Ratings</Typography>
			<Box className={classes.pieWrapper}>
				<Pie {...config} />
			</Box>
		</Box>
	);
}
