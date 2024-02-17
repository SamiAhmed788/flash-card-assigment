

export function ThirdCard({setText6,text6,setText5,text5,text4,setText4, text3,setText3,setText2,setText1,text1,first, setFirst, second, setSecond, third, setThird, fourth, setFourth, fifth, setFifth, sixth, setSixth  }) {
  
  const changingColorHandler =()=>{
    setFirst(false);
    setText1(false)
    setSecond(false);
    setText2(false)
    setThird(true);
    setText3(true)
    setFourth(false);
    setText4(false)
    setText5(false)
    setFifth(false);
    setSixth(false);
    
      }
  
  
  
  
  return (
      <div>
     <div onMouseEnter={changingColorHandler} className="firstDiv" style={{fontSize:"16px",fontWeight:"bolder", border: third ? "2px solid black" : "none",textAlign:"center",width:"400px",height:"260px" ,borderRadius:"15px", backgroundColor: third ? "red": "#f6f6f6", color: third ? "white": "black"}}>
            <p  style={{paddingTop:"90px"}}>{text3 ? "JSX": "What's the name of the syntax we use to describe a UI in React?"}</p>
        </div>
  
      </div>
    );
  }
