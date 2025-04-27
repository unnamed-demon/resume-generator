function Job({ id, deleter }) {
  return (
    <div>
      Position :  <input type="text" />
      Company :  <input type="text" />
      Duration :  <input type="text" />
      <button onClick={() => deleter(id)}>delete</button>
    </div>
  )
}

export default Job;