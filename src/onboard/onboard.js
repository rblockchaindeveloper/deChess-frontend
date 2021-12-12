import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import uuid from 'uuid/v4'
import { ColorContext } from '../context/colorcontext'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
const socket = require('../connection/socket').socket
function CreateNewGame(props) {
    const [didGetUserName, setDidGetUserName] = useState(false)
    const [inputText, setInputText] = useState('')
    const [gameId, setGameId] = useState('')
    const { active, connector } = useWeb3React()
    const [web3jsInstance, setWeb3jsInstance] = useState(null)
    const [account, setAccount] = useState('')

    useEffect(() => {
        connector.getProvider().then(async provider => {
            // Instantiate web3.js
            await window.ethereum.enable() //changed
            const provider1 = window['ethereum'] //changed
            const instance = new Web3(provider1) //changed
            setWeb3jsInstance(instance)
            props.onWeb3Connect(instance)
        })
    }, [active, connector])
    useEffect(() => {
        if (web3jsInstance === null) {
            return
        }
        web3jsInstance.eth.getAccounts((err, accounts) => {
            if (err) {
                console.error(err)
            } else {
                setAccount(accounts[0])
            }
        })
    }, [web3jsInstance])

    const send = () => {
        const newGameRoomId = uuid()
        setGameId(newGameRoomId)
        socket.emit('createNewGame', newGameRoomId)
    }

    const typingUserName = (e) => {
        // grab the input text from the field from the DOM 
        const typedText = e.target.value
        setInputText(typedText)
    }
    return (<React.Fragment>
        {
            didGetUserName && props.contractAddress ?

                <Redirect to={`/game/${gameId}/${props.contractAddress}`}><button className="btn btn-success" style={{ marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px" }}>Start Game</button></Redirect>

                :
                <div className="big-wrapper light">
        <img src="./images/shape.png" alt="" className="shape" />
        <header>
          <div className="container">
            <div className="logo">
              <img src="./images/3.png" className="logo-img" height={70} width={200} alt="Logo" />
              <img src="./images/2.png" className="logo-img hide" height={70} width={200} alt="Logo" />
            </div>
            <div className="links">
              <ul>
                <li><a href="#">Open Challenges</a></li>
                <li><a href="#">How to play</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="overlay" />
            <div className="hamburger-menu">
              <div className="bar" />
            </div>
          </div>
        </header>
        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div className="col-sm-6 col-sm-push-3 col-md-4 col-md-push-4">
                <div className="panel panel-default">
                  <div className="panel-body text">


                  <div>
                  <h3>Create new challenge!</h3>
                      <h5>Username:</h5>
  
                          <input
                          value={inputText}
                          onChange={typingUserName}></input>
  
                      <button className="btn btn-primary"
                          disabled={!(inputText.length > 0)}
                          onClick={() => {
                              props.didRedirect()
                              props.setUserName(inputText)
                              setDidGetUserName(true)
                              send()
                          }}>Submit</button>
                  </div>


                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="./images/vector.png" height={600} width={100} alt="Knight" className="person" />
            </div>
          </div>
        </div>
        <div className="bottom-area">
          <div className="container">
            <button className="toggle-btn">
              <i className="far fa-moon" />
              <i className="far fa-sun" />
            </button>
          </div>
        </div>
      </div>
        }
    </React.Fragment>)
}

const Onboard = (props) => {
    const color = React.useContext(ColorContext)

    return <CreateNewGame didRedirect={color.playerDidRedirect} setUserName={props.setUserName} onWeb3Connect={props.onWeb3Connect} contractAddress={props.contractAddress}/>
}


export default Onboard