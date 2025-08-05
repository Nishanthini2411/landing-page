import { useState } from "react";

function Count() {
    
    const[number, setNumber]=useState(0);
        const [email, setEmail] = useState("");
        const handleSubmit = () => {
            alert('Current email : ${email}');
        };
        const handleChange=(event) => {
            setEmail(event.target.value);
        };

        return(
        <>

        <h1>
            Count ={number}
        </h1>
        <button onClick={()=>setNumber(number+1)}>increse</button>
        <br></br>
        <input type="email"
        placeholder="enter your email"
        value={email}
        onChange={handleChange}
        >
        </input>
        <button onClick={handleSubmit}>click</button>
        
        </>
    )
}
export default Count;