import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

interface Props{
    text:string
    url:string
}

const Button:React.FC<Props> = ({text,url}) => {
  return (
    <Link href={url}>
        <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button