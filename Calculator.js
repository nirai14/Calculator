import React from 'react'

function Calculator(){
  const[input,setInput]=React.useState('')


function clearInput(){
    setInput("")
     }

  function handleButton(num){
setInput(input+num)
  }
function result(){
  result=input
  setInput(result===input?eval(result):"error")
}

  return (
    <div>
    <div className='title'>Calculator</div>
    <section className='box'> 
    <h1 className='result'>{input}</h1>
    <button  className='button' onClick={()=>handleButton("7")}>7</button>
    <button  className='button' onClick={()=>handleButton("8")}>8</button>
    <button  className='button' onClick={()=>handleButton("9")}>9</button><br/>
    <button  className='button' onClick={()=>handleButton("4")}>4</button>
    <button  className='button' onClick={()=>handleButton("5")}>5</button>
    <button  className='button' onClick={()=>handleButton("6")}>6</button><br/>
    <button  className='button' onClick={()=>handleButton("1")}>1</button>
    <button  className='button' onClick={()=>handleButton("2")}>2</button>
    <button  className='button' onClick={()=>handleButton("3")}>3</button><br/>
    <button  className='button' onClick={()=>handleButton("0")}>0</button>
    <button  className='button' onClick={()=>handleButton(".")}>.</button>
    <button  className='button' id="equal" onClick={result}>=</button><br/>
    <button  className='button' onClick={()=>handleButton("+")}>+</button>
    <button  className='button' onClick={()=>handleButton("-")}>-</button>
    <button  className='button' onClick={()=>handleButton("/")}>/</button><br/>
    <button  className='button' onClick={()=>handleButton("*")}>*</button>
    <button  className='button' onClick={clearInput}>C</button>
    </section>
    
    </div>
  )
}
export default Calculator