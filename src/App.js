import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import appInitialize from "./Firebase/firebase.init";

appInitialize();

function App() {
    return (
        <div className="App">
            <h1>Running react-app</h1>
        </div>
    );
}

export default App;
