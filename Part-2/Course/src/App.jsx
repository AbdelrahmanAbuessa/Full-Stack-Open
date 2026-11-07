const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 4,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 5,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 6,
            },
        ],
    };

    const Course = ({ course }) => {
        let total = 0;
        for (let i = 0; i < course.parts.length; i++) {
            total += course.parts[i].exercises;
        }

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

        const Content = ({ content }) => {
            return (
                <>
                    {content.map((part) => {
                        return <Part key={part.id} content={part} />;
                    })}
                </>
            );
        };

        const Total = ({ total }) => {
            return <p>Number of exercises {total}</p>;
        };

        return (
            <div>
                <Header course={course.name} />
                <Content content={course.parts} />
                <Total total={total} />
            </div>
        );
    };

    return <Course course={course} />;
};

export default App;
