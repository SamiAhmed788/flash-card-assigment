export function Secoundcard({setText6,text6,setText5,text2,text4,setText4, text3,setText3,setText2,setText1,text1,first, setFirst, second, setSecond, third, setThird, fourth, setFourth, fifth, setFifth, sixth, setSixth  }) {
  
  const changingColorHandler =()=>{
    setFirst(false);
    setText1(false)
    setSecond(true);
    setText2(true)
    setThird(false);
    setText3(false)
    setFourth(false);
    setText4(false)
    setText5(false)
    setFifth(false);
    setSixth(false);
    
      }
  
  
  
  
  return (
      <div>
           
           <div onMouseEnter={changingColorHandler} className="firstDiv" style={{fontSize:"16px",fontWeight:"bolder", border: second ? "2px solid black" : "none",textAlign:"center",width:"400px",height:"260px" ,borderRadius:"15px", backgroundColor: second ? "red": "#f6f6f6", color: second ? "white": "black"}}>
           <p  style={{paddingTop:"90px"}}>{ text2 ? "Components":"What are the building blocks of React apps?"}</p>  
                 </div>
  
      </div>
    );
  }
