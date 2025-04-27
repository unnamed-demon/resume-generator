function Course({ id, deleter }) {
  return (
    <div>
      Course Title :  <input type="text" />
      Institute :  <input type="text" />
      Duration :  <input type="text" />
      <button onClick={() => deleter(id)}>delete</button>
    </div>
  )
}

export default Course;