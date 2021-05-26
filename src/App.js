import './App.css';
import {BreweriesList, Header,Footer,Search} from './components/index';

function App() {
  return (
    <div>
      <Header/>
      <Search/>
      <BreweriesList/>
      <Footer/>
    </div>
  );
}

export default App;
