import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './styles.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<button class={styles.button} key={shortid.generate()} type="button" name={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;