import React from 'react';

const Tip = () => {

    const handleOnClick = () => {
        alert('the button was clicked!');
    }

    return (
        //Try uncommenting one of the lines below and see the difference in behavior: more to read here: https://reactjs.org/docs/handling-events.html
        <button onClick={handleOnClick}>Click Me</button>
        // <button onClick={handleOnClick()}>Click Me</button>
    )
}

export default Tip;