import React,{useState} from 'react';
import './App.css';
import './style.css'




function App() {
  const [tasks,setTasks]= useState([]);

  const [inputData, setInputData] = useState('')

  const add = () =>{
    setTasks([...tasks,inputData])
    setInputData('')
  }
  const remove = (val)=>{
    let newTasks = [];
    newTasks= tasks.filter(word =>{ return word !== val})
    setTasks(newTasks);
  }


  return(
    <>
      <h1>To do list:</h1>
  
        <input type="text" id="add" value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>

        <button onClick={()=>{add()}}>Add to list</button>
        <ul>
      {tasks.map(value =>  {return <li>{value} <button onClick={()=>remove(value)} >remove this task</button> </li>})}
    </ul>
     
    </>
  )
}

export default App;
