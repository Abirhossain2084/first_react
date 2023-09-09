
import './App.css'
import Count from './Count';
import Team from './Team';
import Users from './Users';

function App() {
  
  //clickalert
  function handleClick(){
    alert('Clicked');
  }

  //

  const handleClick2 =()=>{
    alert('cliked also')
  }


  const addTOFive =(n)=>{
    alert(n+5);
  }

  return (
    <>
      
      <h1>React core concepts 2</h1>
      <Users></Users>
<Team></Team>
<Count></Count>
      <button onClick={handleClick} >Click me</button>


      <button onClick={handleClick2} >Click me2</button>

    


      <button onClick={() =>{alert('clicked')}} >Click me3</button>
      
      
    </>
  )
}

export default App
