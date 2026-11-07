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

export default Course;
