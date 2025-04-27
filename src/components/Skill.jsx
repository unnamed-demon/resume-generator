function Skill({ value, id, deleter }) {
  return (
    <div>
      <li>{value}<button onClick={() => deleter(id)}>delete</button></li>
    </div>
  )
}

export default Skill;