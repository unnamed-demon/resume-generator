import React, { useState } from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import './App.css';

function App() {
  const [newKey, setNewKey] = useState(0);
  const [person, setPerson] = useState({ name:'', phone:'', email:'' });
  const [courses, setCourses] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div className='panes'>
      <LeftPane
        newKey={newKey}
        setNewKey={setNewKey}
        person={person}
        setPerson={setPerson}
        courses={courses}
        setCourses={setCourses}
        jobs={jobs}
        setJobs={setJobs}
        skills={skills}
        setSkills={setSkills}
      />
      <RightPane person={person} courses={courses} jobs={jobs} skills={skills} />
    </div>
  )
}

export default App;