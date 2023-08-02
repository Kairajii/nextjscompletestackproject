import React from 'react'
import styles from './page.module.css'
import { items } from './data'
import Image from 'next/image'
import Button from '@/components/Button/Button'

interface Props {
    params:any
    items:Object
    cat:any
}

const getData:React.FC<Props> =(cat)=>{
    const data:any = items[cat];
    if(data) return data;
}

const Category:React.FC<Props> = ({params}) => {
    const data:React.ReactNode = getData(params.category)
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
        {data?.map((item:any) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category