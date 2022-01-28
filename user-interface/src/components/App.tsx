import Header from './Header';
import styles from '../styles/App.module.css';
import Searchbar from './Searchbar';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Searchbar />
    </div>
  );
}

export default App;
