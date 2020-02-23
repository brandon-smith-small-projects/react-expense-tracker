import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import PropTypes from 'prop-types';

export const TransactionItem = ({ transaction }) => {
	const { text, amount, id } = transaction;
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = amount < 0 ? '-' : '+';
	const className = amount < 0 ? 'minus' : 'plus';

	return (
		<li className={className}>
			{text}{' '}
			<span>
				{sign}${Math.abs(amount)}
			</span>
			<button className='delete-btn' onClick={() => deleteTransaction(id)}>
				x
			</button>
		</li>
	);
};

TransactionItem.propTypes = {
	amount: PropTypes.number,
	text: PropTypes.string,
};
