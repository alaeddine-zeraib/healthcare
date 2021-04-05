
// import './App.css';
import Food from './components/Food';
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Food />
      </div>
    </Provider>
  );
}

export default App;
