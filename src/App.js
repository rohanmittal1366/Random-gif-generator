import './App.css';
import Random from './Components/Random_V1';
import Tag from './Components/Tag_V1';


function App() {
  return (
    <div className="App">
     <h1>Gif</h1>
     <div className="main-container">
       <Random />
       <Tag />
     </div>
    </div>
  );
}

export default App;
