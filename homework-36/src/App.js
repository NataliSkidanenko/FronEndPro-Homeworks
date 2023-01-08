import './App.css';
import Reaction from './components/Reaction/Reaction';

function App() {
    return (
        <div className="container">
            <Reaction symbol="👍" />
            <Reaction symbol="👎" />
            <Reaction symbol="💚" />
            <Reaction symbol="💩" />
            <Reaction symbol="🤣" />
            <Reaction symbol="✨" />
        </div>
    );
}

export default App;
