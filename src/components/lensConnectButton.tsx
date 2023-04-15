import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
'use client' 
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useDispatch } from 'react-redux'
import { setLensAccessToken } from '../store';

//const API_URL = 'https://api.lens.dev'
const API_URL = "https://api-mumbai.lens.dev"

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

const challenge = gql`
  query Challenge($address: EthereumAddress!) {
    challenge(request: { address: $address }) {
      text
    }
  }
`

const authenticate = gql`
  mutation Authenticate(
    $address: EthereumAddress!
    $signature: Signature!
  ) {
    authenticate(request: {
      address: $address,
      signature: $signature
    }) {
      accessToken
      refreshToken
    }
  }
`


const LensConnect = () => {


    const dispatch = useDispatch();

    /* local state variables to hold user's address and access token */
    const [address, setAddress] = useState("")
    const [token, setToken] = useState("")
    const [ethereum, setEthereum] = useState<any>(null);
    useEffect(() => {
        /* when the app loads, check to see if the user has already connected their wallet */
        
        if (typeof window.ethereum !== "undefined") {
            
            setEthereum(window.ethereum);     
        }
        if (ethereum) {
            checkConnection()
        }
        
    }, [ethereum, []])

    async function checkConnection() {
        
        
        const provider = new ethers.providers.Web3Provider(ethereum) 
        const accounts = await provider.listAccounts()
        if (accounts.length) {
          setAddress(accounts[0])
        }
    }

    async function connect() {
        /* this allows the user to connect their wallet */
        const account = await ethereum.send('eth_requestAccounts')
        if (account.result.length) {
          setAddress(account.result[0])
        }
    }

    async function login() {
        try {
          /* first request the challenge from the API server */
          const challengeInfo = await client.query({
            query: challenge,
            variables: { address }
          })
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner()
          /* ask the user to sign a message with the challenge info returned from the server */
          const signature = await signer.signMessage(challengeInfo.data.challenge.text)
          /* authenticate the user */
          const authData = await client.mutate({
            mutation: authenticate,
            variables: {
              address, signature
            }
          })
          /* if user authentication is successful, you will receive an accessToken and refreshToken */
          const { data: { authenticate: { accessToken }}} = authData
          console.log({ accessToken })
          setToken(accessToken)
          dispatch(setLensAccessToken(token));
        } catch (err) {
          console.log('Error signing in: ', err)
        }
      }


    return (
        <div className="ml-auto py-4">
            { /* if the user has not yet connected their wallet, show a connect button */ }
            {
                !address && (
                    <div className="w-full mx-auto flex  justify-end mt-5">
                        <button className="text-white bg-gradient-to-r from-green-500 to-green-700 text-lg rounded-lg p-3 disabled" onClick={connect}>
                            Connect Lens
                        </button>
                    </div>
                )
            }
            { /* if the user has connected their wallet but has not yet authenticated, show them a login button */ }
            {
                address && !token && (
                <div className="w-full mx-auto flex  justify-end mt-5" onClick={login}>
                    <button className="text-white bg-gradient-to-r from-green-500 to-green-700 text-lg rounded-lg p-3 disabled">
                        Login with Lens
                    </button>
                </div>
                )
            }
            { /* once the user has authenticated, show them a success message */ }
            {
                address && token && (
                    <div className="w-full mx-auto flex  justify-end mt-5">
                        <button className="text-white bg-gradient-to-r from-green-500 to-green-700 text-lg rounded-lg p-3 disabled">
                            {address.slice(0, 5) + "...." + address.slice(39)}
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default LensConnect;