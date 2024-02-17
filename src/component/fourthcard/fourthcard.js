export function FourthCard({setText6,text6,setText5,text5,text4,setText4, text3,setText3,setText2,setText1,text1,first, setFirst, second, setSecond, third, setThird, fourth, setFourth, fifth, setFifth, sixth, setSixth }) {
  
    
  const changingColorHandler =()=>{
    setFirst(false);
    setText1(false)
    setSecond(false);
    setText2(false)
    setThird(false);
    setText3(false)
    setFourth(true);
    setText4(true);
    setText5(false);
    setFifth(false);
    setSixth(false);
        
      }
  
  
  
  return (
      <div>
       
       <div onMouseEnter={changingColorHandler} className="firstDiv" style={{fontSize:"16px",fontWeight:"bolder", textAlign:"center",width:"400px",height:"260px",borderRadius:"15px", backgroundColor: fourth ? "red": "#f6f6f6", color: fourth ? "white": "black",border: fourth ? "2px solid black" : "none"}}>
           <p  style={{paddingTop:"90px"}}>{ text4 ?"Props":"How to pass data from parent to child components?"}</p>  
                 </div>
  
      </div>
    );
  }

  