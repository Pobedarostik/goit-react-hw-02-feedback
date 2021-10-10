import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css'

const Section = ({ title, children }) => {
	return (
		<>
			<h2 class={styles.title}>{title}</h2>
			{children}
		</>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired
};
export default Section;