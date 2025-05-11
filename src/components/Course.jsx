import { useState } from 'react';

function Course({ course, setCourses }) {
  const { id, fields: oldFields } = course;
  const { courseTitle, institute, duration } = oldFields;
  const [fields, setFields] = useState(oldFields);

  return (
    <div className="entry-grid">
      <button
        onClick={() =>
          setCourses((courses) => courses.filter((item) => item.id !== id))
        }
      >
        -
      </button>
      <label htmlFor={"courseTitle" + id}>Course Title </label>
      <input
        id={"courseTitle" + id}
        type="text"
        value={courseTitle}
        onChange={(e) => {
          const newFields = { ...fields, courseTitle: e.target.value };
          setFields(newFields);
          setCourses((courses) =>
            courses.toSpliced(courses.indexOf(course), 1, {
              id,
              fields: newFields,
            })
          );
        }}
      />
      <label htmlFor={"institute" + id}> Institute </label>
      <input
        id={"institute" + id}
        type="text"
        value={institute}
        onChange={(e) => {
          const newFields = { ...fields, institute: e.target.value };
          setFields(newFields);
          setCourses((courses) =>
            courses.toSpliced(courses.indexOf(course), 1, {
              id,
              fields: newFields,
            })
          );
        }}
      />
      <label htmlFor={"duration" + id}> Duration </label>
      <input
        id={"duration" + id}
        type="text"
        value={duration}
        onChange={(e) => {
          const newFields = { ...fields, duration: e.target.value };
          setFields(newFields);
          setCourses((courses) =>
            courses.toSpliced(courses.indexOf(course), 1, {
              id,
              fields: newFields,
            })
          );
        }}
      />
    </div>
  );
}

export default Course;