import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  /* const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   const number = '0123456789';
 
   const [passwordlength, setpasswordlength] = useState(8);
   const [checked, setchecked] = useState(false);
   const [checkeda, setcheckeda] = useState(false);
   const [generated, setgenerated] = useState('')
   function changechecked() {
     setchecked(!checked);
   }
   function changecheckedinalphabet() {
     setcheckeda(!checkeda);
   }
   const lengthp = (e) => {
     setpasswordlength(e.target.value);
   }
 
   function password() {
     let currentpassword = '';
     let generated = ''
     if (checked) {
       currentpassword += number;
 
     }
     if (checkeda) {
       currentpassword += alphabet;
     }
 
     for (let i = 0; i < passwordlength; i++) {
       generated += currentpassword[Math.floor(Math.random() * currentpassword.length)]
 
     }
     console.log(generated);
     setgenerated(generated);
   }*/

  // we will see an optimised method of the above method 
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');

  // useref hook
  const passwordref = useRef(null);
  const copypassword = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password])
  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += '0123456789';
    if (char) str += '~``!@#$%^&*()_+?,.<>:';
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      let charchosed = str.charAt(index);
      password = password + charchosed;
    }
    setPassword(password)

  }, [length, number, char, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator])

  return (
    <>
      <div className='bg-slate-500 w-full h-screen flex justify-center items-center'>
        <div className='rounded-lg bg-green-300 w-96 h-96 m-7 gap-4 flex flex-col justify-center items-center'>
          <input className='rounded-lg w-96 h-12'
            value={password}
            ref={passwordref}
            readOnly
            type="text" />
          <button onClick={copypassword} className='rounded-lg bg-blue-500 hover:bg-white p-2 font-bold border-gray-900 '>copy</button>

          <input className='rounded-lg'
            type="range"
            min={8} max={100}
            value={length}
            onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="">Length : {length}</label>
          <div className='flex gap-10'>
            <input type="checkbox" defaultChecked={char} onChange={() => { setChar((prev) => { !prev }) }} />
            <label htmlFor="">Alphabet</label>
          </div>

          <div className='flex gap-10'>
            <input type="checkbox" defaultChecked={number} onChange={() => { setNumber((prev) => { !prev }) }} />
            <label htmlFor="">Number</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
