import styles from '../../styles/Home.module.css'
import { Location } from './location/location'



export default function Discover(){
    return (
        
        <>
            <div style={{display: 'flex', flexDirection:'row', width: '100%', gap: '10px'}}>
                <div className={styles.column}>
                    <Location image="/images/Rectangle2.png" height={6} row={1} column={1} location ={'Bogota'} />
                    <Location image="/images/Rectangle3.png" height={4} row={1} column={2} location ={'Bogota'} />
                
                </div>
                <div className={styles.column}>
                    <Location image="/images/Rectangle8.png" height={4} row={2} column={1} location ={'Bogota'} />
                    <Location image="/images/Rectangle4.png" height={6} row={2} column={2} location ={'Bogota'} />
                </div>
            </div>
            <div style={{width: '100%', marginTop: '10px'}}>
                <Location image="/images/Rectangle7.png" height={4} row={6} column={1} location ={'Bogota'} />
            </div>
        </>
            
    )
}