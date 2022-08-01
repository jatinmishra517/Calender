import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')

    const onSubmit =(e)=>{
        e.preventDefault();
        if(!text){
            alert('please add a task')
            return 
        }
        //console.log(text);
        //console.log(day);

        onAdd({text,day})
        setText('');
        setDay('');
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={
                (e)=> setText(e.target.value)
            }  />
        </div>
        <div className='form-control'>
            <label>day and time</label>
            <input type='date' placeholder='Add add day and time' value={day} onChange={
                (e)=> setDay(e.target.value)
            }/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
//file name should be with capitals !!