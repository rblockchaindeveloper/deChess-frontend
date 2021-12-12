import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import JoinRoom from './onboard/joinroom'
import { ColorContext } from './context/colorcontext'
import Onboard from './onboard/onboard'
import JoinGame from './onboard/joingame'
import ChessGame from './chess/ui/chessgame'

import Web3Provider from './Web3Provider';
import Connect from './Connect';
import Web3 from 'web3'
const contractData = require('./contractData')
const val = '1';


function App() {

  const [didRedirect, setDidRedirect] = React.useState(false)
  const [web3, setWeb3] = useState('')
  const [contractAddress, setContractAddress] = useState('')

  const playerDidRedirect = React.useCallback(() => {
    setDidRedirect(true)
  }, [])

  const playerDidNotRedirect = React.useCallback(() => {
    setDidRedirect(false)
  }, [])

  const onWeb3Connect = (web3) => {
    setWeb3(web3)
  }




  useEffect(() => {
    if (didRedirect && web3) {
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          console.error(err)
        } else {
          console.log(web3.eth)
          web3.eth.defaultAccount = accounts[0]
          console.log(web3.eth)
          let Contract = new web3.eth.Contract(contractData.abi, null, {
            from: accounts[0],
            value: web3.utils.toWei(val),
            data: contractData.bytecode.object,
            gas: 4712388,
          })
            .deploy({
              value: web3.utils.toWei(val),
              data: contractData.bytecode.object,
            }).send({
              value: web3.utils.toWei(val),
              from: accounts[0]
            }).on('receipt', function (receipt) {
              setContractAddress(receipt.contractAddress)
              console.log(receipt.contractAddress) // contains the new contract address
            })
          }
        })
      }
    }, [didRedirect])

  const [userName, setUserName] = React.useState('')

  return (
    <ColorContext.Provider value={{ didRedirect: didRedirect, playerDidRedirect: playerDidRedirect, playerDidNotRedirect: playerDidNotRedirect }}>
      <Web3Provider>
        <Connect>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Onboard setUserName={setUserName} onWeb3Connect={onWeb3Connect} contractAddress={contractAddress}/>
              </Route>
              <Route path="/game/:gameid/:contractAddress" exact>
                {didRedirect ?
                  <React.Fragment>
                    <JoinGame userName={userName} isCreator={true} />
                    <ChessGame myUserName={userName} web3={web3} contractAddress={contractAddress}/>
                  </React.Fragment>
                  :
                  <JoinRoom/>
                }
              </Route>
              <Redirect to="/" />
            </Switch>
          </Router>
        </Connect>
      </Web3Provider>
    </ColorContext.Provider>);
}

export default App;
