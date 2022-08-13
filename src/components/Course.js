const Course = ({course}) => {
    return <div>
        <h1>{course.name}</h1>
        <div>
            {course.parts.map(part => <p key = {part.id}>{part.name + " " + part.exercises}</p>)}
        </div>
        <b><p>{"Total Exercises: " + course.parts.reduce((prev, current) => prev + current.exercises, 0)}</p></b>
    </div>
}

export default Course;