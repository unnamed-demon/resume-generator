function Skill({ skill, setSkills }) {
  return (
    <div>
      <li>{skill.value}<button onClick={() => setSkills((skills) => skills.filter((item) => item.id !== skill.id))}>delete</button></li>
    </div>
  )
}

export default Skill;