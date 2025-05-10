import { useState, useEffect } from "react";
import ZoomButton from "./ZoomButton";
import PrintButton from "./PrintButton";

function RightPane({ person, courses, jobs, skills }) {
  const [scaled, setScaled] = useState(false);
  const [zoomTimeoutId, setZoomTimeoutId] = useState(null);

  window.onresize = () => {
    if(!scaled) return;
    clearTimeout(zoomTimeoutId);

    const newZoomTimeoutId = setTimeout(() => {
      const $preview = document.querySelector(".preview");
      $preview.style.setProperty(
        "--ratio",
        (window.innerHeight - 50) / $preview.scrollHeight
      );
    }, 100);
    
    setZoomTimeoutId(newZoomTimeoutId);
  };

  const toggle = () => {
    const $preview = document.querySelector(".preview");
    if (!scaled) {
      $preview.classList.add("scaled");
      $preview.style.setProperty(
        "--ratio",
        (window.innerHeight - 50) / $preview.scrollHeight
      );
    } else {
      $preview.classList.remove("scaled");
    }
    setScaled(!scaled);
  };

  return (
    <div className="pane background">
      <ZoomButton toggle={toggle} scaled={scaled} />

      <div className="preview">
        <h1>{person.name || "Name"}</h1>
        <h3>{person.phone || "Phone Number"}</h3>
        <h3>{person.email || "Email"}</h3>

        <h2>Education</h2>
        {courses.map(({ id, fields }) => (
          <div className="spread" key={id}>
            <b>{fields.courseTitle}</b>
            <span>{fields.institute}</span>
            <em>{fields.duration}</em>
          </div>
        ))}

        <h2>Experience</h2>
        {jobs.map(({ id, fields }) => (
          <div className="spread" key={id}>
            <b>{fields.position}</b>
            <span>{fields.company}</span>
            <em>{fields.duration}</em>
          </div>
        ))}

        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.value}</li>
          ))}
        </ul>
      </div>

      <PrintButton />
    </div>
  );
}

export default RightPane;
