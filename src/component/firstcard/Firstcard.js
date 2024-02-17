export function Firstcard({ setText6,text6,setText5,text5,text4,setText4, text3,setText3,setText2,setText1,text1,first, setFirst, second, setSecond, third, setThird, fourth, setFourth, fifth, setFifth, sixth, setSixth }) {
    
  const changingColorHandler =()=>{
    setFirst(true);
    setText1(true)
    setSecond(false);
    setText2(false)
    setThird(false);
    setText3(false)
    setFourth(false);
    setText4(false)
    setText5(false)
    setFifth(false);
    setSixth(false);
    setText6(false)
  }
  
  
  
  return (

      
     <div onMouseEnter={changingColorHandler} className="firstDiv" style={{fontSize:"16px",fontWeight:"bolder",  textAlign:"center", width:"400px",height:"260px" ,borderRadius:"15px", backgroundColor: first ? "red": "#f6f6f6", color: first ? "white": "black" ,border: first ? "2px solid black" : "none"}}>
            <p style={{paddingTop:"90px"}}>{text1 ? "Javascript" : "What language is React based on?"}</p>
        </div>
  
    );
   }

