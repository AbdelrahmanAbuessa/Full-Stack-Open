import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const avg = (good - bad) / all;
    const pos = (good * 100) / all;

    return (
        <>
            <h2>Stats</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>All {all}</p>
            <p>Average {avg || 0}</p>
            <p>Positive {pos || 0} %</p>
        </>
    );
};

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
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
