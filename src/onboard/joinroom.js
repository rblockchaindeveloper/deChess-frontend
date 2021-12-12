import React, { useState, useEffect } from 'react'
import JoinGame from './joingame'
import ChessGame from '../chess/ui/chessgame'
import { useParams } from 'react-router'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
const contractData = require('../contractData')
const val = '1';


/**
 * Onboard is where we create the game room.
 */

function JoinRoom() {
    const [didGetUserName, setDidGetUserName] = useState(false)
    const [inputText, setInputText] = useState('')
    const { gameid, contractAddress } = useParams()
    const { active, connector } = useWeb3React()
    const [web3jsInstance, setWeb3jsInstance] = useState(null)

    console.log(gameid, contractAddress)

    useEffect(() => {
        connector.getProvider().then(async provider => {
            // Instantiate web3.js
            await window.ethereum.enable() //changed
            const provider1 = window['ethereum'] //changed
            const instance = new Web3(provider1) //changed
            setWeb3jsInstance(instance)
        })
    }, [active, connector])
    useEffect(() => {
        if (!web3jsInstance) return
        console.log("Web3 Contract For Second Player")
        let Contract = new web3jsInstance.eth.Contract(contractData.abi, contractAddress)
        Contract.methods.setupPlayer2().send({
            from:'0x128a8f7f6eea4DB2296e87305ae52DEe60963848',
            value: web3jsInstance.utils.toWei(val),
            gas: 4712388,
        }).then((res) => {
            console.log(res)
         });
    }, [web3jsInstance])
    const typingUserName = (e) => {
        // grab the input text from the field from the DOM 
        const typedText = e.target.value
        setInputText(typedText)
    }


    return (<React.Fragment>
        {
            didGetUserName ?
                <React.Fragment>
                    <JoinGame userName={inputText} isCreator={false} />
                    <ChessGame myUserName={inputText} />
                </React.Fragment>
                :
                <div>
                    <h1 style={{ textAlign: "center", marginTop: String((window.innerHeight / 3)) + "px" }}>Your Username:</h1>

                    <input style={{ marginLeft: String((window.innerWidth / 2) - 120) + "px", width: "240px", marginTop: "62px" }}
                        value={inputText}
                        onChange={typingUserName}></input>

                    <button className="btn btn-primary"
                        style={{ marginLeft: String((window.innerWidth / 2) - 60) + "px", width: "120px", marginTop: "62px" }}
                        disabled={!(inputText.length > 0)}
                        onClick={() => {
                            setDidGetUserName(true)
                        }}>Submit</button>
                </div>
        }
    </React.Fragment>)

}

export default JoinRoom