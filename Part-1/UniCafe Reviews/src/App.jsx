import { useState } from "react";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onGood = () => {
        setGood((x) => x + 1);
    };
    const onNeutral = () => {
        setNeutral((x) => x + 1);
    };
    const onBad = () => {
        setBad((x) => x + 1);
    };

    return (
        <div>
            <h1>Give Feedback</h1>
            <button type="button" onClick={onGood}>
                Good
            </button>
            <button type="button" onClick={onNeutral}>
                Neutral
            </button>
            <button type="button" onClick={onBad}>
                Bad
            </button>
            <h2>Stats</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
        </div>
    );
};

export default App;
