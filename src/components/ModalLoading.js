import React from 'react'
import styles from './Modal.module.css'

export default function ModalLoading () {
    return  <div className={styles.loadingContainer}>
                <div className={styles.loadingView}>Loading ...</div>
            </div>;
}
