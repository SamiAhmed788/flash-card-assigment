export function Sixthcard({setText6,text6,setText5,text5,text4,setText4, text3,setText3,setText2,setText1,text1,first, setFirst, second, setSecond, third, setThird, fourth, setFourth, fifth, setFifth, sixth, setSixth }) {


  const changingColorHandler =()=>{
    setFirst(false);
    setText1(false)
    setSecond(false);
    setText2(false)
    setThird(false);
    setText3(false)
    setFourth(false);
    setText4(false)
    setText5(false)
    setFifth(false);
    setSixth(true);
    setText6(true)

      }





  return (
      <div>
             <div onMouseEnter={changingColorHandler} className="firstDiv" style={{fontSize:"16px",fontWeight:"bolder", border: sixth ? "2px solid black" : "none",textAlign:"center",width:"400px",height:"260px" ,borderRadius:"15px", backgroundColor: sixth ? "red": "#f6f6f6", color: sixth ? "white": "black"}}>
            <p  style={{paddingTop:"90px"}}>{text6 ? "Controlled component" : "What do we call an input element that is completely synchronised with state?"}</p>
        </div>
      </div>
    );
  }
