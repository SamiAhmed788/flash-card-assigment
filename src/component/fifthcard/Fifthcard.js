export function FifthCard({setText6,text6,setText5,text5,text4,setText4, text3,setText3,setText2,setText1,text1,first, setFirst, second, setSecond, third, setThird, fourth, setFourth, fifth, setFifth, sixth, setSixth }) {

  const changingColorHandler =()=>{
    setFirst(false);
    setText1(false)
    setSecond(false);
    setText2(false)
    setThird(false);
    setText3(false)
    setFourth(false);
    setText4(false)
    setText5(true)
    setFifth(true);
    setSixth(false);
    setText6(false)
    
      }


  return (
    <div onMouseEnter={changingColorHandler} className="firstDiv" style={{fontSize:"16px",fontWeight:"bolder", border: fifth ? "2px solid black" : "none",textAlign:"center",width:"400px",height:"260px" ,borderRadius:"15px", backgroundColor: fifth ? "red": "#f6f6f6", color: fifth ? "white": "black"}}>
    <p  style={{paddingTop:"90px"}} >{ text5 ? "useState hook":"How to give components memory?"}</p>  
          </div>

  );
}
