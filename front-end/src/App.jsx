import { useState } from 'react'

function App() {
 
  const [h1Data,setH1data]=useState("");

  fetch("http://localhost:8000/",{
    method:"POST",})
  .then((res)=>{
    return res.json();
  }).then((data)=>{
  setH1data(data.msg);
  })

  return (
    <>
 <h1>{h1Data}</h1>
    </>
  )
}

export default App
