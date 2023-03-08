import React from 'react'
import styles from './ServiceBox.module.css'

export default function ServiceBox(props) {
  return (

          <div id={styles.ServiceBox}>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
          </div>
      
  )
}
