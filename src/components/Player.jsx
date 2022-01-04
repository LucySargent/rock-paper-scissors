import React from "react";

function PlayerButton(props) {
    return (
    <button onClick={() => props.update(props.stateFn)}>Click me!</button>
    );
}
export default PlayerButton;