/* eslint-disable no-undef */
import React from 'react';
import { Box } from '@material-ui/core';
import styles from './DashboardStyles';
import Layout from '../../components/Layout';
import StatusCards from '../../components/DashboardComponents/StatusCards';
import LiveJobs from '../../assets/svg/livejobs.svg';
import Drivers from '../../assets/svg/drivers.svg';
import TodayDeliveries from '../../assets/svg/todaydelivered.svg';
import Delivered from '../../assets/svg/delivered.svg';
import AverageDays from '../../components/DashboardComponents/AverageDays';
import RatingDoughnut from '../../components/DashboardComponents/RatingDoughnut';
import BarChart from '../../components/DashboardComponents/BarChart';

const infoValues = [
	{
		id: 1,
		svg: LiveJobs,
		title: 'Live Jobs',
		count: '20'
	},
	{
		id: 2,
		svg: Drivers,
		title: 'Drivers Online',
		count: '20'
	},
	{
		id: 3,
		svg: TodayDeliveries,
		title: 'Today Deliveries',
		count: '10'
	},
	{
		id: 4,
		svg: Delivered,
		title: 'Success Rates',
		count: '100%'
	},
];

export default function Dashboard() {
	const classes = styles();
	return (
		<Layout index={0} title="Dashboard">
			<Box className={classes.root}>
				<Box className={classes.responsiveWrapper}>
					<Box className={classes.cardsWrapper}>
						{infoValues.map(item => (
							<StatusCards
								key={item.id}
								SVG={item.svg}
								count={item.count}
								title={item.title}
							/>
						))}
					</Box>
					<Box className={classes.responsiveWrapper}>
						<Box className={classes.jobsRating}>
							<BarChart handle="hours" title="Jobs by hour of days" displayDate/>
							<RatingDoughnut />
						</Box>
						<Box className={classes.jobsRating}>
							<AverageDays />
							<BarChart handle="weeks" title="Jobs by days of weeks" />
						</Box>
					</Box>
				</Box>
			</Box>
		</Layout>
	);
}
