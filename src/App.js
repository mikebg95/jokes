import './App.css';
import Joke from './Joke';
import jokes from './jokes'

function App() {

    return (
        <div className="App">
            {jokes.map(joke => (
                <Joke setup={joke.setup ? joke.setup : ''} punchline={joke.punchline} />
            ))}
        </div>
    );
}

export default App;
