import { useState } from "react"


export default function Team(){

  const [team,setTeam] =useState(11);

  const handleAdd =()=>{
    setTeam(team+1);
  }
  const handleremove =()=>{
    setTeam(team-1);
  }

    const teamStyle ={
        border: '4px solid green',
        margin: '15px',
        borderRadius: '20px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team} </h3>

            <button onClick={handleAdd} >ADD</button>
            <button onClick={handleremove} >REMOVE</button>
        </div>
    )
}