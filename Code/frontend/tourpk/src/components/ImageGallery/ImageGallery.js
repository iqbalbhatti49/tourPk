import React from 'react'
import styles from './ImageGallery.module.css'

export default function (props) {
  const { bigImage, rightImages } = props
  return (
    <div className={styles.gallery}>
      <div className={styles.bigImage}>
        <img src={bigImage.src} alt="img" />
      </div>
      <div className={styles.smallImages}>
        {rightImages.map((image, index) => (
          <div key={index} className={styles.smallImage}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
