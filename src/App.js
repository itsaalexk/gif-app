
import '../src/styles/App.css';
import { GifExpertApp } from './componentes/GifExpertApp';
import {app} from "./componentes/firestore";

function App() {
  return (
    <div className="App">
      <GifExpertApp />
    </div>
  );
}

console.log(app)

export default App;
