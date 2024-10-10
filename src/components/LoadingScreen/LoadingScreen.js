import React, { useEffect, useState } from 'react'
import * as styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.loadingScreen} ${!isLoading ? styles.loaded : ''}`}>
      <img src="background/OxfordBlue.png" alt="OxfordBlue" className={styles.loadingBackground} />
      <div className={styles.loadingContent}>
        <img src="logo/loading_title_2.png" alt="Loading_2" className={styles.loadingImage} />
        <img src="logo/loading_title_1.png" alt="Loading_1" className={styles.loadingImage} />
        
      </div>
    </div>
  )
}

export default LoadingScreen
