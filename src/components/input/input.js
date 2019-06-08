import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({onChange, value , onKeyPress}) => (
	<span className="input input--minoru">
		<div className="inputWrapper">
			<input className="input__field input__field--yoko"
			   placeholder="Click to search"
			   onChange={onChange}
			   onKeyPress={onKeyPress}
			   value={value}/>
			<label className="input__label input__label--yoko" htmlFor="input-16">
				<span className="input__label-content input__label-content--yoko">Click to search</span>
			</label>
		</div>
	</span>
);

Input.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	onKeyPress: PropTypes.func
};

Input.defaultProps = {
	onChange: () => {},
	onKeyPress: () => {},
	value: ''
};

export default Input
