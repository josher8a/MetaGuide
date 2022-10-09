import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import Discover from './components/discover'
import { useAccount } from 'wagmi'
import { useState } from 'react'
import ReviewCard from './components/review/reviewCard'

const Home: NextPage = () => {
    const { isConnected } = useAccount()

    const [isExplore, setIsExplore] = useState(false)
    const [reviews, setReviews] = useState([])

    const handleExplore = () => {
        setIsExplore(true)
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>MetaGuides</h1>

                <p className={styles.description}>
                    The descentralized way to share and travel around the world.
                </p>

                <div className={styles.inputBox}>
                    <input placeholder="Bogota, Colombia"></input>
                </div>

                {isExplore ? (
                    reviews.map((result, index) => (
                        <ReviewCard key={index} review={result} />
                    ))
                ) : (
                    <Discover />
                )}
            </main>
            <div className="connectButtonContainer">
                <ConnectButton />
            </div>
        </div>
    )
}

export default Home
