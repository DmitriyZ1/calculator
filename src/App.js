
import './App.css';

import React, {useState, useEffect} from 'react';

function App() {
  const [out, setOut] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [token, setToken] = useState('');
  const [memory, setMemory] = useState([]);
  
  const numb = ['0','1','2','3','4','5','6','7','8','9','.'];
  const sing = ['+','-','*','/'];
  

  const procedure = (num) => {

    if(numb.includes(num)){
      setOut('');
      
      if(b === '' && token === ''){
        setA((n) => n + num);
      }
      else{
        setB((n) => n + num);
      }
    }
    if(num === '+-'){
      setOut('');
      if(b === '' && token === ''){
        let j = Number(a);
        j = -j;
        setA(String(j));
      }
      else{
        let j = Number(b);
        j = -j;
        setB(String(j));
      }

    }
    if(sing.includes(num)){
      if(token !== ''){
        compute(a,b,token);
        setToken(num);
      } else {
        setToken(num);
      }
    }
    
    if(num === '='){
      if(b === ''){
        compute(a, memory[0], memory[1]);
        } else {
        compute(a, b, token);
      }
    }

    if(num === 'ca'){
      setToken('');
      setA('');
      setB('');
      setOut('');
    }
  }

  const compute = (am, bm, tt) => {
    console.log('a:'+a)
    console.log('b:'+b)

    let result;
    switch(tt){
      case '+':
        result = Number(am) + Number(bm);
        if(result === Infinity || Number.isNaN(result)){
          setA('Error');
          setB('')
          setToken('');
          break
        }
        if(!Number.isInteger(result)){
          result = result.toFixed(2);
          setA(String(result));
          setB('')
          setToken('');
          break
        }
        setA(String(result));
        setB('')
        setToken('');
        break
      case '-':
        result = Number(am) - Number(bm);
        if(result === Infinity || Number.isNaN(result)){
          setA('Error');
          setB('')
          setToken('');
          break
        }
        if(!Number.isInteger(result)){
          result = result.toFixed(2);
          setA(String(result));
          setB('')
          setToken('');
          break
        }
        setA(String(result));
        setB('')
        setToken('');
        break
      case '/':
        result = Number(am) / Number(bm);
        if(result === Infinity || Number.isNaN(result)){
          setA('Error');
          setB('')
          setToken('');
          break
        }
        if(!Number.isInteger(result)){
          result = result.toFixed(2);
          setA(String(result));
          setB('')
          setToken('');
          break
        }
        setA(String(result));
        setB('')
        setToken('');
        break
      case '*':
        result = Number(am) * Number(bm);
        if(result === Infinity || Number.isNaN(result)){
          setA('Error');
          setB('')
          setToken('');
          break
        }
        if(!Number.isInteger(result)){
          result = result.toFixed(2);
          setA(String(result));
          setB('')
          setToken('');
          break
        }
        setA(String(result));
        setB('')
        setToken('');
        break
      default:
        return        
    }
    setMemory([bm,tt]); 
    console.log(result)
    console.log(memory)
  }
  

  useEffect(() => {
    if(b === ''){
      setOut(a);
    } else {
      setOut(b);
    }
  }, [a,b])

  
  return (
    <div className="App">
      <div className="container">
        <div className="c_body">
          <div className="bord">
              <div className="inp">
                <div className="out">{out}</div>
              </div>
          </div>
          <div className="but_block">
            <div className="num_block">
              <div className="but num" onClick={()=>{procedure('7')}}>7</div>
              <div className="but num" onClick={()=>{procedure('8')}}>8</div>
              <div className="but num" onClick={()=>{procedure('9')}}>9</div>
              <div className="but num" onClick={()=>{procedure('4')}}>4</div>
              <div className="but num" onClick={()=>{procedure('5')}}>5</div>
              <div className="but num" onClick={()=>{procedure('6')}}>6</div>
              <div className="but num" onClick={()=>{procedure('1')}}>1</div>
              <div className="but num" onClick={()=>{procedure('2')}}>2</div>
              <div className="but num" onClick={()=>{procedure('3')}}>3</div>
              <div className="butnull num" onClick={()=>{procedure('0')}}>0</div>
              <div className="but num" onClick={()=>{procedure('.')}}>.</div>
            </div>
            <div className="c_block">
              <div className="but fun" onClick={()=>{procedure('+-')}}>-\+</div>
              <div className="but fun" onClick={()=>{procedure('*')}}>x</div>
              <div className="butpl fun" onClick={()=>{procedure('+')}}>+</div>
            </div>
            <div className="fun_block">
              <div className="but fun" onClick={()=>{procedure('ca')}}>CA</div>
              <div className="but fun" onClick={()=>{procedure('/')}}>/</div>
              <div className="but fun" onClick={()=>{procedure('-')}}>-</div>
              <div className="but fun" onClick={()=>{procedure('=')}}>=</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
