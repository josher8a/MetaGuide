import styles from '../../styles/Layout.module.css'
import Head from 'next/head'

export function Layout({ children }: { children: any }) {
    return (
        <>
            <div className={styles.layout}>
                <Head>
                    <title>Create Next App</title>
                    <meta
                        name="description"
                        content="The descentralized way to share and travel around the world."
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {children}
                <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Lens
                </a>
            </footer>
            </div>
        </>
    )
}
