import { Component, ReactNode } from 'react'
import styles from './App.module.css'
import SearchBar from './components/SearchBar/Search'
import Cards from './components/Cards/Cards'

export default class App extends Component {
 render(): ReactNode {
   return (
    <div className={styles.myApp}>
      <h1>StarTrek</h1>
      <SearchBar/>
      <Cards/>
    </div>
   )
 }
}
