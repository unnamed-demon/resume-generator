import { useState } from 'react';
import Course from './Course';
import Skill from './Skill';
import Job from './Job';

function LeftPane({ newKey, setNewKey, person, setPerson, courses, setCourses, jobs, setJobs, skills, setSkills }) {
  const [skill, setSkill] = useState('');

  return (
    <div className="pane">
      <div className="header">Unnamed Demon's Résumé Generator</div>
      <div className="form">
        <h1>Personal details</h1>
        <div className="stretch">
          <label htmlFor="name">Name </label>
          <input
            id="name"
            type="text"
            value={person.name}
            onChange={(e) =>
              setPerson((person) => ({ ...person, name: e.target.value }))
            }
          />
        </div>
        <div className="stretch">
          <label htmlFor="phone"> Phone </label>
          <input
            id="phone"
            type="text"
            value={person.phone}
            onChange={(e) =>
              setPerson((person) => ({ ...person, phone: e.target.value }))
            }
          />
        </div>
        <div className="stretch">
          <label htmlFor="email"> Email </label>
          <input
            id="email"
            type="text"
            value={person.email}
            onChange={(e) =>
              setPerson((person) => ({ ...person, email: e.target.value }))
            }
          />
        </div>
        <h1>Education</h1>
        {courses.map((item) => (
          <Course key={item.id} course={item} setCourses={setCourses} />
        ))}
        <button
          onClick={() => {
            setCourses((courses) => [
              ...courses,
              {
                id: newKey,
                fields: { courseTitle: "", institute: "", duration: "" },
              },
            ]);
            setNewKey((newKey) => newKey + 1);
          }}
          className="centered-button"
        >
          +
        </button>

        <h1>Experience</h1>
        {jobs.map((item) => (
          <Job key={item.id} job={item} setJobs={setJobs} />
        ))}
        <button
          onClick={() => {
            setJobs((jobs) => [
              ...jobs,
              {
                id: newKey,
                fields: { position: "", company: "", duration: "" },
              },
            ]);
            setNewKey((newKey) => newKey + 1);
          }}
          className="centered-button"
        >
          +
        </button>

        <h1>Skills</h1>
        <input
          className='skill-field'
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button
          onClick={() => {
            if (skill === "") return;
            setSkills((skills) => [
              ...skills,
              {
                id: newKey,
                value: skill,
              },
            ]);
            setSkill("");
            setNewKey((newKey) => newKey + 1);
          }}
        >
          +
        </button>
        <ul>
          {skills.map((item) => (
            <Skill key={item.id} skill={item} setSkills={setSkills} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftPane;
export { }