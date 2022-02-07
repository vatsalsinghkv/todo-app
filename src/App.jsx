import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Title from './components/Title/Title';

function App() {
	return (
		<div className={styles.App}>
			<Title>#todo</Title>
			<Main />
			<Footer name="Vatsal Singh" github="https://github.com/vatsalsinghkv" />
		</div>
	);
}

export default App;
