import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from './connector'
import logo from './metamask.png'



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
      <div className="flex-custom" style={{ justifyContent: "center", display:"flex", alignItems:"center", height:"100vh", flexDirection: "column" }}>
      {/* <img src="/public/images/metmask.png" className="logo-img" height={70} width={200} alt="Logo" /> */}
      <img src={logo} style={{ width: "13%"}}/>
      <button className='btn btn-primary' type="button" onClick={() => activateWeb3()}>
        Connect to Metamask
      </button>
      </div>
    )
}

export default Connect
