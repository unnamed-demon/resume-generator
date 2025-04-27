import { useState } from 'react';
import Course from './Course';
import Skill from './Skill';
import Job from './Job';

function LeftPane() {
  const [jobs, setJobs] = useState([]);
  const [courses, setCourses] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [newKey, setNewKey] = useState(0);

  const deleteJob = (id) => setJobs(jobs.toSpliced(jobs.indexOf(id), 1));
  const deleteCourse = (id) => setCourses(courses.toSpliced(courses.indexOf(id), 1));
  const deleteSkill = (id) => setSkills(skills.filter((item) => item.key !== id));

  return (
    <div className='pane'>
      <div className='header'>logo and stuff</div>
      <div className='form'>
        <h1>Personal details</h1>
        Name :  <input type="text" />
        Phone :  <input type="text" />
        Email :  <input type="text" />
        <h1>Education</h1>
        <button onClick={() => {
          setCourses([...courses, newKey]);
          setNewKey(newKey + 1);
        }}>Add Course</button>
        {courses.map((key) => <Course key={key} id={key} deleter={deleteCourse} />)}
        <h1>Experience</h1>
        <button onClick={() => {
          setJobs([...jobs, newKey]);
          setNewKey(newKey + 1);
        }}>Add Job</button>
        {jobs.map((key) => <Job key={key} id={key} deleter={deleteJob} />)}
        <h1>Skills</h1>
        <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} />
        <button onClick={() => {
          if (skill === '') return;
          setSkills([...skills, {
            key: newKey,
            value: skill
          }]);
          setSkill('');
          setNewKey(newKey + 1);
        }}>Add Skill</button>
        <ul>{skills.map(({ key, value }) => <Skill value={value} key={key} id={key} deleter={deleteSkill} />)}</ul>
      </div>
    </div>
  )
}

export default LeftPane;