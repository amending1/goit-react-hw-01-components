import PropTypes from 'prop-types';
import css from './transaction.module.css';


function TransactionHistory ({items}) {
return (
    <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {items.map((transaction) => (
               <tr key={transaction.id}>
               <td>{transaction.type}</td>
               <td>{transaction.amount}</td>
               <td>{transaction.currency}</td>
           </tr>
        ))}      
    </tbody>
  </table> 
);
};

TransactionHistory.propTypes = {
  items: PropTypes.shape({ id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    likes: PropTypes.string.isRequired,}).isRequired,   
}


export default TransactionHistory;