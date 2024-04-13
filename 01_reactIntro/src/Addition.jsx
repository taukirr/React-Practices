import React from "react";

function Add (){
    let a=12 , b=23, c=a+b;
    const newElement = React.createElement("h1", {id: {}}, "apple")
    ReactDOM.render(React.createElement(newElement), document.getElementById("root"));
    return(
        <>
        <h2>This h2 includes the addition of the numbers</h2>
        <button onClick={newElement}>click for add operation</button>
        </>
    )
}

export default Add