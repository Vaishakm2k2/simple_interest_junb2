import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  //JSCODE
  const [Interest , setInterest] = useState(0)
  const [Principle , setPrinciple] = useState(0)
  const [Rate , setRate] = useState(0)
  const [Year , setYear] = useState(0)
  const [isPrinciple , setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)
  
  const validate = (e)=>{
    const {name, value}= e.target

    /* console.log(name, value);
    setPrinciple(value) */
    /* console.log(!!value.match)(/^[0-9]+$/); */
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){//!! - to conert into boolean value
      if(name==='Principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name==='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    
    else{
      if(name==='Principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }
}


const handleCalculate = (e) =>{
  e.preventDefault()
  if(!Principle || !Rate || !Year){
    alert('Please fill the form')
  }
  else{
    setInterest(Principle*Rate*Year/100)
  }
}

const handleReset = (e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center h-100 w-100 bg-dark'>
      <div style={{width:'500px'}} className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your Simple Interest Easily</p>
        <div style={{height:'150px'}} className='flex-column bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>₹ {' '} {Interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form className='mt-4' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField name='Principle' className='w-100 mt-3' value={Principle || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
          </div>
          { !isPrinciple &&
          <div>
            <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
          <TextField className='w-100 mt-3' name='rate' onChange={(e)=>validate(e)} value={Rate || ''} id="outlined-basic" label="rate of Interest (p.a) %" variant="outlined" />
          </div>
          { !isRate &&
          <div>
            <p className='text-danger fw-border'>Invalid Input</p>
          </div>
          }
          <div className='mb-3'>
          <TextField className='w-100 mt-3' name='year' value={Year || ''} onChange={(e)=>validate(e)} id="outlined-basic" label="Year (Yr)" variant="outlined"  />
          </div>
          { !isYear &&
          <div>
            <p className='text-danger fw-border'>Invalid Input</p>
          </div>
          }
          <div className='mb-3'>
          <Stack direction="row" spacing={2}>
             <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-success' style={{width:'200px', height:'50px'}} variant="contained">Calculate</Button>
             <Button onClick={handleReset} style={{width:'200px', height:'50px'}} variant="outlined">Reset</Button>
          </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
