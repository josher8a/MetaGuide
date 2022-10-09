import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Location } from './components/location/location'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import ExampleLens from './components/example_lens'
import {DisconnectedIndex} from './components/home'
import { useAccount } from 'wagmi'
import {Explore} from './components/explore'

const Home: NextPage = () => {
    const { isConnected } = useAccount()

    return isConnected ? <Explore /> :  <DisconnectedIndex/>
    
}

export default Home
