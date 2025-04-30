import { useState } from 'react';

function RightPane({ person, courses, jobs, skills }) {
  const [scaled, setScaled] = useState(false);

  const toggle = () => {
    const $preview = document.querySelector('.preview');
    if(!scaled) {
      $preview.classList.add('scaled');
      $preview.style.setProperty("--ratio",(window.innerHeight - 50)/$preview.scrollHeight);
    } 
    else {
      $preview.classList.remove('scaled');
    }
    setScaled(!scaled);
  }

  return (
    <div className='pane background'>
      <button onClick={() => toggle()}>🔎</button>
      <div className="preview">
        <h1>{person.name}</h1>
        <h3>{person.phone}</h3>
        <h3>{person.email}</h3>
        <h2>Education</h2>
        {courses.map(({ id, fields }) => <div key={id}>Course Title : {fields.courseTitle} Institute : {fields.institute} Duration : {fields.duration}</div>)}
        <h2>Experience</h2>
        {jobs.map(({ id, fields }) => <div key={id}>Position : {fields.position} Company : {fields.company} Duration : {fields.duration}</div>)}
        <h2>Skills</h2>
        <ul>{skills.map((skill) => <li>{skill.value}</li>)}</ul>
      </div>
    </div>
  )
}

export default RightPane;