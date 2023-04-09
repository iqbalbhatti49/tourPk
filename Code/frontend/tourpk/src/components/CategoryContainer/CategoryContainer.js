import React from 'react'
import styles from './CategoryContainer.module.css'

function CategoryContainer(props) {
    return (
        <div className={styles.category}>
            <input type="radio"
                checked={props.category === `${props.catName}`}
                name={props.catName}
                value={props.catName}
                id={props.catName}
                onChange={props.onChange}
            />
            <label htmlFor={props.catName}>{props.catName}</label>
        </div>
    )
}

export default CategoryContainer