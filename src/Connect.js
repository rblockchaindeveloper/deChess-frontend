import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from './connector'



const Connect = ({ children }) => {
  const { active, activate } = useWeb3React()

  const onError = (err) => {
    console.error(err)
  }
  
  const activateWeb3 = () => {
    activate(injected, onError, true).catch(err => {
      console.error(err)
    })
  }

  return active ?
    <>{children}</> :
    (
      <button className='btn btn-primary' type="button" onClick={() => activateWeb3()}>
        Connect to Metamask
      </button>
    )
}

export default Connect
