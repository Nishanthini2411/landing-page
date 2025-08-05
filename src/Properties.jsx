function Properties(Nisha){

    const addition = (X,Z) => {
        const result = X+Z;
        return result;
    }

    const addition2 = function(G,H) {
        return G,H;
    }

    return(
        <>
        <h1>Hi! {Nisha.name}{"  "}{Nisha.content}</h1>
        
        <p>X+Z = {addition(10,20)}</p>
        <p>G+H ={addition2(10,20)}</p>
        </>
    );
}

export default Properties;