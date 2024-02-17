import './App.css';
import { useState } from 'react';

import { Secoundcard } from './component/secoundcard/secoundcard';
import { ThirdCard } from './component/thirdcard/thirdcard';
import { FourthCard } from './component/fourthcard/fourthcard';
import { Sixthcard } from './component/sixthcard/sixthcard';
import { Firstcard } from './component/firstcard/Firstcard';
import { FifthCard } from './component/fifthcard/Fifthcard';

function App() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);
  const [text5, setText5] = useState(false);
  const [text6, setText6] = useState(false);
  return (

    <div>
<h1 style={{textAlign:"Center",color:"red",fontSize:"50px"}}>FLASH CARD PROJECT</h1>
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginLeft:"10px",marginTop:"30px",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
        
          
       <Firstcard first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird} fourth={fourth} setFourth={setFourth} fifth={fifth} setFifth={setFifth} sixth={sixth} setSixth={setSixth} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6}setText1={setText1} setText2={setText2} setText3={setText3} setText4={setText4} setText5={setText5} setText6={setText6}/>
      <Secoundcard first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird} fourth={fourth} setFourth={setFourth} fifth={fifth} setFifth={setFifth} sixth={sixth} setSixth={setSixth} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6}setText1={setText1} setText2={setText2} setText3={setText3} setText4={setText4} setText5={setText5} setText6={setText6}/>
      <ThirdCard first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird} fourth={fourth} setFourth={setFourth} fifth={fifth} setFifth={setFifth} sixth={sixth} setSixth={setSixth} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6}setText1={setText1} setText2={setText2} setText3={setText3} setText4={setText4} setText5={setText5} setText6={setText6}/>
      <FourthCard first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird} fourth={fourth} setFourth={setFourth} fifth={fifth} setFifth={setFifth} sixth={sixth} setSixth={setSixth} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6} setText1={setText1} setText2={setText2} setText3={setText3} setText4={setText4} setText5={setText5} setText6={setText6}/>
      <FifthCard first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird} fourth={fourth} setFourth={setFourth} fifth={fifth} setFifth={setFifth} sixth={sixth} setSixth={setSixth} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6}setText1={setText1} setText2={setText2} setText3={setText3} setText4={setText4} setText5={setText5} setText6={setText6}/>
      <Sixthcard first={first} setFirst={setFirst} second={second} setSecond={setSecond} third={third} setThird={setThird} fourth={fourth} setFourth={setFourth} fifth={fifth} setFifth={setFifth} sixth={sixth} setSixth={setSixth} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6}setText1={setText1} setText2={setText2} setText3={setText3} setText4={setText4} setText5={setText5} setText6={setText6}/>
    </div>
    </div>
  );
}

export default App;