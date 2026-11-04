import { useState } from "react";

const StatisticLine = ({ text, stat }) => {
    return (
        <p>
            {text} {stat}
        </p>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const avg = (good - bad) / all;
    const pos = (good * 100) / all;

    return (
        (all && (
            <>
                <h2>Stats</h2>
                <StatisticLine text={"Good"} stat={good} />
                <StatisticLine text={"Neutral"} stat={neutral} />
                <StatisticLine text={"Bad"} stat={bad} />
                <StatisticLine text={"All"} stat={all} />
                <StatisticLine text={"Average"} stat={avg} />
                <StatisticLine text={"Positive"} stat={pos} />
            </>
        )) || <p>No Feedback</p>
    );
};

const Button = ({ text, onClick }) => {
    return (
        <button type="button" onClick={onClick}>
            {text}
        </button>
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
            <Button text={"Good"} onClick={onGood} />
            <Button text={"Neutral"} onClick={onNeutral} />
            <Button text={"Bad"} onClick={onBad} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
