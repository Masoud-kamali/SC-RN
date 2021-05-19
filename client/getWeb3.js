import './global';
const Web3 = require('web3');

import Toast from 'react-native-simple-toast';

const getWeb3 = () =>
  new Promise((resolve, reject) => {

        const provider = new Web3.providers.HttpProvider(
          "http://10.0.2.2:7545"
        );
        const web3 = new Web3(provider);

        resolve(web3);
  });

export default getWeb3;
