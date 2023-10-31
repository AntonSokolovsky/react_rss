import React, { Component } from "react";
import styles from './Cards.module.css';
import Card from "../Card/Card";

export default class Cards extends Component {
    render(): React.ReactNode {
        return (
            <section className={styles.cardsWrap}>
                <ul className={styles.cardsList}>
                    <Card/>
                </ul>
            </section>
        )
    }
}