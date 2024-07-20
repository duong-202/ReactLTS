import logo from './logo.svg';
import './App.css';
import Componet from './view/FunctionComponent';
import MyInfo from './view/FunctionComponent';
import Navbar from './view/NavbarComponent';
import Main from './view/MainComponent';
import Footer from './view/FooterComponent';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
