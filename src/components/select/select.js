import React from 'react';
import PropTypes from 'prop-types';

import './select.css';

const Select = ({handleChange, options, value}) => (
	<div className="selectWrapper">
		<select value={value} onChange={handleChange}>
			{options.map(({value, label}) =>
				<option key={value} value={value}>{label}</option>
			)}
		</select>
		<span className="selectText">per page</span>
	</div>
);

Select.propTypes = {
	handleChange: PropTypes.func,
	options: PropTypes.array,
	value: PropTypes.number,
};

Select.defaultProps = {
	handleChange: () => {},
	options: [],
	value: 0,
};


export default Select
