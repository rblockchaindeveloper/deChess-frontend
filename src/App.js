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

/*
 *  Frontend flow: 
 * 
 * 1. user first opens this app in the browser. 
 * 2. a screen appears asking the user to send their friend their game URL to start the game.
 * 3. the user sends their friend their game URL
 * 4. the user clicks the 'start' button and waits for the other player to join. 
 * 5. As soon as the other player joins, the game starts. 
 * 
 * 
 * Other player flow:
 * 1. user gets the link sent by their friend
 * 2. user clicks on the link and it redirects to their game. If the 'host' has not yet 
 *    clicked the 'start' button yet, the user will wait for when the host clicks the start button.  
 *    If the host decides to leave before they click on the "start" button, the user will be notified
 *    that the host has ended the session. 
 * 3. Once the host clicks the start button or the start button was already clicked on
 *    before, that's when the game starts. 
 * Onboarding screen =====> Game start. 
 * 
 * Every time a user opens our site from the '/' path, a new game instance is automatically created
 * on the back-end. We should generate the uuid on the frontend, send the request with the uuid
 * as a part of the body of the request. If any player leaves, then the other player wins automatically.  
 * 
 */


function App() {

  const [didRedirect, setDidRedirect] = React.useState(false)
  const [web3, setWeb3] = useState('')

  const playerDidRedirect = React.useCallback(() => {
    setDidRedirect(true)
  }, [])

  const playerDidNotRedirect = React.useCallback(() => {
    setDidRedirect(false)
  }, [])

  const onWeb3Connect = (web3) => {
    setWeb3(web3)
  }

  const val = '2';
  


  useEffect(() => {
    if (didRedirect && web3) {
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          console.error(err)
        } else {
          console.log(web3.eth)
          web3.eth.defaultAccount = accounts[0] 
          console.log(web3.eth)
            let Contract = new web3.eth.Contract(contractData.abi,null,{
              from:accounts[0],
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
                <Onboard setUserName={setUserName} onWeb3Connect={onWeb3Connect} />
              </Route>
              <Route path="/game/:gameid" exact>
                {didRedirect ?
                  <React.Fragment>
                    <JoinGame userName={userName} isCreator={true} />
                    <ChessGame myUserName={userName} />
                  </React.Fragment>
                  :
                  <JoinRoom />
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
