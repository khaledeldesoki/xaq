import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Web3 from 'web3';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SalaryStream from './contracts/SalaryStream.json';

const App = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SalaryStream.networks[networkId];
        const contractInstance = new web3.eth.Contract(
          SalaryStream.abi,
          deployedNetwork && deployedNetwork.address
        );
        setContract(contractInstance);
      }
    };
    initWeb3();
  }, []);

  return (
    <div>
      <h1>Stream Payment Salary App</h1>
      <Switch>
        <Route path="/" exact component={TaskList} />
        <Route path="/new-task" component={TaskForm} />
      </Switch>
    </div>
  );
};

export default App;