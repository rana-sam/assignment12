import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/navbar/Nav'
import Search from './components/group1/Search';
import Choose from './components/group2/Choose';
import Feature from './components/group3/Feature';
import News from './components/group5/News';
function App() {
  return (
    <>
    <Nav />
    <Search />
    <Choose />
    <Feature />
    <News />
    </>
  );
}

export default App;
