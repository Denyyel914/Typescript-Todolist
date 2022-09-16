import React, { useState } from 'react'

interface InputProps {
    addToCollection: (input: string) => void
}
const Input: React.FC<InputProps> = ({addToCollection}) => {
    const [input,setInput] = useState<string>('')
    

    const handleChange = (e:any) => {
        e.preventDefault()
        const {value} = e.target;
        setInput(value)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
    }
    
  return (
  <div className="container">
    <h2>Add TodoList</h2>
    <form id="addForm" className="form-inline mb-3" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" className="form-control mr-2" id="item" placeholder="Input list"/>
      <button onClick={() => addToCollection(input)} className="btn btn-dark">Submit</button>
    </form>
  </div>
  )
}

export default Input