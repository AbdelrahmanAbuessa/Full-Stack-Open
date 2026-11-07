const App = () => {
    const courses = [
        {
            name: "Half Stack application development",
            id: 1,
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
                    name: "Redux",
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1,
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ];

    const Course = ({ course }) => {
        const total = course.parts.reduce((acc, { exercises: ex }) => {
            return acc + ex;
        }, 0);

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

    return (
        <>
            {courses.map((course) => {
                return <Course course={course} key={course.id} />;
            })}
        </>
    );
};

export default App;
