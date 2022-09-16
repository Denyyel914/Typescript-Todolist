import React from 'react'

interface ListProps {
    line: boolean
    item: string,
    id: number, 
    onDelete: (id: number) => void
    onLinethrough: () => void
}
const List: React.FC<ListProps> = ({line,item, id, onDelete, onLinethrough}) => {
    console.log(line)
    return (
        <ul onClick={onLinethrough} id="items" className="list-group">
    <li className="list-group-item" style={{textDecoration: line ? "line-through" : ""}}>{item}<button onClick={() => {
         onDelete(id)
       }} className="glyphicon glyphicon-edit btn btn-danger btn-sm float-right delete" >X</button><button style={{marginRight: "5px"}} onClick={() => {
         alert('hehehe')
       }} className="glyphicon glyphicon-edit btn btn-warning btn-sm float-right delete">✏️</button> </li>
    </ul>
    )
}

export default List

