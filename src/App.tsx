import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Input from './components/Input'
import List from './components/List'

const App:React.FC = () => {
  const [collection, setCollection] = useState<string[]>([])
  const [line,setLine] = useState<boolean>(false)
 
  

  const addToCollection = (value:string) => setCollection([...collection, value]);
  const handleDelete = (id: number) => {
    setCollection(prev => {
      return prev.filter((element, index) => {
        return id !== index
      })
    })
  }

  const Linethough = () => {
    setLine(!line)
  }
 
  
  {console.log(collection)}
  return (
    <div>
      <Heading />
      <Input addToCollection={addToCollection} />
      <div className="container" id="container">
      
      <p className="text-center font-weight-bold">Click the "X" to HAHA remove the item list</p>
        <div id="main" className="card card-body">
          <h1 className="title text-center">List of Todos</h1>
          {collection.map((element,index) => {
            return <List item={element} key={index} id={index} line={line} onLinethrough={Linethough} onDelete={handleDelete} />
          })}
        </div>
      </div>
    </div>
  )
}
export default App;
