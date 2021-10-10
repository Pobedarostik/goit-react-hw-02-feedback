import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<>
			<p class={styles.good}>Good:{good}</p>
			<p class={styles.neutral}>Neutral:{neutral}</p>
			<p class={styles.bad}>Bad:{bad}</p>
			<p class={styles.item}>Total:{total}</p>
			<p class={styles.item}>Positive feedback:{positivePercentage} %</p>
		</>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};

export default Statistics;