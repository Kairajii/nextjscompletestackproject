import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 tusahr. All right reserved.</div>
        <div className={styles.social}>
            <Image src='/1.png' className={styles.icon} height={15} width={15} alt='facebook icon'/>
            <Image src='/2.png' className={styles.icon} height={15} width={15} alt='instagram icon'/>
            <Image src='/3.png' className={styles.icon} height={15} width={15} alt='twitter icon'/>
            <Image src='/4.png' className={styles.icon} height={15} width={15} alt='youtube icon'/>
        </div>
    </div>
  )
}

export default Footer