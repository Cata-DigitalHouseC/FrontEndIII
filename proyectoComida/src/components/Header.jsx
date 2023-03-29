import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {
    console.log(props)
    console.log(styles)
  return (
    <Header className={styles.header}>{props.title}</Header>
  )
}

export default Header