import React from 'react';

 const TodoList=(props)=>{
  
     return(
        <div className='todo_style'>
         <i className="fa fa-times" area-hidden="true" onClick={()=>{
            props.onSelect(props.id);
         }} ></i>
         <li >{props.text}</li>
         </div>
     )

 }
 export default TodoList;
