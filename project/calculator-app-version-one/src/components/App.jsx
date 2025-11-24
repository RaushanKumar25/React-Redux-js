import Display from './Display';
import ButtonsContainer from './ButtonsContainer';
import styles from './App.module.css';

function App() {
  return ( 
    <div className={styles.calculator}>
    <Display></Display>
    <ButtonsContainer></ButtonsContainer>
    
  </div>
  )
}

export default App
