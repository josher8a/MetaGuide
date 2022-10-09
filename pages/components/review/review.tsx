import styles from './location.module.css'
import Image from 'next/image'

export function Post({ image, row, column, height }: { image: string; row: number, column: number, height: number }) {
    return (
        <div className={styles.location} style={{
            height: 32 * height,
            backgroundImage: `url(${image})`
        }}>
            
        </div> 
    )
}
