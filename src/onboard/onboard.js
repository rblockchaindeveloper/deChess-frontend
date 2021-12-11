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
        connector.getProvider().then(provider => {
            // Instantiate web3.js
            const instance = new Web3(provider)
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
            didGetUserName ?

                <Redirect to={"/game/" + gameId}><button className="btn btn-success" style={{ marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px" }}>Start Game</button></Redirect>

                :
                <div>
                    <h1 style={{ textAlign: "center", marginTop: String((window.innerHeight / 3)) + "px" }}>Your Account :</h1>
                    <p>{web3jsInstance ? `${account}` : ':('}</p>
                    <h1 style={{ textAlign: "center", marginTop: String((window.innerHeight / 3)) + "px" }}>Your Username:</h1>

                    <input style={{ marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px" }}
                        value={inputText}
                        onChange={typingUserName}></input>

                    <button className="btn btn-primary"
                        style={{ marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px", marginTop: "62px" }}
                        disabled={!(inputText.length > 0)}
                        onClick={() => {
                            props.didRedirect()
                            props.setUserName(inputText)
                            setDidGetUserName(true)
                            send()
                        }}>Submit</button>
                </div>
        }
    </React.Fragment>)
}

const Onboard = (props) => {
    const color = React.useContext(ColorContext)

    return <CreateNewGame didRedirect={color.playerDidRedirect} setUserName={props.setUserName} onWeb3Connect={props.onWeb3Connect}/>
}


export default Onboard