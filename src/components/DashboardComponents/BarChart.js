/* eslint-disable no-unused-vars */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import { Area } from '@ant-design/charts';
import {BarStyles} from './CardStyles';

const hrData = [
	{ time: '9AM', orders: 10 },
	{ time: '10AM', orders: 12 },
	{ time: '11AM', orders: 6 },
	{ time: '12AM', orders: 7 },
	{ time: '01PM', orders: 14 },
	{ time: '02PM', orders: 24 },
	{ time: '03PM', orders: 18 },
	{ time: '04PM', orders: 3 },
	{ time: '05PM', orders: 6 },
	{ time: '06PM', orders: 10 },
	{ time: '07PM', orders: 11 },
	{ time: '08PM', orders: 16 },
];
const weekData = [
	{ date: '02/01', orders: 40 },
	{ date: '03/01', orders: 32 },
	{ date: '04/01', orders: 41 },
	{ date: '05/01', orders: 60 },
	{ date: '06/01', orders: 11 },
	{ date: '07/01', orders: 20 },
	{ date: '08/01', orders: 80 },
	{ date: '09/01', orders: 100 },
	{ date: '10/01', orders: 10 }
];
var config = (handle) => {
	return {
		data: handle === 'hours' ? hrData : weekData,
		xField: handle === 'hours' ? 'time' : 'date',
		yField: 'orders',
		smooth: true,
		label: {},
		point: {
			size: 5,
			shape: 'diamond',
			style: {
				fill: 'white',
				stroke: '#5B8FF9',
				lineWidth: 2,
			},
		},
		tooltip: { showMarkers: false },
		state: {
			active: {
				style: {
					shadowColor: 'yellow',
					shadowBlur: 4,
					stroke: 'transparent',
					fill: 'red',
				},
			},
		},
		theme: {
			geometries: {
				point: {
					diamond: {
						active: {
							style: {
								shadowColor: '#FCEBB9',
								shadowBlur: 2,
								stroke: '#F6BD16',
							},
						},
					},
				},
			},
		},
		interactions: [{ type: 'marker-active' }],
		areaStyle: function areaStyle() {
			return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
		},
	};
};

export default function BarChart({title, handle, displayDate}) {
	const classes =  BarStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.headerWrapper}>
				<Typography variant='h2' style={{ margin: 20, fontWeight: 500 }}>
					{title}</Typography>
				{displayDate ? 
					<Typography variant='h2' 
						style={{ margin: 20, fontWeight: 500 }}
					>{new Date().toDateString().slice(0, 10)}
					</Typography> : 
					<Fragment />}
				
			</Box>
			<Box className={classes.chartWrapper}>
				<Area 
					style={{width: '92%', height:'96%'}}
					{...config(handle)}
				/> 
			</Box>
		</Box>
	);
}

BarChart.propTypes = {
	title: PropTypes.string.isRequired,
	handle: PropTypes.string.isRequired,
	displayDate: PropTypes.bool
};

BarChart.defaultProps = {
	displayDate: false
};
