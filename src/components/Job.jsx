import { useState } from 'react';

function Job({ job, setJobs }) {
  const { id, fields: oldFields } = job;
  const { position, company, duration } = oldFields;
  const [fields, setFields] = useState(oldFields);

  return (
    <div>
      <label htmlFor={"position"+id}>Position </label>
      <input 
        id={'position'+id}
        type="text" 
        value={position}
        onChange={(e) => {
          const newFields = {...fields, position: e.target.value};
          setFields(newFields);
          setJobs((jobs) => jobs.toSpliced(jobs.indexOf(job), 1, {id, fields: newFields}));
        }}
      />
      <label htmlFor={"company"+id}> Company </label>
      <input
        id={"company"+id}
        type="text" 
        value={company} 
        onChange={(e) => {
          const newFields = {...fields, company: e.target.value};
          setFields(newFields);
          setJobs((jobs) => jobs.toSpliced(jobs.indexOf(job), 1, {id, fields: newFields}));
        }}
      />
      <label htmlFor={"duration"+id}> Duration </label>
      <input
        id={"duration"+id}
        type="text" 
        value={duration} 
        onChange={(e) => {
          const newFields = {...fields, duration: e.target.value};
          setFields(newFields);
          setJobs((jobs) => jobs.toSpliced(jobs.indexOf(job), 1, {id, fields: newFields}));
        }}
      />
      <button onClick={() => setJobs((jobs) => jobs.filter((item) => item.id !== id))}>-</button>
    </div>
  )
}

export default Job;