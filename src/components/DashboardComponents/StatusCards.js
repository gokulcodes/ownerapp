import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import {StatusStyles} from './CardStyles';


export default function StatusCards({ SVG, title, count}) {
	const classes = StatusStyles();
	return (
		<Box className={[classes.root]} >
			<Box className={classes.leftWrapper}>
				<ReactSVG src={SVG} />
				<Typography variant="h1" style={{ marginTop: 10, color: '#555770' }}>
					{title}</Typography>
			</Box>
			<Box className={classes.rightWrapper}>
				<Typography
					variant="h1"
					style={{ fontSize: 56, fontWeight: 'bold', color: '#28293D' }}>
					{count}
				</Typography>
			</Box>
		</Box>
	);
}

StatusCards.propTypes = {
	SVG: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	count: PropTypes.string.isRequired,
};