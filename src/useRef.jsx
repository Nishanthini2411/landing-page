import { useRef } from "react";

function Stopwatch(){

    const inputRef0 = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const handleClick = () => {

        alert("error")
        const refArray=[inputRef0,inputRef1,inputRef2];

        for (let i of refArray) {
          const xyz =i.current.value.trim();
            if(xyz===""){
                i.current.focus();
                return;
            }

        }
    };
    return (
        <>
        <div>
         <input ref={inputRef0} placeholder="enter your email"></input>
            <br></br>
        <hr></hr>
            <input ref={inputRef1} placeholder="enter your mobile"></input>
        <br></br>
        <hr></hr>
            <input ref={inputRef2} placeholder="enter your password"></input>
        <br></br>
        <hr/>

        <button className="btn btn-success text-white,border" onClick={handleClick}>Click me to go there</button>
            
        </div>
        
        </>
    )

}

export default Stopwatch;