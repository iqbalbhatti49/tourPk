import React from 'react'
import styles from './IconRemove.module.css'

export default function IconRemove() {
    return (
        <svg id={styles.removeIcon} width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Add-Stroke">
                    <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
                    <circle id="Oval" style={{ stroke: '#004346' }} strokeWidth="2" strokeLinecap="round" cx="12" cy="12" r="8"></circle>
                    <line x1="9" y1="12" x2="15" y2="12" id="Path" style={{ stroke: '#004346' }} strokeWidth="2" strokeLinecap="round"></line>
                </g>
            </g>
        </svg>

    )
}
