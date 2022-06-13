import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './store/asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/reducers/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash});
  };

  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash});
  };

  const addCustomer =  (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{fontSize: '3em', textAlign: 'center'}}>{cash}</div>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      <div className='customers'>
        {customers.length > 0 ?
          <div>
            {customers.map(customer => 
              <div onClick={() => removeCustomer(customer)} style={{width: 'fit-content', fontSize: '2em', border:'1px solid black', padding: 5, marginTop: 5}}>
                {customer.name}
              </div>  
            )}
          </div>
          :
          <div style={{fontSize: '2em', marginTop: 20, textAlign: 'center'}}>
            Клиенты отсутствуют!
          </div>
        }
      </div>
    </div>
  );
}

export default App;
