function Skill({ skill, setSkills }) {
  return (
    <div>
      <li>
        <button onClick={() => setSkills((skills) => skills.filter((item) => item.id !== skill.id))}>
          -
        </button>
        {skill.value}
      </li>
    </div>
  )
}

export default Skill;