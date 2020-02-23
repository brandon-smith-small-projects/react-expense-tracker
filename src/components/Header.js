import PropTypes from 'prop-types';
import React from 'react';

export const Header = props => {
	const { title } = props;
	return <h2>{title}</h2>;
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};
