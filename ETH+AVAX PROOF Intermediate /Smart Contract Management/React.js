import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const SimpleContract = () => {
  const [contract, setContract] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loadContract = async () => {
      // Connect to the local Ethereum node
      if (window.ethereum) {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const networkId = await web3.eth.net.getId();
        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with the actual contract address

        // Load the contract
        const contractJson = require('./contracts/SimpleContract.json');
        const contract = new web3.eth.Contract(contractJson.abi, contractAddress);
        setContract(contract);
      }
    };

    loadContract();
  }, []);

  const getMessage = async () => {
    const result = await contract.methods.getMessage().call();
    setMessage(result);
  };

  const setMessage = async () => {
    // Your logic to set the message in the contract
  };

  return (
    <div>
      <button onClick={getMessage}>Get Message</button>
      <p>Message: {message}</p>
    </div>
  );
};

export default SimpleContract;
