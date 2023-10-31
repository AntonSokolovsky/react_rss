import styles from './Card.module.css';
import React, { Component } from 'react';

export default class Card extends Component {
    render(): React.ReactNode {
        return (
            <article className={styles.cardWrap}>
                <img src='' alt='' className={styles.cardImage}></img>
                <h3 className={styles.cardTitle}></h3>
                <ul className={styles.cardList}>
                    
                </ul>
            </article>
        )
    }
}