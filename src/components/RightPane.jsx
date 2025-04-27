function RightPane({ person, courses, jobs, skills }) {
    return (
      <div className='pane'>
        <h1>{person.name}</h1>
        <h3>{person.phone}</h3>
        <h3>{person.email}</h3>
        <h2>Education</h2>
        {courses.map(({ id, fields }) => <div key={id}>Course Title : {fields.courseTitle}Institute : {fields.institute}Duration : {fields.duration}</div>)}
        <h2>Experience</h2>
        {jobs.map(({ id, fields }) => <div key={id}>Position : {fields.position}Company : {fields.company}Duration : {fields.duration}</div>)}
        <h2>Skills</h2>
        <ul>{skills.map((skill) => <li>{skill.value}</li>)}</ul>
      </div>
    )
  }
  
  export default RightPane;