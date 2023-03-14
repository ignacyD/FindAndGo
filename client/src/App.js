import './App.css';
import Header from './components/Header.js'
import Main from './components/Main';
import Registration from './components/Registration';
import Login from './components/Login';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Registration />
      <Login />
      <About />
      <Footer />
    </div>
  );
}

export default App;
