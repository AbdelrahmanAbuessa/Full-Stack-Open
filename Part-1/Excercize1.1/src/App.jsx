const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    const Header = (props) => {
        return <h1>{props.course}</h1>;
    };

    const Part = (props) => {
        return (
            <p>
                {props.content.name} {props.content.exercises}
            </p>
        );
    };

    const Content = (props) => {
        return (
            <>
                <Part content={props.content[0]} />
                <Part content={props.content[1]} />
                <Part content={props.content[2]} />
            </>
        );
    };

    const Total = (props) => {
        return (
            <p>
                Number of exercises{" "}
                {props.content[0].exercises +
                    props.content[1].exercises +
                    props.content[2].exercises}
            </p>
        );
    };

    return (
        <div>
            <Header course={course.name} />
            <Content content={course.parts} />
            <Total content={course.parts} />
        </div>
    );
};

export default App;
