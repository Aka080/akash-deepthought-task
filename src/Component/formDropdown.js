import React from 'react';
export const FormDropDown = (props)=>{
  
    return <div class="ui selection">
    <select name={props.name} 
    id={props.name}  
    onChange={e=>props.onChangeHandler(e)}>
      { props.data.map(item=>{
          const selected = (item[0]==='Uttar Pradesh' || item[0] === "Spider-Man 2")?{selected:true}:'';
          return <option class="item" value={item[0]} {...selected}>{item[0]}</option>
      })}
    </select>
  </div>
}