import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <button onClick={() => depositMoney(10)}>Depositar 10</button>
      <button onClick={() => withdrawMoney(5)}>Sacar 5</button>
      <h1>{account}</h1>
    </div>
  );
}

export default App;
