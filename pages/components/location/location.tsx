import styles from './location.module.css'
import Image from 'next/image'

export function Location({ image, row, column, height, location }: { image: string; row: number, column: number, height: number, location?: string }) {
    return (
        <div className={styles.location} style={{
            height: 32 * height,
            backgroundImage: `url(${image})`,
        }}>
            <span className={styles.locationText} style={{
                backgroundColor: '#fff',
                padding: '.2rem .5rem',
                borderRadius: '1rem',
                border: '1px solid #000',
                margin: '0.2rem',
                display: 'inline-block',
            }}>{location}</span>
        </div> 
    )
}

export default Location